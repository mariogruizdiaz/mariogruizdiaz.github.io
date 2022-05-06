
import * as globalModels from "adme-models";

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


export default {
    login
};