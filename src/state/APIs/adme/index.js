import { genericResolver} from "./genericResolver";
import { consecuentActionsByAction } from "../../actions";

import { actionTypes} from "../../actionTypes";

const endpointMapper = async (type) => {
    switch (type) {
    case actionTypes.FETCH_COMPANIES: return "companies";
    case actionTypes.FETCH_COMPANY: return "companies";
    case actionTypes.FETCH_CAMPAIGNS: return "campaigns";
    case actionTypes.FETCH_ADVERTISEMENTS: return "advertisements";
    case actionTypes.FETCH_POSTS: return "posts";
    case actionTypes.FETCH_TERMS_AND_CONDITIONS: return "termsAndConditionsHistoric";
    case actionTypes.SIGNUP: return "createPersonPrimary";
    case actionTypes.CREATE_COMPANY: return "createCompanyByPerson";
    case actionTypes.UPDATE_COMPANY: return "updateCompany";
    case actionTypes.UPDATE_USER: return "updatePersonPrimary";
    case actionTypes.FETCH_ADVERTISEMENT: return "advertisements";
    case actionTypes.UPDATE_ADVERTISEMENT: return "updateAdvertisement";
    case actionTypes.FETCH_ADVERTISEMENT_BY_CODE: return "advertisements";
    case actionTypes.TRACK_APP_DOWNLOAD: return "trackEvent";
    default: return type.toLowerCase();
    }
};

export default {
    generic: async (action) => {
        const actions = await consecuentActionsByAction(action);
        return {
            resolver: genericResolver,
            endpointName: await endpointMapper(action.type),
            unsuccessMessage: "Something went wrong!",
            failureMessage: "Service not available right now!",
            onSuccess: actions.success,
            onUnsuccess: actions.unsuccess,
            onFailure: actions.fail
        };
    },
    
};
