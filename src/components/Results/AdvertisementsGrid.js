import React, { Component } from "react";
import { connect } from "react-redux";
import { genericAction } from "../../state/actions";
import { bindActionCreators } from "redux";
import * as globalModels from "influencers-models";
import Advertisement from "./Advertisement";

class AdvertisementsGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // redirect: false
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
            <React.Fragment>
                <div className="module ptb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                {
                                    this.props.selectedCampaign.advertisements.items.reverse().map((adItem, index) => (
                                        <Advertisement
                                            key={adItem[globalModels.advertisementFields._id]}
                                            multimediaUri={adItem[globalModels.advertisementFields.multimediaUri]}
                                            caption={adItem[globalModels.advertisementFields.caption]}
                                            likeCount={adItem[globalModels.advertisementFields.likeCount]}
                                            commentCount={adItem[globalModels.advertisementFields.commentCount]}
                                            creationDt={adItem[globalModels.advertisementFields.creationDt]}
                                            bannerIncluded={adItem[globalModels.advertisementFields.bannerIncluded]}
                                            hashtagValue={adItem.resources.hashtag.value}
                                        />
                                    ))
                                }
                                <div className="row">
                                    <div className="col-md-12">
                                        <nav className="custom-pagination-nav">
                                            <ul className="pagination justify-content-center">
                                                <li className="page-item"><a className="page-link" href="/#"><span className="ti-angle-left"></span></a></li>
                                                <li className="page-item active"><a className="page-link" href="/#">1</a></li>
                                                {/* <li className="page-item"><a className="page-link" href="/#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="/#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="/#">4</a></li> */}
                                                <li className="page-item"><a className="page-link" href="/#"><span className="ti-angle-right"></span></a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdvertisementsGrid);