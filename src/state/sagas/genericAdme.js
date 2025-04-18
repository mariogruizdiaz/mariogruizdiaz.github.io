import { select, put, takeLatest, delay, takeEvery } from "redux-saga/effects";

import { actionTypes } from "../actionTypes";
import admeApi from "../APIs/adme";
import { commonStatuses } from "../models/common";
import moment from 'moment';


const apifetchingStatus = (state) => state.basics.api.fetchingStatus;

function* genericMutation(action) {
    const command = yield admeApi.generic(action);
    let result;
    try {
      
        result = yield command.resolver(action);
        if (result && result.data && result.data[command.endpointName]?.success) {
            let datax = JSON.parse(result.data[command.endpointName].data);
            yield put(command.onSuccess({data: datax}));
        } else yield put(command.onUnsuccess({errors: result.errors}));
    } catch (e) {
        console.log(e)
        yield put(command.onFailure({errors: command.failureMessage}));
    }
}

function* genericQuery(action) {

    const command = yield admeApi.generic(action);
    try {
        yield controlPreRequisites();
        const result = yield command.resolver(action);
        if (result && result.data && result.data[command.endpointName]) {
            yield put(command.onSuccess({ data: result.data[command.endpointName], inputParamaters: action.payload }));
        } else yield put(command.onUnsuccess({ errors: command.onUnsuccessMessage, inputParamaters: action.payload }));
    } catch (e) {
        yield put(command.onFailure({ errors: command.failureMessage, inputParamaters: action.payload }));
    }
}

function* controlPreRequisites() {
    let apiReferencesStatus = yield select(apifetchingStatus);
    if (apiReferencesStatus === commonStatuses.failed) {
        throw Error("Is it not possible to execute the query. Failed the loading of the API references");
    }
    let waitingTimeLimit = moment().add(5, 'second');
    while ((apiReferencesStatus === commonStatuses.none || apiReferencesStatus === commonStatuses.loading) && moment() < waitingTimeLimit) {
        yield delay(100);
        apiReferencesStatus = yield select(apifetchingStatus);
    }

    if (apiReferencesStatus === commonStatuses.none || apiReferencesStatus === commonStatuses.loading) {
        throw Error("Waiting API reference be loaded: Timeout");
    }
}

export default function* userIdentity() {
    yield takeLatest(actionTypes.LOGIN, genericMutation);
    yield takeLatest(actionTypes.FETCH_COMPANIES, genericQuery);
    yield takeLatest(actionTypes.FETCH_COMPANY, genericQuery);
    yield takeLatest(actionTypes.FETCH_CAMPAIGNS, genericQuery);
    yield takeLatest(actionTypes.FETCH_ADVERTISEMENTS, genericQuery);
    yield takeEvery(actionTypes.FETCH_POSTS, genericQuery);
    yield takeEvery(actionTypes.FETCH_PERSON_CREDENTIALS, genericQuery);
    yield takeLatest(actionTypes.FETCH_TERMS_AND_CONDITIONS, genericQuery);
    yield takeLatest(actionTypes.SIGNUP, genericMutation);
    yield takeLatest(actionTypes.CREATE_COMPANY, genericMutation);
    yield takeLatest(actionTypes.UPDATE_COMPANY, genericMutation);
    yield takeLatest(actionTypes.UPDATE_USER, genericMutation);
    yield takeLatest(actionTypes.FETCH_ADVERTISEMENT, genericQuery);
    yield takeLatest(actionTypes.FETCH_ADVERTISEMENT_BY_CODE, genericQuery);
    yield takeLatest(actionTypes.UPDATE_ADVERTISEMENT, genericQuery);
    yield takeLatest(actionTypes.TRACK_APP_DOWNLOAD, genericMutation);

}