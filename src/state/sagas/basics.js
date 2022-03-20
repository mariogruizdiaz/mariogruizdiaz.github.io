
import { put, takeLatest } from "redux-saga/effects";
import { actionTypes } from "../actionTypes";
import { genericAction } from "../actions";


function* getApiReferences(action) {
    try {
        const configDbUrl = `https://adme-277711.firebaseio.com/environments/k8s/adme-qa/adme-api.json`;

        const response = yield fetch(configDbUrl, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        });
        yield put(genericAction(actionTypes.FETCH_API_REFERENCES_SUCCESS, {
            data: {
                ...yield response.json()
            },
            success: true,
            errors: null
        }));
    } catch (ex) {
        console.log(ex);
        yield put(genericAction(actionTypes.FETCH_API_REFERENCES_FAIL, {
            data: null,
            success: false,
            errors: ex
        }));

    }
}


export default function* companies() {
    yield takeLatest(actionTypes.FETCH_API_REFERENCES, getApiReferences);
}
