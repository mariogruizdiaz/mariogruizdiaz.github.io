/* eslint-disable consistent-return */
/* eslint-disable flowtype/require-return-type */
// @flow
import { authentication } from "./commands";
import { graphQL } from "../connectors";


export default {
    login: function* login(payload) {
        try {
            const mutation = authentication.login;
            const response = yield graphQL.executeMutation(mutation, payload);
            return response;
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(`Error on login: ${e}`);
        }
    },
    validateToken: function* validateToken(payload) {
        try {
            const mutation = authentication.validateToken;
            const response = yield graphQL.executeMutation(mutation, payload);
            return response;
        } catch (e) {
            console.log(`Error validating token: ${e}`);
        }
    }
};
