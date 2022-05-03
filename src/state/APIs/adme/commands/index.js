import company from "./company";
import campaigns from "./campaigns";
import advertisement from "./advertisement";
import post from "./post";
import person_credential from "./person_credential";
import { actionTypes } from "../../../actionTypes";


const commandCollection = {
    [actionTypes.FETCH_COMPANIES]: company.fetchCompanies,
    [actionTypes.FETCH_COMPANY]: company.fetchCompanyById,
    [actionTypes.FETCH_CAMPAIGNS]: campaigns.fetchCampaignsByCompanyId,
    [actionTypes.FETCH_ADVERTISEMENTS]: advertisement.fetchAdvertisingByCampaignId,
    [actionTypes.FETCH_POSTS]: post.fetchPostsByAdvertisementId,
    [actionTypes.FETCH_PERSON_CREDENTIALS]: person_credential.fetchPersonCredentialByPersonId
};

export {
    commandCollection
};
