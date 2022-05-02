import React, { Component } from "react";
import { connect } from "react-redux";
import { genericAction } from "../../state/actions";
import { bindActionCreators } from "redux";
import { actionTypes } from "../../state/actionTypes";
import * as globalModels from "influencers-models";
import { commonStatuses } from "../../state/models/common";

class AdvertisementDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            fetchStatus: commonStatuses.loading
        };
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.props.selectedCompany[globalModels.companyFields._id] !== nextProps.selectedCompany[globalModels.companyFields._id]) {
    //         this.props.genericAction(actionTypes.FETCH_CAMPAIGNS, { [globalModels.advertisementFields.companyId]: nextProps.selectedCompany[globalModels.companyFields._id] });
    //         return false;

    //     }
    //     if (this.props.selectedCompany.campaigns !== nextProps.selectedCompany.campaigns) {
    //         return true;
    //     }

    //     if(this.state !== nextState){
    //         return true;
    //     }
    //     return false;
    // }

    componentDidMount() {
        this.props.genericAction(actionTypes.FETCH_POSTS, { [globalModels.postFields.advertisementId]: this.props.ad[globalModels.advertisementFields._id], delegate: this.getSagasResult });

    }

    getSagasResult(result) {
        if (result) {
            if (result.data) {
                this.setState({
                    posts: result.data,
                    fetchStatus: commonStatuses.loaded
                })
            } else {
                this.setState({
                    posts: [],
                    fetchStatus: commonStatuses.failed
                })

            }

        } else {

        }
    }

    handleClick = (e, campaignId) => {
        // e.preventDefault();
        // const clickedCampaign = this.props.selectedCompany.campaigns.items.find(i => i[globalModels.campaignFields._id] === campaignId);
        // this.props.genericAction(actionTypes.SELECT_CAMPAIGN, { ...clickedCampaign });
        // this.setState({
        //     redirect: true
        //   });
    };

    render() {
        return (
            <div className="pricing-content">
                <ul className="list-unstyled pricing-feature-list">
                    <li><span>{this.props.ad.likeCount}</span> {this.props.dictionary.results.campaign.posts.post.likesLabel}</li>
                    <li><span>{this.props.ad.commentCount}</span> {this.props.dictionary.results.campaign.posts.post.commentsLabel}</li>
                </ul>
                <div className="other-login-signup">
                    <div className="or-login-signup text-center">
                        <strong>{this.props.dictionary.results.campaign.posts.post.seeOnSocialSection.title}</strong>
                    </div>
                </div>
                <ul className="list-inline social-list-default social-color icon-hover-top-bottom">
                    <li className="list-inline-item">
                        <a className="facebook" href="/#" target="_blank"><i className="fab fa-facebook-f"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a className="twitter" href="/#" target="_blank"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a className="instagram" href="/#" target="_blank"><i className="fab fa-instagram"></i></a>
                    </li>
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        dictionary: state.i18n.dictionary,
        selectedCampaign: state.companies.selectedCampaign
    };
}

function mapDispatchToProps(dispatch) {
    return {
        genericAction: bindActionCreators(genericAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvertisementDetails);
