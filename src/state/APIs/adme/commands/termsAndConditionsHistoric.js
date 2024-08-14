import * as globalModels from "influencers-models";

const fetchTermsAndConditionsHistoric = `
query fetchTermsAndConditionsHistoric(
  $language: LanguagesEnum
) {
  termsAndConditionsHistoric(
    language: $language
    appTypes: PublicPortal,
    limit: 1, 
    orderBy: "creationDt", 
    asc: false
  ){
    _id,
    url,
    appTypes,
    version,
    language
  }
}`;

export default {
    fetchTermsAndConditionsHistoric
};
