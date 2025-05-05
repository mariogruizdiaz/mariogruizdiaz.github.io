import { eventChannel } from "redux-saga";
import { put, take, call, select, takeLatest, fork, race, delay } from "redux-saga/effects";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { actionTypes } from "../actionTypes";
import { genericAction } from "../actions";

const clusterSelector = (state) => state.basics.api;
const securitySelector = (state) => state.security;


// Crea un eventChannel para escuchar los cambios en Firebase Realtime Database
function createFirebaseConfigChannel() {
    // Se define la ruta en Firebase según el entorno (production vs. qa)
    const environment = process.env.REACT_APP_ENV;
    const envPath = environment === "production" ? "adme-prod" : "adme-qa";
    const configRef = firebase
        .app()
        .database("https://adme-277711.firebaseio.com")
        .ref(`environments/k8s/${envPath}/adme-api`);

    return eventChannel(emitter => {
        const listener = configRef.on("value", snapshot => {
            const config = snapshot.val();
            emitter(config);
        });
        return () => {
            configRef.off("value", listener);
        };
    });
}

// Saga que escucha el canal de Firebase y detecta cambios en la configuración
function* firebaseConfigListenerSaga() {
    const environment = process.env.REACT_APP_ENV;
    // Aquí decidimos si queremos o no escuchar cambios en entornos que no sean producción
    if (environment !== "production") {
        console.log("Skipping firebase config listener in non-production environment");
        return;
    }

    const channel = yield call(createFirebaseConfigChannel);
    try {
        while (true) {
            const newConfig = yield take(channel);
            // Se valida que la nueva configuración tenga el atributo "url"
            if (newConfig && newConfig.url) {
                const currentCluster = yield select(clusterSelector);
                if (`https://${newConfig.url}/graphql` !== currentCluster.url) {
                    yield put(
                        genericAction(actionTypes.CLUSTER_UPDATE_DETECTED, {
                            url: `https://${newConfig.url}/graphql`,
                        })
                    );
                }
            }
        }
    } finally {
        channel.close();
    }
}

// Saga para cargar la configuración inicial usando fetch
function* loadInitialClusterConfigSaga() {
    try {
        const environment = process.env.REACT_APP_ENV;
        switch (environment) {
            case "production":
                const envPath = "adme-prod";
                const response = yield call(
                    fetch,
                    `https://adme-277711.firebaseio.com/environments/k8s/${envPath}/adme-api.json`
                );
                const config = yield response.json();
                if (config && config.url) {
                    yield put(
                        genericAction(actionTypes.SET_CLUSTER_CONFIG, {
                            url: `https://${config.url}/graphql`,
                        })
                    );
                }
                break;
            case "qa":
                yield put(
                    genericAction(actionTypes.SET_CLUSTER_CONFIG, {
                        url: 'https://api-qa.adme.com.ar/graphql',
                    })
                );
                break;
            default:
                console.log("Skipping initial cluster config load in non-production environment");
                return;

        }
       
    } catch (error) {
        console.error("Error loading initial cluster config", error);
    }
}

// Maneja la acción de actualización de configuración
function* handleClusterUpdateSaga(action) {
    yield put(genericAction(actionTypes.SET_CLUSTER_CONFIG, action.payload));
    const security = yield select(securitySelector);
    if (security && security.authenticated) {
        yield put(genericAction(actionTypes.LOGOUT, {}));
    }
}

function* waitForRehydrate() {
    // Opcional: Si ya se encuentra rehidratado el estado, no se espera
    const rehydrated = yield select(state => state._persist && state._persist.rehydrated);
    if (!rehydrated) {
        yield race({
            rehydrate: take('persist/REHYDRATE'),
            timeout: delay(1000)
        });
    }
}

// Saga raíz que arranca las demás
export default function* cluster() {
    yield call(waitForRehydrate);
    yield fork(loadInitialClusterConfigSaga);
    yield fork(firebaseConfigListenerSaga);
    yield takeLatest('persist/REHYDRATE', loadInitialClusterConfigSaga);
    yield takeLatest(actionTypes.CLUSTER_UPDATE_DETECTED, handleClusterUpdateSaga);
}
