import { put, takeLatest, takeEvery } from "redux-saga/effects";

import * as actionTypes from "../actionTypes";
import admeApi from "../APIs/adme";

function* genericMutation(action) {
    const command = yield admeApi.generic(action);
    let result;
    try {
        result = yield command.resolver(action);
        
        if (result && result[command.endpointName].success) {
            let datax = JSON.parse(result[command.endpointName].data);
            yield put(command.onSuccess({data: datax}));
        } else yield put(command.onUnsuccess({errors: result[command.endpointName].data}));
    } catch (e) {
        console.log(e)
        yield put(command.onFailure({errors: command.failureMessage}));
    }
}

function* genericQuery(action) {
    const command = yield admeApi.generic(action);
    try {
        const result = yield command.resolver(action);

        if (result && result[command.endpointName]) {
            yield put(command.onSuccess({data: result[command.endpointName]}));
        } else yield put(command.onUnsuccess({errors: command.onUnsuccessMessage}));
    } catch (e) {
        yield put(command.onFailure({errors: command.failureMessage}));
    }
}

const genericSubscriptionResolver = function* genericResolver(action) {
    const command = yield admeApi.genericSubscriptionCommand(action);
    try {
        yield command.subscriber(action, command);
    } catch (e) {
        console.log(`Error executing ${action.type}. Command: ${JSON.stringify(command)}`, e);
        yield put(command.onFailure({errors: JSON.stringify(e)}));
    }
};

const genericUnsubscriptionResolver = function* genericResolver(action) {
    const command = yield admeApi.genericUnsubscriptionCommand(action);
    try {
        yield command.unsubscriber(action, command);
    } catch (e) {
        console.log(`Error executing ${action.type}. Command: ${JSON.stringify(command)}`, e);
        yield put(command.onFailure({errors: JSON.stringify(e)}));
    }
};

const UnsubscriptionAllResolver = function* genericResolver(action) {
    const command = yield admeApi.genericUnsubscriptionAllCommand(action);
    try {
        yield command.unsubscriber(action, command);
    } catch (e) {
        console.log(`Error executing ${action.type}. Command: ${JSON.stringify(command)}`, e);
        yield put(command.onFailure({errors: JSON.stringify(e)}));
    }
};


export default function* userIdentity() {
    yield takeLatest(actionTypes.VALIDATE_TOKEN, genericMutation);
    yield takeLatest(actionTypes.FETCH_CATEGORIES, genericQuery);
    
}
