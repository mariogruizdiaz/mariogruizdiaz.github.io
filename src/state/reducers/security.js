import { actionTypes } from "../actionTypes";
import { commonStatuses, commonStatusesDescriptions } from "../models/common";

const FIELD_USER = "user";
const FIELD_USER_PERMISSIONS = "permissions";

const initialState = {
    api: null,
    authenticated: false,
    authenticationStatus: commonStatuses.none,
    authenticationStatusDescription: commonStatusesDescriptions[commonStatuses.none],
    permissions: []
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
            return {
                ...state,
                authenticationStatus: commonStatuses.loading,
                authenticationStatusDescription: commonStatusesDescriptions[commonStatuses.loading],
                authenticated: true,
                permissions: action.payload.data[FIELD_USER][FIELD_USER_PERMISSIONS],
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
        default:
            return state;
    }
};
