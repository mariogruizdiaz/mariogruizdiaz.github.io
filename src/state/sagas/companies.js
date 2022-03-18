/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable flowtype/require-return-type */
/* eslint-disable flowtype/require-parameter-type */
// @flow
import { select, put, takeLatest, takeEvery, fork } from "redux-saga/effects";
import * as globalModels from 'influencers-models';
import { LOGOUT, FETCH_USER_IDENTITY, CREATE_PERSON_SUCCESS, VALIDATE_TOKEN_SUCCESS, LOGIN_SUCCESS,
    FETCH_SPONSORSHIP_CAMPAIGNS, FETCH_SPOT_CAMPAIGNS, FETCH_ADVERTISING_CAMPAIGNS, FETCH_SPONSORSHIP_CAMPAIGNS_CATEGORIES, FETCH_SPOT_CAMPAIGNS_CATEGORIES,
    FETCH_ADVERTISING_CAMPAIGNS_CATEGORIES, GRANT_APPLICATION_ACCESS, FETCH_ADVERTISING_ADVERTISEMENTS, FETCH_SPONSORSHIP_ADVERTISEMENTS,
    FETCH_SPOT_ADVERTISEMENTS, FETCH_REFERRALS, FETCH_POTENTIAL_REFERRALS, PERSON_SUBSCRIPTION_NEW_DATA,
    PERSON_SUBSCRIPTION_FAIL, UPDATE_PERSON_BASIC_INFO, CREATE_SOCIALMEDIALINK_WORKFLOW_SUCCESS,
    SUBSCRIBE_TO_USER_DATA, UNSUBSCRIBE_TO_USER_DATA, UNSUBSCRIVE_ALL, FETCH_USER_DATA
} from "../actionTypes";
import * as actionTypes from "../actionTypes";
import { genericAction } from "../actions";


function* executeLogout(action) {
    try {
        yield localStorage.removeItem("@token");
        yield put(genericAction(UNSUBSCRIVE_ALL, {}));
        yield put(logoutSuccess({data: null}));
    } catch (e) {
        yield put(logoutFail());
    }
}


export default function* companies() {
    yield takeLatest(LOGOUT, executeLogout);
}
