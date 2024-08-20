
import * as globalModels from "influencers-models";

const login = `
mutation login(
    $${globalModels.personFields.email}: String!
    $${globalModels.personFields.password}: String!
){
    login(
        app: ${globalModels.appTypeEnum.PublicPortal}
        email: $${globalModels.personFields.email}
        password: $${globalModels.personFields.password}
  ) {
    data,
    success,
    error {
        path
        message
      }
  }
}
`;

const signUp = `
mutation createPersonPrimary(
    $${globalModels.personFields.email}: String!
    $${globalModels.personFields.password}: String!
    
){
    createPersonPrimary(
        app: ${globalModels.appTypeEnum.PublicPortal}
        email: $${globalModels.personFields.email}
        password: $${globalModels.personFields.password}
  ) {
    data,
    success,
    error {
        path
        message
      }
  }
}
`;

const createCompany = `
mutation createCompanyByPerson(
    $${globalModels.personFields._id}: ID!
    $${globalModels.companyFields.name}: String!
    $cellPhone: String!
    $${globalModels.companyFields.logo}: String
    $thumbnail: String
    $termsAndConditions: inputTermsAndConditions!
    
){
    createCompanyByPerson(
      app: ${globalModels.appTypeEnum.PublicPortal}
      personId: $${globalModels.personFields._id}
      companyName: $${globalModels.companyFields.name}
      cellPhone: $cellPhone
      logo: $${globalModels.companyFields.logo}
      thumbnail: $thumbnail
      termsAndConditions: $termsAndConditions
  ) {
    data,
    success,
    error {
        path
        message
      }
  }
}
`;

const updateCompany = `
mutation updateCompany(
  $_id: ID!
  $logo: String
  $thumbnail: String
  $name: String
  $cellPhone: String
) {
  updateCompany(
    _id: $_id
    logo: $logo
    thumbnail: $thumbnail
    name: $name
    cellPhone: $cellPhone
  ) {
    data
    success
    error {
      path
      message
    }
  }
}
`;

const updatePersonPrimary = `
mutation updatePersonPrimary(
  $_id: ID!
  $firstName: String
  $lastName: String
) {
  updatePersonPrimary(
    _id: $_id
    firstName: $firstName
    lastName: $lastName
  ) {
    data
    success
    error {
      path
      message
    }
  }
}
`;


export default {
    login,
    signUp,
    createCompany,
    updateCompany,
    updatePersonPrimary
};