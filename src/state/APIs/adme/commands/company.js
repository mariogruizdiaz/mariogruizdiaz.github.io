
import * as globalModels from "adme-models";

const fetchCompanyById = `
query fetchCompanyById(
    $${globalModels.companyFields._id}: ID!
){
    companies(
    ${globalModels.companyFields._id}: $${globalModels.companyFields._id}
  ){
    _id,
    name,
    logo,
    campaignsOnGoingCount,
    campaignsStoppedCount,
    campaignsFinishedCount,
    campaignsWaitingForPaymentCount,
    campaignsWaitingForApprovalCount,
    campaignsDraftCount,
    investment,
    budgetSpent,
    budgetFreezed,
    budgetAvailable,
  }
}
`;

const fetchCompanies = `
query fetchCompanies{
  companies (
    ${globalModels.companyFields.active}: true
  ) {
    _id,
    name,
    logo,
    campaignsOnGoingCount,
    campaignsStoppedCount,
    campaignsFinishedCount,
    campaignsWaitingForPaymentCount,
    campaignsWaitingForApprovalCount,
    campaignsDraftCount,
    investment,
    budgetSpent,
    budgetFreezed,
    budgetAvailable,
  }
}
`;

export default {
    fetchCompanyById,
    fetchCompanies
};
