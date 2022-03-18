// @flow
import userIdentity from "./userIdentity";
import newUser from "./newUser";
import { genericResolver, genericSubscriber, genericUnsubscriber, unsubscribeAll } from "./genericResolver";
import { consecuentActionsByAction, consecuentSubscriptionActionsByAction } from "../../actions";
import * as globalModels from "influencers-models";

import {
    VERIFY_EMAIL,
    VALIDATE_TOKEN,
    FETCH_GENDERS,
    FETCH_COUNTRIES,
    FETCH_STATES,
    FETCH_CITIES,
    CREATE_PERSON,
    UPDATE_PERSON,
    DO_SOCIAL_MEDIA_LOGIN,
    SOCIAL_MEDIA_LOGIN,
    FETCH_SPONSORSHIP_CAMPAIGNS, FETCH_SPOT_CAMPAIGNS, FETCH_ADVERTISING_CAMPAIGNS, FETCH_SPONSORSHIP_CAMPAIGNS_CATEGORIES, FETCH_SPOT_CAMPAIGNS_CATEGORIES,
    FETCH_ADVERTISING_CAMPAIGNS_CATEGORIES, CREATE_AD, FETCH_CATEGORIES, GRANT_APPLICATION_ACCESS, FETCH_ADVERTISING_ADVERTISEMENTS, FETCH_SPONSORSHIP_ADVERTISEMENTS,
    FETCH_SPOT_ADVERTISEMENTS, FETCH_NON_SPONSORED_ADVERTISEMENTS, FETCH_REFERRALS, FETCH_POTENTIAL_REFERRALS, VERIFY_REFERENT_CODE, PERSON_SUBSCRIPTION,
    CREATE_SOCIALMEDIALINK_WORKFLOW, UPDATE_SOCIALMEDIALINK_WORKFLOW, REMOVE_SOCIALMEDIALINK_WORKFLOW, UPDATE_SOCIAL_MEDIA,
    FIX_SOCIAL_MEDIA, FETCH_PERSON_CREDENTIAL, VERIFY_SOCIALMEDIA_EMAIL, CREATE_SOCIAL_MEDIA, SOCIAL_MEDIA_SUBSCRIPTION_SUBSCRIBE
} from "../../actionTypes";

const endpointMapper = async (type) => {
    switch (type) {
    case VERIFY_EMAIL: return "verifyEmail";
    case VERIFY_SOCIALMEDIA_EMAIL: return "verifyEmail";
    case VALIDATE_TOKEN: return "validateToken";
    case FETCH_GENDERS: return "sex";
    case FETCH_COUNTRIES:
    case FETCH_STATES:
    case FETCH_CITIES: return "regions";
    case CREATE_PERSON: return "createPersonPrimary";
    case UPDATE_PERSON: return "updatePersonPrimary";
    case SOCIAL_MEDIA_LOGIN: return "loginSocialMedia";
    case DO_SOCIAL_MEDIA_LOGIN: return "loginSocialMedia";
    case FIX_SOCIAL_MEDIA: return "fixSocialMedia";
    case FETCH_SPONSORSHIP_CAMPAIGNS:
    case FETCH_SPOT_CAMPAIGNS:
    case FETCH_ADVERTISING_CAMPAIGNS:
    case FETCH_SPONSORSHIP_CAMPAIGNS_CATEGORIES:
    case FETCH_SPOT_CAMPAIGNS_CATEGORIES:
    case FETCH_ADVERTISING_CAMPAIGNS_CATEGORIES: return "persons";
    case CREATE_AD: return "createAdvertisement";
    case FETCH_CATEGORIES: return "categories";
    case GRANT_APPLICATION_ACCESS: return "grantAccessToApp";
    case FETCH_ADVERTISING_ADVERTISEMENTS: return "advertisements";
    case FETCH_SPONSORSHIP_ADVERTISEMENTS: return "advertisements";
    case FETCH_SPOT_ADVERTISEMENTS: return "advertisements";
    case FETCH_NON_SPONSORED_ADVERTISEMENTS: return "advertisements";
    case FETCH_REFERRALS: return "referrals";
    case FETCH_POTENTIAL_REFERRALS: return "persons";
    case VERIFY_REFERENT_CODE: return "getPersonIdByReferentCode";
    case PERSON_SUBSCRIPTION: return "person";
    case CREATE_SOCIALMEDIALINK_WORKFLOW: return "createFullStackWorkFlowState";
    case UPDATE_SOCIALMEDIALINK_WORKFLOW: return "updateFullStackWorkFlowState";
    case REMOVE_SOCIALMEDIALINK_WORKFLOW: return "removeFullStackWorkFlowState";
    case CREATE_SOCIAL_MEDIA: return "createPerson_credential";
    case UPDATE_SOCIAL_MEDIA: return "updatePerson_credential";
    case FETCH_PERSON_CREDENTIAL : return "person_credentials";
    case SOCIAL_MEDIA_SUBSCRIPTION_SUBSCRIBE : return "person_credential";
    
    default: return type.toLowerCase();
    }
};

export default {
    userIdentity,
    newUser,
    generic: async (action: {type: string, payload}) => {
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
    genericSubscriptionCommand: async (action: {type: string, model: string, payload}) => {
        const actions = await consecuentSubscriptionActionsByAction(action);
        return {
            subscriber: genericSubscriber,
            endpointName: action.model, // await endpointMapper(action.type),
            onNewData: actions.newData,
            onFailure: actions.fail,
            failureMessage: "Subscription failed!"
        };
    },
    genericUnsubscriptionCommand: async (action: {type: string, payload}) => {
        const actions = await consecuentSubscriptionActionsByAction(action);
        return {
            unsubscriber: genericUnsubscriber,
            // endpointName: await endpointMapper(action.type),
            onNewData: actions.newData,
            onFailure: actions.fail,
            failureMessage: "Unsubscription failed!"
        };
    },
    genericUnsubscriptionAllCommand: async (action: {type: string, payload}) => {
        const actions = await consecuentSubscriptionActionsByAction(action);
        return {
            unsubscriber: unsubscribeAll,
            // endpointName: await endpointMapper(action.type),
            onNewData: actions.newData,
            onFailure: actions.fail,
            failureMessage: "Unsubscription failed!"
        };
    }
};
