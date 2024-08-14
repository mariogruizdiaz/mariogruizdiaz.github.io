import { request } from "graphql-request";

export const executeCommand = async (endpoint, mutation, variables) => request(endpoint, mutation, variables)
    .then(data => Promise.resolve({data, errors: []}))
    .catch(err => {
        return Promise.resolve({data: err.response.data, errors: err.response.errors});
    });
