import React, { Component } from "react";
import { connect } from "react-redux";
import { genericAction } from "../../state/actions";
import { bindActionCreators } from "redux";
import * as globalModels from "influencers-models";
import { Button, CardActions } from "@mui/material";
import moment from 'moment';
import 'moment/locale/es';

const statusBackground = {
    'RejectedByCustomer': 'danger',
    'RejectedByPlatform': 'danger',
    'Approved': 'success'
  };

class AdvertisementDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
          viewFirstStep: true
        };
        
    }

     changeView = async () => {
      await this.setState({viewFirstStep: !this.state.viewFirstStep});
    }

    statusDescription = {
      'WaitingForPlatformAudit': this.props.dictionary.results.campaign.posts.post.pending,
      'WaitingForCustomerAudit': this.props.dictionary.results.campaign.posts.post.pending,
      'RejectedByCustomer': this.props.dictionary.results.campaign.posts.post.rejectedAd,
      'RejectedByPlatform': this.props.dictionary.results.campaign.posts.post.rejectedAd,
      'Approved': this.props.dictionary.results.campaign.posts.post.approvedAd
    };

    
    render() {
        const facebookPost = this.props.ad._posts.length > 0 ? this.props.ad._posts.find((post) => post[globalModels.postFields.platform] === globalModels.platformEnum.Facebook) : null;
        const instagramPost = this.props.ad._posts.length > 0 ? this.props.ad._posts.find((post) => post[globalModels.postFields.platform] === globalModels.platformEnum.Instagram) : null;
        moment.locale(this.props.language);

        return (
          <React.Fragment>
                        {/* <div className="feature-contents">
                            <div className="row align-items-center justify-content-between justify-content-sm-center justify-content-md-center">
                                <div className="col-4 col-lg-3">
                                    <div className="count-data text-center">
                                        <h5 className="count-number text-left mb-0 color-primary font-weight-bold">{this.props.ad.likeCount}</h5>
                                        <span className="text-left" >{this.props.dictionary.results.campaign.posts.post.likesLabel}</span>
                                    </div>
                                </div>
                                <div className="col-4 col-lg-3">
                                    <div className="count-data text-center">
                                        <h5 className="count-number text-left mb-0 color-primary font-weight-bold">{this.props.ad.commentCount}</h5>
                                        <span>{this.props.dictionary.results.campaign.posts.post.commentsLabel}</span>
                                    </div>
                                </div>
                                <div className="col-4 col-lg-3">
                                    <div className="count-data text-center">
                                        <h5 className="count-number text-left mb-0 color-primary font-weight-bold">{this.props.ad.sharedCount}</h5>
                                        <span>{this.props.dictionary.results.campaign.posts.post.shareLabel}</span>
                                    </div>
                                </div>
                            </div>
                        </div> */}
            <div className="pricing-content">
                <ul className="list-unstyled pricing-feature-list">
                  <li><span>{this.props.dictionary.results.campaign.posts.post.likesLabel}</span> {this.props.ad.likeCount + this.props.ad.notSponsoredLikeCount}</li>
                    <li><span>{this.props.dictionary.results.campaign.posts.post.commentsLabel}</span> {this.props.ad.commentCount + this.props.ad.notSponsoredCommentCount}</li>
                    {/* <li><span>{this.props.dictionary.results.campaign.posts.post.shareLabel}</span> {this.props.ad.sharedCount + this.props.ad.notSponsoredSharedCount}</li> */}
                    <li><span>{this.props.dictionary.audtiAdvertisemnt.creation} </span>{moment(this.props.ad.creationDt).fromNow()}</li>
                    <li><span>{this.props.dictionary.audtiAdvertisemnt.creatorUser}</span> {`${this.props.ad._person.firstName} ${this.props.ad._person.lastName ? this.props.ad._person.lastName : ''}`}</li>
                    <li><span>{this.props.dictionary.results.campaign.posts.post.adCode}</span><span className="h4 adCode"> {` ${this.props.ad.captionIdentifier}`}</span> </li>
                    { ["WaitingForPlatformAudit", "WaitingForCustomerAudit"].includes(this.props.ad.status) ?
                      this.props.selectedCampaign.paymentType === globalModels.campaignPaymentTypeEnum.Money ?
                      <li><span className={`h4 code alert-${statusBackground[this.props.ad.status]}`}>{`${this.props.dictionary.results.campaign.posts.post.adStatusPart1}${this.statusDescription[this.props.ad.status]}${this.props.dictionary.results.campaign.posts.post.adStatusPart2}`} </span></li>
                      :
                      <a href={`/#/audit/${this.props.ad._id}`} target="_blank" without rel="noopener noreferrer">
                        <CardActions>
                          <Button variant="contained" color="secondary" fullWidth>
                            {this.props.dictionary.results.campaign.posts.post.auditAd}
                        </Button>
                        </CardActions>
                      </a>
                    :
                      <li><span className={`h4 code alert-${statusBackground[this.props.ad.status]}`}>{`${this.props.dictionary.results.campaign.posts.post.adStatusPart1} ${ this.statusDescription[this.props.ad.status]}`} </span></li>
                    }
                    <li className="list-inline-item">
                        {
                            instagramPost
                            && <a className="instagram" href={instagramPost[globalModels.postFields.postPlatformId]} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        }
                        {
                            facebookPost
                            && <a className="instagram" href={facebookPost[globalModels.postFields.postPlatformId]} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        }
                    </li>
                </ul>
            </div>
          </React.Fragment>
            
        );
    }
}

function mapStateToProps(state) {
    return {
        dictionary: state.i18n.dictionary,
        selectedCampaign: state.companies.selectedCampaign,
        postsByAdvertisementIds: state.companies.selectedCampaign.postsByAdvertisementIds,
        language: state.i18n.language,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        genericAction: bindActionCreators(genericAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvertisementDetails);
