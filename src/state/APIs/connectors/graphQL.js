import { request } from "graphql-request";

export const executeCommand = async (endpoint, mutation, variables) => request(endpoint, mutation, variables)
    .then(data => Promise.resolve(data))
    .catch(err => {
        return Promise.resolve(err.response.data || err.response.errors);
    });
