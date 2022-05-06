
import * as globalModels from "adme-models";

const fetchPostsByAdvertisementId = `
query fetchPostsByAdvertisementId(
    $${globalModels.postFields.advertisementId}: ID!
){
  posts(
    ${globalModels.postFields.advertisementId}: $${globalModels.postFields.advertisementId}
  ){
    _id,
    advertisementId,
    campaignId,
    companyId,
    platform,
    postPlatformId,
    creationDt,
    feedDt,
    feedStatus,
    status,
    engagementVelocity,
    tagCount,
    likeCount,
    sharedCount,
    linkCount,
    printCount,
    mentionCount,
    hashtagCount,
    commentCount,
    notSponsoredTagCount,
    notSponsoredLikeCount,
    notSponsoredLinkCount,
    notSponsoredPrintCount,
    notSponsoredSharedCount,
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
    instagramCommentCount
  }
}
`;

export default {
    fetchPostsByAdvertisementId
};