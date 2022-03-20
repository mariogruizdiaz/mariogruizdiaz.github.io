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
