// import { select } from "redux-saga/effects";
import { graphQL } from "../connectors";
import { commandCollection } from "./commands";
import { select } from "redux-saga/effects";

const clusterSelector = (state) => state.basics.api.url;




const genericResolver = function* genericResolver(action) {
    try {
        const apiURL = yield select(clusterSelector);
        const command = commandCollection[action.type];
        const response = yield graphQL.executeCommand(apiURL, command, action.payload);
        return response;
    } catch (e) {
        console.log(`Error executing command: ${action.type}`);
        console.log(e);
        throw e;
    }
};

export {
    genericResolver
};
