// @flow
const fetchSponsorshipCampaigns = `
query fetchCampaigns(
    $_id: ID!
    $page: Int!
    $limit: Int!
    $orderBy: String
    $asc: Boolean
){
  persons(_id: $_id){
    _id,
    firstName,
    sponsorshipCampaigns(limit: $limit, page: $page, orderBy: $orderBy, asc: $asc){
      _id,
      companyId,
      companyName,
      companyLogo,
      companyPlatformStars,
      companyCustomerStars,
      name,
      type,
      slogan,
      brief,
      creationDt,
      startDt,
      endDt,
      resources{
        frame{ enabled, mandatory },
        hashtag{ enabled, value, mandatory },
        webSite{ enabled, mandatory },
        tagMentionMe {enabled, mandatory, facebook{enabled, value}, instagram{enabled, value}, twitter{enabled, value}},
        seal{enabled, value, mandatory},
        tagMentionPeople{enabled, mandatory},
        productUsage{enabled, mandatory},
        productUsageOficial{enabled, value, mandatory},
        spot{imageEnabled, image, description, videoEnabled, video}
      },
      paymentType,
      specificTarget
    }
  }
}
`;

const fetchSpotCampaigns = `
query fetchCampaigns(
    $_id: ID!
    $page: Int!
    $limit: Int!
    $orderBy: String
    $asc: Boolean
){
  persons(_id: $_id){
    _id,
    firstName,
    spotCampaigns(limit: $limit, page: $page, orderBy: $orderBy, asc: $asc){
      _id,
      companyId,
      companyName,
      companyLogo,
      companyPlatformStars,
      companyCustomerStars,
      name,
      type,
      slogan,
      brief,
      creationDt,
      startDt,
      endDt,
      resources{
        frame{ enabled, mandatory },
        hashtag{ enabled, value, mandatory },
        webSite{ enabled, mandatory },
        tagMentionMe {enabled, mandatory, facebook{enabled, value}, instagram{enabled, value}, twitter{enabled, value}},
        seal{enabled, value, mandatory},
        tagMentionPeople{enabled, mandatory},
        productUsage{enabled, mandatory},
        productUsageOficial{enabled, value, mandatory},
        spot{imageEnabled, image, description, videoEnabled, video}
      },
      paymentType,
      specificTarget
    }
  }
}
`;
const fetchAdvertisingCampaigns = `
query fetchCampaigns(
    $_id: ID!
    $page: Int!
    $limit: Int!
    $orderBy: String
    $asc: Boolean
){
  persons(_id: $_id){
    _id,
    firstName,
    advertisingCampaigns(limit: $limit, page: $page, orderBy: $orderBy, asc: $asc){
      _id,
      companyId,
      companyName,
      companyLogo,
      companyPlatformStars,
      companyCustomerStars,
      name,
      type,
      slogan,
      brief,
      creationDt,
      startDt,
      endDt,
      resources{
        frame{ enabled, mandatory },
        hashtag{ enabled, value, mandatory },
        webSite{ enabled, mandatory },
        tagMentionMe {enabled, mandatory, facebook{enabled, value}, instagram{enabled, value}, twitter{enabled, value}},
        seal{enabled, value, mandatory},
        tagMentionPeople{enabled, mandatory},
        productUsage{enabled, mandatory},
        productUsageOficial{enabled, value, mandatory},
        spot{imageEnabled, image, description, videoEnabled, video}
      },
      paymentType,
      specificTarget
    }
  }
}
`;
const fetchSponsorshipCampaignsCategories = `
query fetchCampaigns(
    $_id: ID!
){
  persons(_id: $_id){
    _id,
    sponsorshipCampaignCategories{
      _id,
      name
    }
  }
}
`;
const fetchSpotCampaignsCategories = `
query fetchCampaigns(
    $_id: ID!
){
  persons(_id: $_id){
    _id,
    spotCampaignCategories{
      _id,
      name
    }
  }
}
`;
const fetchAdvertisingCampaignsCategories = `
query fetchCampaigns(
    $_id: ID!
){
  persons(_id: $_id){
    _id,
    advertisingCampaignCategories{
      _id,
      name
    }
  }
}
`;

export default {
    fetchSponsorshipCampaigns,
    fetchSpotCampaigns,
    fetchAdvertisingCampaigns,
    fetchSponsorshipCampaignsCategories,
    fetchSpotCampaignsCategories,
    fetchAdvertisingCampaignsCategories
};
