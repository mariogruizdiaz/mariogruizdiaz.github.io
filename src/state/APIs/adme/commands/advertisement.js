
import * as globalModels from "adme-models";

const fetchAdvertisingByCampaignId = `
query fetchAdvertisingByCampaignId(
    $${globalModels.advertisementFields.campaignId}: ID!
){
  advertisements(
    ${globalModels.advertisementFields.campaignId}: $${globalModels.advertisementFields.campaignId}
  ){
    _id,
    campaignId,
    personId,
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

export default {
    fetchAdvertisingByCampaignId
};
