import { select, put, takeLatest, delay, takeEvery } from "redux-saga/effects";

import { actionTypes } from "../actionTypes";
import admeApi from "../APIs/adme";
import { commonStatuses } from "../models/common";
import moment from 'moment';
import { genericAction } from "../actions";
import * as globalModels from "influencers-models";


const apifetchingStatus = (state) => state.basics.api.fetchingStatus;

// function* genericMutation(action) {

//     const command = yield admeApi.generic(action);
//     let result;
//     try {
//         yield controlPreRequisites();
//         result = yield command.resolver(action);

//         if (result && result[command.endpointName].success) {
//             let datax = JSON.parse(result[command.endpointName].data);
//             yield put(command.onSuccess({ data: datax }));
//         } else yield put(command.onUnsuccess({ errors: result[command.endpointName].data }));
//     } catch (e) {
//         console.log(e)
//         yield put(command.onFailure({ errors: command.failureMessage }));
//     }
// }

function* genericQuery(action) {

    const command = yield admeApi.generic(action);
    try {
        yield controlPreRequisites();
        const result = yield command.resolver(action);

        if (result && result[command.endpointName]) {
            yield put(command.onSuccess({ data: result[command.endpointName] }));
        } else yield put(command.onUnsuccess({ errors: command.onUnsuccessMessage }));
    } catch (e) {
        yield put(command.onFailure({ errors: command.failureMessage }));
    }
}

function* genericComponentBoundQuery(action) {

    const command = yield admeApi.generic(action);
    try {
        if (!action.payload.delegate) throw Error("Missing delegate component function");
        yield controlPreRequisites();
        const result = yield command.resolver(action);

        if (result && result[command.endpointName]) {
            yield action.payload.delegate({ data: result[command.endpointName] });
        } else yield action.payload.delegate({ errors: command.onUnsuccessMessage });
    } catch (e) {
        yield action.payload.delegate({ errors: command.failureMessage });
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

function* fireFetchAdvertisements(action) {
    yield put(genericAction(actionTypes.FETCH_ADVERTISEMENTS, {[globalModels.advertisementFields.campaignId]: action.payload[globalModels.campaignFields._id]}));
}




export default function* userIdentity() {
    // yield takeLatest(actionTypes.VALIDATE_TOKEN, genericMutation);
    yield takeLatest(actionTypes.FETCH_COMPANIES, genericQuery);
    yield takeLatest(actionTypes.FETCH_COMPANY, genericQuery);
    yield takeLatest(actionTypes.FETCH_CAMPAIGNS, genericQuery);
    yield takeLatest(actionTypes.FETCH_ADVERTISEMENTS, genericQuery);
    yield takeEvery(actionTypes.FETCH_POSTS, genericComponentBoundQuery);
    yield takeLatest(actionTypes.SELECT_CAMPAIGN, fireFetchAdvertisements);

}
