import company from "./company";
import campaigns from "./campaigns";
import advertisement from "./advertisement";
import post from "./post";
import person_credential from "./person_credential";
import security from "./security";
import termsAndConditionsHistoric from "./termsAndConditionsHistoric";
import { actionTypes } from "../../../actionTypes";



const commandCollection = {
    [actionTypes.FETCH_COMPANIES]: company.fetchCompanies,
    [actionTypes.FETCH_COMPANY]: company.fetchCompanyById,
    [actionTypes.FETCH_CAMPAIGNS]: campaigns.fetchCampaignsByCompanyId,
    [actionTypes.FETCH_ADVERTISEMENTS]: advertisement.fetchAdvertisingByCampaignId,
    [actionTypes.FETCH_POSTS]: post.fetchPostsByAdvertisementId,
    [actionTypes.FETCH_PERSON_CREDENTIALS]: person_credential.fetchPersonCredentialByPersonId,
    [actionTypes.LOGIN]: security.login,
    [actionTypes.VALIDATE_TOKEN]: security.validateToken,
    [actionTypes.FETCH_TERMS_AND_CONDITIONS]: termsAndConditionsHistoric.fetchTermsAndConditionsHistoric,
    [actionTypes.SIGNUP]: security.signUp,
    [actionTypes.CREATE_COMPANY]: security.createCompany,
    [actionTypes.UPDATE_COMPANY]: security.updateCompany,
    [actionTypes.UPDATE_USER]: security.updatePersonPrimary,
    [actionTypes.FETCH_ADVERTISEMENT]: advertisement.fetchAdvertisementByIdAndCompanyId,
    [actionTypes.UPDATE_ADVERTISEMENT]: advertisement.updateAdvertisement,
};

export {
    commandCollection
};
