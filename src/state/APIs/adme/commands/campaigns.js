import * as globalModels from "adme-models";

const fetchCampaignsByCompanyId = `
query fetchAdvertisingByCampaignId(
    $${globalModels.campaignFields.companyId}: ID!
){
  campaigns(
    ${globalModels.campaignFields.companyId}: $${globalModels.campaignFields.companyId},
    active: true
  ){
    _id,
    name,
    brief,
    creationDt,
    startDt,
    endDt,
    active,
    status,
    investment,
    budgetAvailable,
    budgetFreezed,
    budgetSpent,
    moneyPerEngagementExpected,
    moneyPerEngagementReal,
    engagementReal,
    engagementExpected,
    influencersExpected,
    influencersTotal,
    engagementVelocityReal,
    engagementVelocityExpected,
    forecastDays,
    tagCount,
    likeCount,
    sharedCount,
    linkCount,
    printCount,
    mentionCount,
    hashtagCount,
    commentCount,
    engagementNotSponsored,
    engagementMaleInfluencer,
    engagementFemaleInfluencer,
    engagementMaleInfluenced,
    engagementFemaleInfluenced,
    engagementAnonymousInfluenced,
    facebookAnonymousInfluencedCount,
    twitterAnonymousInfluencedCount,
    instagramAnonymousInfluencedCount,
    influencersScope,
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
    facebookMaleInfluencerCount,
    facebookFemaleInfluencerCount,
    facebookMaleInfluencedCount,
    facebookFemaleInfluencedCount,
    twitterMaleInfluencerCount,
    twitterFemaleInfluencerCount,
    twitterMaleInfluencedCount,
    twitterFemaleInfluencedCount,
    instagramMaleInfluencerCount,
    instagramFemaleInfluencerCount,
    instagramMaleInfluencedCount,
    instagramFemaleInfluencedCount
  }
}`;

export default {
    fetchCampaignsByCompanyId
};
