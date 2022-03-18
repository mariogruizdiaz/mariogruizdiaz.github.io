/* eslint-disable max-len */
// @flow
// import { authentication, referenceCollections } from "../commands";
import authentication from "./authentication";
import socialMediaLink from "./socialMediaLink";
import referenceCollections from "./referenceCollections";
import campaigns from "./campaigns";
import advertisement from "./advertisement";
import relationships from "./relationships";
import generics from "./generics";
import * as actionTypes from "../../../actionTypes";

const commandCollection = {
    [actionTypes.LOGIN]: authentication.login,
    [actionTypes.VERIFY_EMAIL]: authentication.verifyEmail,
    [actionTypes.VERIFY_SOCIALMEDIA_EMAIL]: authentication.verifyEmail,
    [actionTypes.VALIDATE_TOKEN]: authentication.validateToken,
    [actionTypes.FETCH_GENDERS]: referenceCollections.fetchGender,
    [actionTypes.FETCH_CATEGORIES]: referenceCollections.fetchCategories,
    [actionTypes.FETCH_COUNTRIES]: referenceCollections.fetchRegions,
    [actionTypes.FETCH_STATES]: referenceCollections.fetchRegions,
    [actionTypes.FETCH_CITIES]: referenceCollections.fetchRegions,
    [actionTypes.UPDATE_PERSON]: authentication.updatePersonPrimary,
    [actionTypes.CREATE_PERSON]: authentication.createPersonPrimary,
    [actionTypes.GRANT_APPLICATION_ACCESS]: authentication.grantAccess,
    [actionTypes.FETCH_SPONSORSHIP_CAMPAIGNS]: campaigns.fetchSponsorshipCampaigns,
    [actionTypes.FETCH_SPOT_CAMPAIGNS]: campaigns.fetchSpotCampaigns,
    [actionTypes.FETCH_ADVERTISING_CAMPAIGNS]: campaigns.fetchAdvertisingCampaigns,
    [actionTypes.FETCH_SPONSORSHIP_CAMPAIGNS_CATEGORIES]: campaigns.fetchSponsorshipCampaignsCategories,
    [actionTypes.FETCH_SPOT_CAMPAIGNS_CATEGORIES]: campaigns.fetchSpotCampaignsCategories,
    [actionTypes.FETCH_ADVERTISING_CAMPAIGNS_CATEGORIES]: campaigns.fetchAdvertisingCampaignsCategories,
    [actionTypes.CREATE_AD]: advertisement.createAdvertisement,
    [actionTypes.FETCH_ADVERTISING_ADVERTISEMENTS]: advertisement.fetchAdvertisingAdvertisements,
    [actionTypes.FETCH_SPONSORSHIP_ADVERTISEMENTS]: advertisement.fetchSponsorshipAdvertisements,
    [actionTypes.FETCH_SPOT_ADVERTISEMENTS]: advertisement.fetchSpotAdvertisements,
    [actionTypes.FETCH_NON_SPONSORED_ADVERTISEMENTS]: advertisement.fetchNonSponsoredAdvertisements,
    [actionTypes.FETCH_REFERRALS]: relationships.fetchReferrals,
    [actionTypes.FETCH_POTENTIAL_REFERRALS]: relationships.fetchPotentialReferrals,
    [actionTypes.VERIFY_REFERENT_CODE]: authentication.getPersonIdByReferentCode,
    [actionTypes.PERSON_SUBSCRIPTION]: authentication.subscribeToPerson,
    [actionTypes.ADVERTISING_SUBSCRIPTION]: authentication.subscribeToAdvertisement,
    //SOCIAL MEDIAS
    [actionTypes.SOCIAL_MEDIA_LOGIN]: socialMediaLink.loginSocialMedia,
    [actionTypes.DO_SOCIAL_MEDIA_LOGIN]: socialMediaLink.loginSocialMedia,
    [actionTypes.FIX_SOCIAL_MEDIA]: socialMediaLink.fixSocialMedia,
    [actionTypes.CREATE_SOCIALMEDIALINK_WORKFLOW]: socialMediaLink.createFullStackWorkFlowState,
    [actionTypes.UPDATE_SOCIALMEDIALINK_WORKFLOW]: socialMediaLink.updateFullStackWorkFlowState,
    [actionTypes.REMOVE_SOCIALMEDIALINK_WORKFLOW]: socialMediaLink.removeFullStackWorkFlowState,
    [actionTypes.CREATE_SOCIAL_MEDIA]: socialMediaLink.createPerson_credential,
    [actionTypes.UPDATE_SOCIAL_MEDIA]: socialMediaLink.updatePerson_credential,
    [actionTypes.FETCH_PERSON_CREDENTIAL]: socialMediaLink.fetchPerson_Credential,
    [actionTypes.SOCIAL_MEDIA_SUBSCRIPTION_SUBSCRIBE]: socialMediaLink.subscribeToPersonCredential,
};

export {
    commandCollection
};
