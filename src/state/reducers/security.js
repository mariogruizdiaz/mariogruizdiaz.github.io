import { actionTypes } from "../actionTypes";
import { commonStatuses, commonStatusesDescriptions } from "../models/common";
import * as globalModels from "influencers-models";

const FIELD_USER = "user";
const FIELD_COMPANY = "company";
const FIELD_USER_PERMISSIONS = "permissions";
const initialState = {
    authenticated: false,
    authenticationStatus: commonStatuses.none,
    authenticationStatusDescription: commonStatusesDescriptions[commonStatuses.none],
    permissions: [],
    _id: null,
    firstName: null,
    lastName: null,
    email: null,
    guestToken: null,
    company: {
      status: commonStatuses.none,
      statusDescription: commonStatusesDescriptions[commonStatuses.none],
      id: null,
      name: null,
      logo: null,
      thumbnail: null,
      cellPhone: null,
      socialMedia : {
        webSite : null,
        instagram : null,
        facebook : null,
        twitter : null
    },
    }
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
        case actionTypes.CREATE_COMPANY:{
          return {
                ...state,
                company: {
                  ...state.company,
                  status: commonStatuses.loading,
                  statusDescription: null,
                }
            };
        }
        case actionTypes.SIGNUP:
        case actionTypes.LOGIN: {
            return {
                ...state,
                authenticationStatus: commonStatuses.loading,
                authenticationStatusDescription: null,
            };
        }
        case actionTypes.CREATE_COMPANY_SUCCESS: {
          return {
                ...state,
                company: {
                  ...action.payload.data[FIELD_USER][FIELD_COMPANY], 
                  status: commonStatuses.saved,
                  statusDescription: commonStatusesDescriptions[commonStatuses.saved],
                },
                permissions: action.payload.data[FIELD_USER][FIELD_USER_PERMISSIONS],
            };
        }
        case actionTypes.CREATE_COMPANY_FAIL: {
          return {
                ...state,
                company: {
                  ...state.company,
                  status: commonStatuses.notAvailable,
                  statusDescription: null,
                }
            };
        }
        case actionTypes.CREATE_COMPANY_UNSUCCESS: {
          return {
                ...state,
                company: {
                  ...state.company, 
                  status: commonStatuses.failed,
                  statusDescription: action.payload.errors[0].message, 
                },
            };
        }
        case actionTypes.SIGNUP_SUCCESS:
        case actionTypes.LOGIN_SUCCESS: {
            const company = !!action.payload.data[FIELD_USER][FIELD_COMPANY] ? action.payload.data[FIELD_USER][FIELD_COMPANY] : initialState.company;
            return {
                ...state,
                authenticationStatus: commonStatuses.loaded,
                authenticationStatusDescription: null,
                authenticated: true,
                permissions: action.payload.data[FIELD_USER][FIELD_USER_PERMISSIONS],
                _id: action.payload.data[FIELD_USER][globalModels.personFields._id],
                firstName: action.payload.data[FIELD_USER][globalModels.personFields.firstName],
                lastName: action.payload.data[FIELD_USER][globalModels.personFields.lastName],
                email: action.payload.data[FIELD_USER][globalModels.personFields.email],
                company,
            };
        }
        case actionTypes.SIGNUP_CLEAR_STATUS: {
          return {
                ...state,
                authenticationStatus: commonStatuses.none,
                authenticationStatusDescription: commonStatusesDescriptions[commonStatuses.none],
          }
        }
        case actionTypes.SIGNUP_UNSUCCESS:
        case actionTypes.LOGIN_UNSUCCESS:
          {
            return {
                ...state,
                authenticationStatus: commonStatuses.failed,
                authenticationStatusDescription: action.payload.errors[0].message,
                authenticated: false,
                permissions: []
            };
          }
        case actionTypes.SIGNUP_FAIL:
        case actionTypes.LOGIN_FAIL: {
            return {
                ...state,
                authenticationStatus: commonStatuses.notAvailable,
                authenticationStatusDescription: null,
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
        case actionTypes.UPDATE_USER:
          return {
                ...state,
                authenticationStatus: commonStatuses.saving,
                authenticationStatusDescription: null
              };
        case actionTypes.UPDATE_USER_SUCCESS:
          return {
            ...state,
            authenticationStatus: commonStatuses.saved,
            authenticationStatusDescription: null,
            firstName: action.payload.data[FIELD_USER][globalModels.personFields.firstName],
            lastName: action.payload.data[FIELD_USER][globalModels.personFields.lastName],
          };
        case actionTypes.UPDATE_USER_FAIL:
          return {
            ...state,
            authenticationStatus: commonStatuses.failed,
            authenticationStatusDescription: action.payload.message
          };
        case actionTypes.UPDATE_COMPANY:
          return {
            ...state,
            company: {
              ...state.company,
              status: commonStatuses.saving,
              statusDescription: null,
            }
          };
        case actionTypes.UPDATE_COMPANY_SUCCESS:
          return {
            ...state,
            company: {
              ...state.company,
              status: commonStatuses.saved,
              statusDescription: null,
              name: action.payload.data.name,
              logo: action.payload.data.logo,
              cellPhone: action.payload.data.cellPhone,
              thumbnail: action.payload.data.thumbnail
            }
          };
        case actionTypes.UPDATE_COMPANY_FAIL:
          return {
            ...state,
            company: {
              ...state.company,
              status: commonStatuses.failed,
              statusDescription: action.payload.message
            }
      };
        default:
            return state;
    }
};
