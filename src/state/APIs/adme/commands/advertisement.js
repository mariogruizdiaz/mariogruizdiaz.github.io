
import * as globalModels from "influencers-models";

const fetchAdvertisingByCampaignId = `
query fetchAdvertisingByCampaignId(
    $${globalModels.advertisementFields.campaignId}: ID!
){
  advertisements(
    ${globalModels.advertisementFields.campaignId}: $${globalModels.advertisementFields.campaignId},
      orderBy: "creationDt",
      asc: false,
  ){
    _id,
    campaignId,
    personId,
    captionIdentifier,
    campaignName,
    companyName,
    companyLogo,
    campaignType,
    companyId,
    active,
    multimediaUri,
    sponsored,
    caption,
    status,
    rejectionReason,
    platformScore,
    custumerScore,
    creationDt,
    bannerIncluded,
    taggedPeople{username},
    watermarkIncluded,
    linkIncluded,
    mentionToCompanyIncluded,
    hashtagIncluded,
    mentionToOtherIncluded,
    productUsageIncluded,
    productUsageOficialIncluded,
    engagementVelocityExpected,
    engagementVelocityReal,
    budgetFreezed,
    moneyAvailable,
    moneyEarned,
    advertisementPrice,
    resourceFramePrice,
    resourceHashtagPrice,
    resourceWebSitePrice,
    resourceTagMentionMePrice,
    resourceSealPrice,
    resourceTagMentionPeoplePrice,
    resourceProductUsagePrice,
    resourceUsageOfficialPrice,
    socialMediaTarget,
    facebookStatus,
    instagramStatus,
    twitterStatus,
    tagPrice,
    tagCount,
    likePrice,
    likeCount,
    sharedPrice,
    sharedCount,
    linkPrice,
    linkCount,
    printPrice,
    printCount,
    mentionPrice,
    mentionCount,
    hashtagPrice,
    hashtagCount,
    commentPrice,
    commentCount,
    notSponsoredTagCount,
    notSponsoredLikeCount,
    notSponsoredSharedCount,
    notSponsoredLinkCount,
    notSponsoredPrintCount,
    notSponsoredMentionCount,
    notSponsoredHashtagCount,
    notSponsoredCommentCount,
    facebookLikeCount,
    facebookLinkCount,
    facebookTagCount,
    facebookSharedCount,
    facebookMentionCount,
    facebookHashtagCount,
    facebookPrintCount,
    facebookCommentCount,
    twitterLikeCount,
    twitterLinkCount,
    twitterTagCount,
    twitterSharedCount,
    twitterMentionCount,
    twitterHashtagCount,
    twitterPrintCount,
    twitterCommentCount,
    instagramLikeCount,
    instagramLinkCount,
    instagramTagCount,
    instagramSharedCount,
    instagramMentionCount,
    instagramHashtagCount,
    instagramPrintCount,
    instagramCommentCount,
    resources{
      hashtag{
        enabled,
        value
      }
    },
    _person {
        ${globalModels.personFields.firstName},
        ${globalModels.personFields.lastName},
    },
    _person_Credentials {
        ${globalModels.person_credentialFields.firstName},
        ${globalModels.person_credentialFields.lastName},
        ${globalModels.person_credentialFields.platform},
        ${globalModels.person_credentialFields.picture},
        ${globalModels.person_credentialFields.platformObjectIdentity},
    },
    ,
    _posts {
        ${globalModels.postFields.platform},
        ${globalModels.postFields.postPlatformId},
    }
  }
}
`;

