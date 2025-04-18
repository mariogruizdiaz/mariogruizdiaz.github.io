
const trackEvent = `
  mutation trackEvent(
    $event: String!
    $source: String!
    $userAgent: String
    $language: String
    $ip: String
    $geoCountry: String
    $geoCity: String
    $companyId: ID
    $companyCode: String
    $campaignId: ID
    $personId: ID
    $store: storeType
    $subsection: String
  ) {
    trackEvent(
      event: $event
      source: $source
      userAgent: $userAgent
      language: $language
      ip: $ip
      geoCountry: $geoCountry
      geoCity: $geoCity
      companyId: $companyId
      companyCode: $companyCode
      campaignId: $campaignId
      personId: $personId
      store: $store
      subsection: $subsection
    ) {
      success
      data
      error {
        message
      }
    }
  }
`;

export default {
    trackEvent
};

