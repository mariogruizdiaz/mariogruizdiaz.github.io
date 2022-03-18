import { actionTypes } from "../actionTypes";
  
  const initialState = {
    api: {
      host: null,
      port: null,
      fetchingStatus: "none"
    }
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.FETCH_API_REFERENCES: {
        return {
          ...state,
          api: {
            ...state.api,
            fetchingStatus: "fetching"
          }
        };
      }
      case actionTypes.FETCH_API_REFERENCES_SUCCESS: {
        return {
          ...state,
          api: {
            host: action.payload.data.host,
            port: action.payload.data.port,
            fetchingStatus: "fetched"
          }
        };
      }
      case actionTypes.FETCH_API_REFERENCES_UNSUCCESS:
      case actionTypes.FETCH_API_REFERENCES_FAIL: {
        return {
          ...state,
          api: {
            ...state.api,
            fetchingStatus: "failed"
          }
        };
      }
      default:
        return state;
    }
  };
  