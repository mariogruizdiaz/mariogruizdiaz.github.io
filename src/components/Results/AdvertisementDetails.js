import React, { Component } from "react";
import { connect } from "react-redux";
import { genericAction } from "../../state/actions";
import { bindActionCreators } from "redux";
import * as globalModels from "influencers-models";
import { commonStatuses } from "../../state/models/common";

class AdvertisementDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            fetchStatus: commonStatuses.loading
        };
        
        let searchText = window.location.href.split('?');

        if ( searchText.length > 0 && searchText[1] !== 'reloaded' ) {  
            window.location.replace(`${window.location.toString()}?reloaded` );
            window.location.reload();
        }
    }

    componentDidMount() {
        // Lazy loading posts and person_Credentials
        // this.props.genericAction(actionTypes.FETCH_POSTS, { [globalModels.postFields.advertisementId]: this.props.ad[globalModels.advertisementFields._id] });
        // this.props.genericAction(actionTypes.FETCH_PERSON_CREDENTIALS, { [globalModels.person_credentialFields.personId]: this.props.ad[globalModels.advertisementFields.personId] });
    }

    
    render() {
        const twitterPost = this.props.ad._posts.length > 0 ? this.props.ad._posts.find((post) => post[globalModels.postFields.platform] === globalModels.platformEnum.Twitter) : null;
        const facebookPost = this.props.ad._posts.length > 0 ? this.props.ad._posts.find((post) => post[globalModels.postFields.platform] === globalModels.platformEnum.Facebook) : null;
        const instagramPost = this.props.ad._posts.length > 0 ? this.props.ad._posts.find((post) => post[globalModels.postFields.platform] === globalModels.platformEnum.Instagram) : null;
        const twitterPersonCredential = this.props.ad._person_Credentials.length > 0 ? this.props.ad._person_Credentials.find((pc) => pc[globalModels.postFields.platform] === globalModels.platformEnum.Twitter) : null;
        const facebookPersonCredential = this.props.ad._person_Credentials.length > 0 ? this.props.ad._person_Credentials.find((pc) => pc[globalModels.postFields.platform] === globalModels.platformEnum.Facebook) : null;
        const instagramPersonCredential = this.props.ad._person_Credentials.length > 0 ? this.props.ad._person_Credentials.find((pc) => pc[globalModels.postFields.platform] === globalModels.platformEnum.Instagram) : null;
        return (
            <div className="pricing-content">
                <ul className="list-unstyled pricing-feature-list">
                    <li><span>{this.props.ad.likeCount}</span> {this.props.dictionary.results.campaign.posts.post.likesLabel}</li>
                    <li><span>{this.props.ad.commentCount}</span> {this.props.dictionary.results.campaign.posts.post.commentsLabel}</li>
                </ul>
                {/* <div className="other-login-signup">
                    <div className="or-login-signup text-center">
                        <strong>{this.props.dictionary.results.campaign.posts.post.seeOnSocialSection.title}</strong>
                    </div>
                </div> */}
                <div className="col-12">
                    <div className="d-flex justify-content-center text-center">
                        <label className="pricing-switch-wrap">
                            <span className="beforeinput year-switch text-success" id={`beforeinput-${this.props.ad[globalModels.advertisementFields._id]}`}>
                                {this.props.dictionary.results.campaign.posts.post.checkPostOptionLabel}
                            </span>
                            <input type="checkbox" className="d-none js-contcheckbox2" data-key={this.props.ad[globalModels.advertisementFields._id]} />
                            <span className="switch-icon"></span>
                            <span className="afterinput year-switch" id={`afterinput-${this.props.ad[globalModels.advertisementFields._id]}`}>
                            {this.props.dictionary.results.campaign.posts.post.checkAccountOptionLabel}
                            </span>
                        </label>
                    </div>
                </div>
                <ul className="list-inline social-list-default social-color icon-hover-top-bottom" id={`posts-${this.props.ad[globalModels.advertisementFields._id]}`} style={{ display: "block", margin: "0px" }}>
                    <p>{this.props.dictionary.results.campaign.posts.post.seeOnSocialSection.title}</p>
                    <li className="list-inline-item">
                        {
                            facebookPost
                            && <a className="facebook" href={facebookPost[globalModels.postFields.postPlatformId]} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                        }
                    </li>
                    <li className="list-inline-item">
                        {
                            twitterPost
                            && <a className="twitter" href={twitterPost[globalModels.postFields.postPlatformId]} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        }
                    </li>
                    <li className="list-inline-item">
                        {
                            instagramPost
                            && <a className="instagram" href={instagramPost[globalModels.postFields.postPlatformId]} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        }
                    </li>
                </ul>
                <ul className="list-inline social-list-default social-color icon-hover-top-bottom" id={`accounts-${this.props.ad[globalModels.advertisementFields._id]}`} style={{ display: "none", margin: "0px" }}>
                    <p>{this.props.dictionary.results.campaign.posts.post.connectOnSocialSection.title.replace('[REPLACE_ME]', this.props.ad._person[globalModels.personFields.firstName])}</p>
                    <li className="list-inline-item">
                        {
                            facebookPersonCredential
                            && <a className="facebook" href={`https://www.facebook.com/${facebookPersonCredential[globalModels.person_credentialFields.platformObjectIdentity]}`} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                        }
                    </li>
                    <li className="list-inline-item">
                        {
                            twitterPersonCredential
                            && <a className="twitter" href={`https://www.twitter.com/${twitterPersonCredential[globalModels.person_credentialFields.platformObjectIdentity]}`} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        }
                    </li>
                    <li className="list-inline-item">
                        {
                            instagramPersonCredential
                            && <a className="instagram" href={`https://www.instagram.com/${instagramPersonCredential[globalModels.person_credentialFields.platformObjectIdentity]}`} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        }
                    </li>
                </ul>
                {/* <ul className="list-inline social-list-default social-color icon-hover-top-bottom yearly-price" id={`accounts-${this.props.ad[globalModels.advertisementFields._id]}`} style={{ display: "none" }}>
                    <div className="support-cta text-center">
                        <p>Contact Mario on socials <a href="/#">Facebook</a>, <a href="/#">Instagram</a>, or <a href="/#">Twitter</a></p>
                    </div>
                </ul> */}
                {/* <div className="col-12 yearly-price">
                    <div className="support-cta text-center mt-5">
                        <h5 className="mb-1"><span className="ti-headphone-alt color-primary mr-3"></span>We're Here to Help You
                        </h5>
                        <p>Have some questions? <a href="/#">Chat with us now</a>, or <a href="/#">send us an email</a> to
                            get in touch.</p>
                    </div>
                </div> */}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        dictionary: state.i18n.dictionary,
        selectedCampaign: state.companies.selectedCampaign,
        postsByAdvertisementIds: state.companies.selectedCampaign.postsByAdvertisementIds,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        genericAction: bindActionCreators(genericAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvertisementDetails);
