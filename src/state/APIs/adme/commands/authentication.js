// @flow

const login = `
mutation login(
    $email: String!
    $password: String!
){
    login(
        app: Mobile
        email: $email
        password: $password
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

const validateToken = `
mutation validateToken(
    $token: String!
){
    validateToken(
        app: Mobile
        token: $token
        
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


const verifyEmail = `
mutation verifyEmail(
    $email: String!
){
    verifyEmail(
        email: $email
        
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

const createPersonPrimary = `
mutation createPersonPrimary(
    $password: String!
    $email: String!
    $referentPersonId: ID!
){
  createPersonPrimary(
    app: Mobile,
    password: $password
    email: $email
    referentPersonId: $referentPersonId
  ){
    success,
    data,
    error{
      path,
      message
    }
  }
}
`;

const updatePersonPrimary = `
mutation updatePersonPrimary(
    $_id: ID!
    $username: String
    $firstName: String
    $lastName: String
    $genderId: ID
    $birthDateYear: Int
    $birthDateMonth: Int
    $birthDateDay: Int
    $email: String!
    $address_regionId: ID
    $stateId: ID
    $countryId: ID
    $thumbnail: String
    $categories: [ID]
    $address_geoPoint: geoJsonParameter
){
  updatePersonPrimary(
    _id: $_id
    username: $username
    firstName: $firstName
    lastName: $lastName
    genderId: $genderId
    birthDateYear: $birthDateYear
    birthDateMonth: $birthDateMonth
    birthDateDay: $birthDateDay
    thumbnail: $thumbnail
    email: $email
    address_regionId: $address_regionId
    stateId: $stateId
    countryId: $countryId
    categories: $categories
    address_geoPoint: $address_geoPoint
  ){
    success,
    data,
    error{
      path,
      message
    }
  }
}
`;

const grantAccess = `
mutation grantAccess(
    $_id: ID!
){
  grantAccessToApp(
    app: Mobile
    personId: $_id
  ){
    success,
    data,
    error{
      path,
      message
    }
  }
}
`;

const getPersonIdByReferentCode = `
mutation getPersonIdByReferentCode(
    $referentCode: String!
){
    getPersonIdByReferentCode(
    referentCode: $referentCode
  ) {
    success,
    data,
    error{
      path
      message
    }
  }
}
`;

// Subscriptions

const subscribeToPerson = `
subscription person(
  $_id: ID!
  $observedFields: [personObservableFields]!
) 
{ person (
  _id:$_id, 
  observedFields: $observedFields
){
  success,
  data
}
}`;

const subscribeToAdvertisement = `
subscription advertisement(
  $_id: ID!
  $observedFields: [AdvertisementObservablefields]!
) 
{ advertisement (
  _id:$_id, 
  observedFields: $observedFields
){
  success,
  data
}
}`;

export default {
    login,
    validateToken,
    verifyEmail,
    createPersonPrimary,
    updatePersonPrimary,
    grantAccess,
    getPersonIdByReferentCode,
    subscribeToPerson,
    subscribeToAdvertisement
};
