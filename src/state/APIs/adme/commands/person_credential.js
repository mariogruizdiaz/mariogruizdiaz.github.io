
import * as globalModels from "influencers-models";

const fetchPersonCredentialByPersonId = `
query fetchPersonCredentialByPersonId(
    $${globalModels.person_credentialFields.personId}: ID!
){
  posts(
    ${globalModels.person_credentialFields.personId}: $${globalModels.person_credentialFields.personId}
  ){
    ${globalModels.person_credentialFields._id},
    ${globalModels.person_credentialFields.firstName},
    ${globalModels.person_credentialFields.lastName},
    ${globalModels.person_credentialFields.status},
    ${globalModels.person_credentialFields.picture},
    ${globalModels.person_credentialFields.platformObjectIdentity},
    ${globalModels.person_credentialFields.platform}
  }
}
`;

export default {
    fetchPersonCredentialByPersonId
};