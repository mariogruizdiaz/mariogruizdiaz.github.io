// @flow
const fetchReferrals = `
query fetchReferrals(
    $_id: ID!
    $page: Int
    $limit: Int
){
  referrals(
    referentPersonId: $_id
    page: $limit
    limit: $page
  ) {
    titheTotal
    referralFirstName
    referralLastName
    referralThumbnail
    referralCustomerStars
    referralPlatformStars
    referralReferralsCount
    referralReferralClanCount
    referralInfluencerCategory
    referralNonSponsoredAdsCount
    referralSponsorshipAdsCount
    referralAdvertisingAdsCount
    referralSpotAdsCount
    creationDt
  }
}
`;

const fetchPotentialReferrals = `
query fetchPotentialReferrals(
    $_id: ID!
    $page: Int
    $limit: Int
){
  persons(
    _id: $_id
  ) {
    _id
    firstName
    potentialReferrals(
      limit: $limit
      page: $page
    ){
      status
      potentialReferral{
        _id
        personId
        platform
        platformObjectIdentity
        status
        userName
        picture
        firstName
        lastName
      }
    }
  }
}
`;

export default {
    fetchReferrals,
    fetchPotentialReferrals
};
