import { put, takeEvery, delay } from "redux-saga/effects";

import { actionTypes } from "../actionTypes";
import { commonStatuses, commonStatusesDescriptions } from "../models/common";
import { genericAction } from "../actions";
import * as globalModels from "influencers-models";


let bufferedPostResults = {};
let running = false;

function* bufferedSuccessPusher(action) {


    if (!running){
        running = true;
        yield put(genericAction(actionTypes.FETCH_PERSON_CREDENTIALS_SUCCESS_BUFFER_FLUSH, {}));
    }

    if (action.payload.data) {
        const advertisementId = action.payload.inputParamaters[globalModels.postFields.advertisementId];
        yield bufferedPostResults[advertisementId] = {
            posts: {
                items: action.payload.data,
                pageIndex: -1,
                fetchStatus: commonStatuses.loaded,
                fetchStatusDescription: commonStatusesDescriptions[commonStatuses.loaded],

            }
        };

    } else if (action.payload.error) {
        const advertisementId = action.payload.inputParamaters[globalModels.postFields.advertisementId];
        yield bufferedPostResults[advertisementId] = {
            posts: {
                items: [],
                pageIndex: -1,
                fetchStatus: commonStatuses.failed,
                fetchStatusDescription: commonStatusesDescriptions[commonStatuses.failed],

            }
        };
       

    } else {
        throw new Error("Known response");
    }
}

function* FlushResults(action) {
    yield delay(500);
    yield put(genericAction(actionTypes.FETCH_PERSON_CREDENTIALS_SUCCESS_BUFFER_FLUSH_SUCCESS, { data: bufferedPostResults }));
    bufferedPostResults = {};
    running = false;
}




export default function* userIdentity() {
    yield takeEvery(actionTypes.FETCH_PERSON_CREDENTIALS_SUCCESS, bufferedSuccessPusher);
    yield takeEvery(actionTypes.FETCH_PERSON_CREDENTIALS_FAIL, bufferedSuccessPusher);
    yield takeEvery(actionTypes.FETCH_PERSON_CREDENTIALS_UNSUCCESS, bufferedSuccessPusher);
    yield takeEvery(actionTypes.FETCH_PERSON_CREDENTIALS_SUCCESS_BUFFER_FLUSH, FlushResults);

}
