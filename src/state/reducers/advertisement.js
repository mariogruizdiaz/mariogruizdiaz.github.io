import * as globalModels from "influencers-models";
import { actionTypes } from "../actionTypes";
import { commonStatusesDescriptions, commonStatuses } from "../models/common";

const initialState = {
    advertisement: {
      _id: null,
      fetchStatus: commonStatuses.none,
      fetchStatusDescription: commonStatusesDescriptions[commonStatuses.none],
      campaignName: null,
      companyName: null,
      companyLogo: null,
      campaignType: null,
      active: null,
      multimediaUri: null,
      caption: null,
      status: null,
      rejectionReason: null,
      creationDt: null,
      advertisementPrice: null,
      _person: {
        firstName: null,
        lastName: null,
      },
      _campaign: {
        _id: null,
        name: null,
        brief: null,
        type: null,
        productPaymentDescription: null,
        status:null,
        customProductUsagePrice: null,
        customInsightMultiplier: null,
        customTagMentionPeoplePrice: null,
        customSealPrice: null,
        customTagMentionMePrice: null,
        paymentType: null
      }
    }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ADVERTISEMENT: {
      return {
        ...state,
        fetchStatus: commonStatuses.loading,
        fetchStatusDescription: commonStatusesDescriptions[commonStatuses.loading],
      };
    }
    case actionTypes.FETCH_ADVERTISEMENT_SUCCESS: {
      return {
        _id: action.payload.data[0]._id,
        fetchStatus: commonStatuses.loaded,
        fetchStatusDescription: commonStatusesDescriptions[commonStatuses.loaded],
        campaignName: action.payload.data[0].campaignName,
        companyName: action.payload.data[0].companyName,
        campaignType: action.payload.data[0].campaignType,
        active: action.payload.data[0].active,
        multimediaUri: action.payload.data[0].multimediaUri,
        caption: action.payload.data[0].caption,
        status: action.payload.data[0].status,
        rejectionReason: action.payload.data[0].rejectionReason,
        creationDt: action.payload.data[0].creationDt,
        advertisementPrice: action.payload.data[0].advertisementPrice,
        _person: {
          firstName: action.payload.data[0]._person.firstName,
          lastName: action.payload.data[0]._person.lastName
        },
        _campaign: {
          _id: action.payload.data[0]._campaign._id,
          name: action.payload.data[0]._campaign.name,
          brief: action.payload.data[0]._campaign.brief,
          type: action.payload.data[0]._campaign.type,
          productPaymentDescription: action.payload.data[0]._campaign.productPaymentDescription,
          status:action.payload.data[0]._campaign.status,
          customProductUsagePrice: action.payload.data[0]._campaign.customProductUsagePrice,
          customInsightMultiplier: action.payload.data[0]._campaign.customInsightMultiplier,
          customTagMentionPeoplePrice: action.payload.data[0]._campaign.customTagMentionPeoplePrice,
          customSealPrice: action.payload.data[0]._campaign.customSealPrice,
          customTagMentionMePrice: action.payload.data[0]._campaign.customTagMentionMePrice,
          paymentType: action.payload.data[0]._campaign.paymentType
        }
      };
    }
    case actionTypes.FETCH_ADVERTISEMENT_UNSUCCESS:
    case actionTypes.FETCH_ADVERTISEMENT_FAIL: {
      return {
        ...initialState.advertisement,
        fetchStatus: commonStatuses.notAvailable,
        fetchStatusDescription: null,
      };
    }
    case actionTypes.UPDATE_ADVERTISEMENT: {
      return {
        ...state,
        fetchStatus: commonStatuses.saving,
        fetchStatusDescription: commonStatusesDescriptions[commonStatuses.loading],
      };
    }
    case actionTypes.UPDATE_ADVERTISEMENT_SUCCESS: {
      return {
        ...state,
        fetchStatus: commonStatuses.saved,
        fetchStatusDescription: commonStatusesDescriptions[commonStatuses.saved],
        status: JSON.parse(action.payload.data["data"])["status"],
      };
    }
        case actionTypes.UPDATE_ADVERTISEMENT_FAIL: {
      return {
        ...state,
        fetchStatus: commonStatuses.notAvailable,
        fetchStatusDescription: null,
      };
    }
    default:
      return state;
  }
}