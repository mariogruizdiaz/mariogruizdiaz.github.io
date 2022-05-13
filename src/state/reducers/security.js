import { actionTypes } from "../actionTypes";
import { commonStatuses, commonStatusesDescriptions } from "../models/common";
import * as globalModels from "adme-models";

const FIELD_USER = "user";
const FIELD_USER_PERMISSIONS = "permissions";
const initialState = {
    authenticated: false,
    authenticationStatus: commonStatuses.none,
    authenticationStatusDescription: commonStatusesDescriptions[commonStatuses.none],
    permissions: [],
    firstName: null,
    lastName: null,
    thumbnail: null,
    guestToken: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTHENTICATE_GUEST: {
            return {
                ...state,
                api: {
                    ...state.api,
                    fetchingStatus: commonStatuses.loading
                }
            };
        }
        case actionTypes.AUTHENTICATE_GUEST_SUCCESS: {
            return {
                ...state,
                api: {
                    host: action.payload.data.host,
                    port: action.payload.data.port,
                    fetchingStatus: commonStatuses.loaded
                }
            };
        }
        case actionTypes.AUTHENTICATE_GUEST_UNSUCCESS:
        case actionTypes.AUTHENTICATE_GUEST_FAIL: {
            return {
                ...state,
                api: {
                    ...state.api,
                    fetchingStatus: commonStatuses.failed
                }
            };
        }
        case actionTypes.AUTHENTICATE: {
            return {
                ...state,
                api: {
                    ...state.api,
                    fetchingStatus: commonStatuses.loading
                }
            };
        }
        case actionTypes.AUTHENTICATE_SUCCESS: {
            return {
                ...state,
                api: {
                    host: action.payload.data.host,
                    port: action.payload.data.port,
                    fetchingStatus: commonStatuses.loaded
                }
            };
        }
        case actionTypes.AUTHENTICATE_UNSUCCESS:
        case actionTypes.AUTHENTICATE_FAIL: {
            return {
                ...state,
                api: {
                    ...state.api,
                    fetchingStatus: commonStatuses.failed
                }
            };
        }
        case actionTypes.LOGIN: {
            return {
                ...state,
                authenticationStatus: commonStatuses.loading,
                authenticationStatusDescription: commonStatusesDescriptions[commonStatuses.loading],
            };
        }
        case actionTypes.LOGIN_SUCCESS: {
            console.log(action.payload.data);
            return {
                ...state,
                authenticationStatus: commonStatuses.loaded,
                authenticationStatusDescription: commonStatusesDescriptions[commonStatuses.loaded],
                authenticated: true,
                permissions: action.payload.data[FIELD_USER][FIELD_USER_PERMISSIONS],
                firstName: action.payload.data[FIELD_USER][globalModels.personFields.firstName],
                lastName: action.payload.data[FIELD_USER][globalModels.personFields.lastName],
                thumbnail: action.payload.data[FIELD_USER][globalModels.personFields.thumbnail]

            };
        }
        case actionTypes.LOGIN_UNSUCCESS:
        case actionTypes.LOGIN_FAIL: {
            return {
                ...state,
                authenticationStatus: commonStatuses.failed,
                authenticationStatusDescription: commonStatusesDescriptions[commonStatuses.failed],
                authenticated: false,
                permissions: []
            };
        }
        case actionTypes.LOGOUT: {
            return {
                ...initialState
            };
        }
        case actionTypes.APPLY_GUEST_TOKEN: {
            return {
                ...initialState,
                guestToken: action.payload
            };
        }
        default:
            return state;
    }
};