const fetchAdvertisementByIdAndCompanyId = `
query fetchAdvertisingByCampaignId(
    $${globalModels.advertisementFields._id}: ID!
    $${globalModels.advertisementFields.companyId}: ID!
){
  advertisements(
    ${globalModels.advertisementFields._id}: $${globalModels.advertisementFields._id},
    ${globalModels.advertisementFields.companyId}: $${globalModels.advertisementFields.companyId},
      limit: 1
  ){
    _id,
    campaignId,
    personId,
    campaignName,
    companyName,
    campaignType,
    companyId,
    active,
    multimediaUri,
    caption,
    status,
    rejectionReason,
    creationDt,
    budgetFreezed,
    moneyAvailable,
    moneyEarned,
    socialMediaTarget,
    resources{
      hashtag{
        enabled,
        value
      }
    },
    _person {
        ${globalModels.personFields.firstName},
        ${globalModels.personFields.lastName},
    },
    _campaign {
      ${globalModels.campaignFields._id},
      ${globalModels.campaignFields.name},
      ${globalModels.campaignFields.brief},
      ${globalModels.campaignFields.type},
      ${globalModels.campaignFields.productPaymentDescription},
      ${globalModels.campaignFields.status},
      ${globalModels.campaignFields.customProductUsagePrice},
      ${globalModels.campaignFields.customInsightMultiplier},
      ${globalModels.campaignFields.customTagMentionPeoplePrice},
      ${globalModels.campaignFields.customSealPrice},
      ${globalModels.campaignFields.customTagMentionMePrice},
      ${globalModels.campaignFields.paymentType},
      ${globalModels.campaignFields.customPricesEnabled},
      ${globalModels.campaignFields.customAdPrice},
    }
  }
}
`;

const updateAdvertisement = `
mutation updateAdvertisement(
    $${globalModels.advertisementFields._id}: ID!
    $${globalModels.advertisementFields.status}: advertisementStatus!
){
  updateAdvertisement(
    ${globalModels.advertisementFields._id}: $${globalModels.advertisementFields._id},
    ${globalModels.advertisementFields.status}: $${globalModels.advertisementFields.status},
  ){
    data,
    success,
    error {
        path
        message
      }
  }
}
`;

const fetchAdvertisementByCodeAndCompanyId = `
query fetchAdvertisingByCampaignId(
    $${globalModels.advertisementFields.captionIdentifier}: String!
    $${globalModels.advertisementFields.companyId}: ID!
){
  advertisements(
    ${globalModels.advertisementFields.captionIdentifier}: $${globalModels.advertisementFields.captionIdentifier},
    ${globalModels.advertisementFields.companyId}: $${globalModels.advertisementFields.companyId},
      limit: 1
  ){
    _id,
    campaignId,
    personId,
    campaignName,
    companyName,
    campaignType,
    companyId,
    active,
    captionIdentifier,
    multimediaUri,
    caption,
    status,
    rejectionReason,
    creationDt,
    budgetFreezed,
    moneyAvailable,
    moneyEarned,
    socialMediaTarget,
    resources{
      hashtag{
        enabled,
        value
      }
    },
    _person {
        ${globalModels.personFields.firstName},
        ${globalModels.personFields.lastName},
    },
    _campaign {
      ${globalModels.campaignFields._id},
      ${globalModels.campaignFields.name},
      ${globalModels.campaignFields.brief},
      ${globalModels.campaignFields.type},
      ${globalModels.campaignFields.productPaymentDescription},
      ${globalModels.campaignFields.status},
      ${globalModels.campaignFields.customProductUsagePrice},
      ${globalModels.campaignFields.customInsightMultiplier},
      ${globalModels.campaignFields.customTagMentionPeoplePrice},
      ${globalModels.campaignFields.customSealPrice},
      ${globalModels.campaignFields.customTagMentionMePrice},
      ${globalModels.campaignFields.paymentType},
      ${globalModels.campaignFields.customPricesEnabled},
      ${globalModels.campaignFields.customAdPrice},
    }
  }
}
`;

export default {
    fetchAdvertisingByCampaignId,
    fetchAdvertisementByIdAndCompanyId,
    updateAdvertisement,
    fetchAdvertisementByCodeAndCompanyId
};