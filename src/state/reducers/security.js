import { actionTypes } from "../actionTypes";
import { commonStatuses } from "../models/common";
  
  const initialState = {
    authenticated: false,
    roles: null,
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
      default:
        return state;
    }
  };
  