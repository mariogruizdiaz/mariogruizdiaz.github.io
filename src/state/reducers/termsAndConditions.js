import { actionTypes } from "../actionTypes";
import { commonStatuses, commonStatusesDescriptions } from "../models/common";
//import * as globalModels from "influencers-models";

const VERSION = "version";
const URL = "url";
const APP_TYPES = "appTypes";
const LANGUAGE = "language";

const initialState = {
    termsAndConditionsStatus: commonStatuses.none,
    termsAndConditionsStatusDescription: commonStatusesDescriptions[commonStatuses.none],
    url: null,
    version: null,
    appTypes: null,
    language: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TERMS_AND_CONDITIONS: {
            return {
                ...state,
                termsAndConditionsStatus: commonStatuses.loading,
                termsAndConditionsStatusDescription: commonStatusesDescriptions[commonStatuses.loading],
            };
        }
        case actionTypes.FETCH_TERMS_AND_CONDITIONS_SUCCESS: {
            return {
                ...state,
                termsAndConditionsStatus: commonStatuses.loaded,
                termsAndConditionsStatusDescription: commonStatusesDescriptions[commonStatuses.loaded],
                url: action.payload.data[0][URL],
                version: action.payload.data[0][VERSION],
                appTypes: action.payload.data[0][APP_TYPES],
                language: action.payload.data[0][LANGUAGE]
            };
        }
        case actionTypes.FETCH_TERMS_AND_CONDITIONS_UNSUCCESS:
        case actionTypes.FETCH_TERMS_AND_CONDITIONS_FAIL: {
            return {
                ...state,
                termsAndConditionsStatus: commonStatuses.failed,
                termsAndConditionsStatusDescription: commonStatusesDescriptions[commonStatuses.failed],
                url: null,
                version: null,
            };
        }
        default:
            return state;
    }
};
