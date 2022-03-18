// Mutations

const loginSocialMedia = `
mutation loginSocialMedia(
    $user: String!
    $password: String!
    $personUserName: String!  
    $platform: PlatformTypes!
    $workFlowId: String!
    $personId: ID!
){
  loginSocialMedia(
    user: $user
    password: $password
    personUserName: $personUserName
    platform: $platform
    workFlowId: $workFlowId
    personId: $personId
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

const createFullStackWorkFlowState = `
mutation createFullStackWorkFlowState(
    $personUserName: String!
    $key: String!
    $state: String!
    $payload: String
){
    createFullStackWorkFlowState(
    personUserName: $personUserName
    key: $key 
    state: $state
    payload: $payload
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

const updateFullStackWorkFlowState = `
mutation updateFullStackWorkFlowState(
    $_id: ID!
    $state: String!
    $payload: String!
    
){
    updateFullStackWorkFlowState(
    _id: $_id
    state: $state
    payload: $payload
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

const removeFullStackWorkFlowState = `
mutation removeFullStackWorkFlowState(
    $_id: ID!    
){
  removeFullStackWorkFlowState(
    _id: $_id
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

const createPerson_credential = `
mutation createPerson_credential(
    $personId: ID!
    $platform: PlatformTypes!
    $platformObjectIdentity: String
    $status: PersonCredentialStatusEnum!
    $access_token: String
    $expires: Int
    $userName: String!
    $password: String!
    $picture: String
    $displayName: String
    $birthday: String
    $firstName: String
    $lastName: String
    $verTermsAndConditions: String
    $email: String
){
    createPerson_credential(
        personId: $personId
        platform: $platform
        platformObjectIdentity: $platformObjectIdentity
        status: $status
        access_token: $access_token
        expires: $expires
        userName: $userName
        password: $password
        picture: $picture
        displayName: $displayName
        birthday: $birthday
        firstName: $firstName
        lastName: $lastName
        verTermsAndConditions: $verTermsAndConditions
        email: $email
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

const updatePerson_credential = `
mutation updatePerson_credential(
    $_id: ID!
    $personId: ID!
    $platformObjectIdentity: String
    $status: PersonCredentialStatusEnum!
    $access_token: String
    $expires: Int
    $userName: String!
    $password: String!
    $picture: String
    $displayName: String
    $birthday: String
    $firstName: String
    $lastName: String
    $verTermsAndConditions: String
    $email: String
){
  updatePerson_credential(
        _id: $_id
        personId: $personId
        platformObjectIdentity: $platformObjectIdentity
        status: $status
        access_token: $access_token
        expires: $expires
        userName: $userName
        password: $password
        picture: $picture
        displayName: $displayName
        birthday: $birthday
        firstName: $firstName
        lastName: $lastName
        verTermsAndConditions: $verTermsAndConditions
        email: $email
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

const fixSocialMedia = `
mutation fixSocialMedia(
    $user: String!
    $password: String!
    $personUserName: String!  
    $platform: PlatformTypes!
    $workFlowId: String!
    $personId: ID!
){
  fixSocialMedia(
    user: $user
    password: $password
    personUserName: $personUserName
    platform: $platform
    workFlowId: $workFlowId
    personId: $personId
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

// Subscriptions

const subscribeToFullStackWorkFlowState = `
subscription fullStackWorkFlowState(
  $_id: ID!
  $observedFields: [fullStackWorkFlowStateObservableFields]!
)
{fullStackWorkFlowState (
  _id:$_id, 
  observedFields: $observedFields
){ 
  success,
  data
  }
}`;

const fetchPerson_Credential = `
query person_credentials(
    $limit: Float
    $page: Float
    $orderBy: String
    $asc: Boolean
    $_id: ID
    $personId: ID
    $platform: PlatformTypes
    $platformObjectIdentity: String
    $status: PersonCredentialStatusEnum
    $access_token: String
    $expires: Int
    $userName: String,
    $picture: String
    $displayName: String
    $birthday: String
    $firstName: String
    $lastName: String
    $email: String
    $verTermsAndConditions: String
    $enabled: Boolean
){
  person_credentials(
    limit: $limit
    page: $page
    orderBy: $orderBy
    asc: $asc
    _id: $_id
    personId: $personId
    platform: $platform
    platformObjectIdentity: $platformObjectIdentity
    status: $status
    access_token: $access_token
    expires: $expires
    userName: $userName
    picture: $picture
    displayName: $displayName
    birthday: $birthday
    firstName: $firstName
    lastName: $lastName
    email: $email
    verTermsAndConditions: $verTermsAndConditions
    enabled: $enabled
  ){
    personId
  }
}
`;

// Subscriptions

const subscribeToPersonCredential = `
subscription person_credential(
  $_id: ID!
  $observedFields: [person_credentialObservableFields]!
) 
{ person_credential (
  _id:$_id, 
  observedFields: $observedFields
){
  success,
  data
}
}`;

export default {
  loginSocialMedia,
  createFullStackWorkFlowState,
  updateFullStackWorkFlowState,
  removeFullStackWorkFlowState,
  subscribeToFullStackWorkFlowState,
  createPerson_credential,
  updatePerson_credential,
  fetchPerson_Credential,
  fixSocialMedia,
  subscribeToPersonCredential
 };