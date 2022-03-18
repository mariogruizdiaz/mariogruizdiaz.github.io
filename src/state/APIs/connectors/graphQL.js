/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable flowtype/require-return-type */
/* eslint-disable require-yield */
/* eslint-disable max-len */
/* eslint-disable dot-notation */
// @flow
// import fetchLib from "graphql-fetch";

// import * as Expo from "expo";
import Constants from "expo-constants";
import { GraphQLClient, request } from "graphql-request";
import {SubscriptionClient} from "subscriptions-transport-ws";
import { eventChannel, END } from "redux-saga";

import * as localStorage from "./localStorage";

let client = null;
// const fetch = fetchLib(`${ADME_API_HOST}:${ADME_API_PORT}/graphql`);
const { ADME_API_HOST, ADME_API_PORT } = Constants.manifest.extra;
const endpoint = `${ADME_API_HOST}:${ADME_API_PORT}/graphql`;
const subsciptionEndpoint = `${ADME_API_HOST}:${ADME_API_PORT}/subscriptions`;

const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
        mode: "no-cors"
    }
});

const getHeaders = async () => {
    const head = {
        mode: "no-cors"
    };
    if (localStorage.getItem("@token") !== null) {
        return {
            ...head,
            "x-token": localStorage.getItem("@token")
        };
    }
    return head;
};

export const executeCommand = async (mutation: string, variables) => request(endpoint, mutation, variables)
    .then(data => Promise.resolve(data))
    .catch(err => {
        return Promise.resolve(err.response.data || err.response.errors);
    });

export const subscribe = function* (command: string, variables, endpointName: string) {
    const token  = yield localStorage.getItem("@token");
    client = new SubscriptionClient(subsciptionEndpoint, {
        reconnect: true,
        connectionParams: {
          headers: {
            'x-token': token
          },
        },
    });
    
    return eventChannel(emitter => {
        client.onConnected(() => {
            client.request({
                query: command,
                operationName: endpointName,
                variables: {
                    ...variables
                }
            }).subscribe({
                next: async (result) => {
                    // Filter here the result
                    // console.log('new data', result);
                    emitter({data: result.data[endpointName].data });
                }
            });
        });

        // Unsubscribe function
        return () => {
            // console.log('Unsubscribe was called');
            emitter(END);
            client.unsubscribeAll();

        };
    });
};
