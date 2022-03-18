/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable one-var */
/* eslint-disable max-len */
// @flow
import * as globalModels from "influencers-models";
import {
    FETCH_SPONSORSHIP_CAMPAIGNS,
    FETCH_SPONSORSHIP_CAMPAIGNS_SUCCESS,
    FETCH_SPONSORSHIP_CAMPAIGNS_UNSUCCESS,
    FETCH_SPONSORSHIP_CAMPAIGNS_FAIL,
    FETCH_SPOT_CAMPAIGNS,
    FETCH_SPOT_CAMPAIGNS_SUCCESS,
    FETCH_SPOT_CAMPAIGNS_UNSUCCESS,
    FETCH_SPOT_CAMPAIGNS_FAIL,
    FETCH_ADVERTISING_CAMPAIGNS,
    FETCH_ADVERTISING_CAMPAIGNS_SUCCESS,
    FETCH_ADVERTISING_CAMPAIGNS_UNSUCCESS,
    FETCH_ADVERTISING_CAMPAIGNS_FAIL,
    FETCH_SPONSORSHIP_CAMPAIGNS_CATEGORIES,
    FETCH_SPONSORSHIP_CAMPAIGNS_CATEGORIES_SUCCESS,
    FETCH_SPONSORSHIP_CAMPAIGNS_CATEGORIES_UNSUCCESS,
    FETCH_SPONSORSHIP_CAMPAIGNS_CATEGORIES_FAIL,
    FETCH_SPOT_CAMPAIGNS_CATEGORIES,
    FETCH_SPOT_CAMPAIGNS_CATEGORIES_SUCCESS,
    FETCH_SPOT_CAMPAIGNS_CATEGORIES_UNSUCCESS,
    FETCH_SPOT_CAMPAIGNS_CATEGORIES_FAIL,
    FETCH_ADVERTISING_CAMPAIGNS_CATEGORIES,
    FETCH_ADVERTISING_CAMPAIGNS_CATEGORIES_SUCCESS,
    FETCH_ADVERTISING_CAMPAIGNS_CATEGORIES_UNSUCCESS,
    FETCH_ADVERTISING_CAMPAIGNS_CATEGORIES_FAIL,
    LOGOUT_SUCCESS,
} from "../actionTypes";
import { commonStatusesDescriptions, commonStatuses } from "../models/common";


const initialState = {
    companies: {
        items: [],
        pagenIndex: -1,
        status: commonStatuses.none,
        statusDescription: commonStatusesDescriptions[commonStatuses.none],
        categories: [],
        categoryStatus: commonStatuses.none,
        categoryStatusDescription: commonStatusesDescriptions[commonStatuses.none]
    },
    selectedCampaign: {
        status: commonStatuses.none,
        statusDescription: commonStatusesDescriptions[commonStatuses.none]
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT_SUCCESS: {
            return {
                ...initialState
            };
        }
        
        default:
            return state;
    }
};
