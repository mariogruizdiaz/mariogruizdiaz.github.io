import React, { Component } from "react";
import { connect } from "react-redux";
import { genericAction } from "../../state/actions";
import { bindActionCreators } from "redux";
import moment from "moment";
import ImageLoader from "../Loaders/ImageLoader";

class Advertisement extends Component {
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
        const hastRef = `https://www.facebook.com/hashtag/${this.props.hashtagValue.replace('#', '')}`;
        return (
            <React.Fragment>
                <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="text-center bg-white single-pricing-pack mt-4 ">
                            <div className="price-img my-4 justify-content-center" style={{ height: "240px"}}>
                                <ImageLoader source={this.props.multimediaUri} alt="Ad" className="img-fluid" color="rgba(255, 255, 255, 1)" secondaryColor="rgba(150, 41, 230, 1)" />
                            </div>
                            <div className="my-4 border-0 pricing-header">
                                {/* <div className="price text-center mb-0 monthly-price color-secondary" style={{display: "block"}}>$19<span>.99</span> Hole</div>
                                <div className="price text-center mb-0 yearly-price color-secondary" style={{display: "none"}}>$69<span>.99</span></div> */}
                                <h6 className="post-title" style={{height: "50px"}}><a href={hastRef} >{`${this.props.hashtagValue} `}</a>{this.props.caption}</h6>
                            </div>
                            <div className="price-name">
                                <h5 className="mb-0">Standard</h5>
                            </div>
                            <div className="pricing-content">
                                <ul className="list-unstyled mb-4 pricing-feature-list">
                                    <li><span>Limited</span> access for a month</li>
                                    <li><span>15</span> customize sub page</li>
                                    <li className="text-deem"><span>105</span> disk space</li>
                                    <li className="text-deem"><span>3</span> domain access</li>
                                    <li className="text-deem">24/7 phone support</li>
                                </ul>
                                <a href="/#" className="btn btn-outline-brand-02 btn-rounded mb-3" target="_blank">Purchase now</a>
                            </div>
                        </div>
                    </div>
                {/* <article className="post" style={{ backgroundColor: "#F5F5F5"}}>
                    <h6 className="post-title" style={{height: "50px"}}><a href={hastRef} >{`${this.props.hashtagValue} `}</a>{this.props.caption}</h6>
                    <div className="post-preview " style={{ width: "340px", height: "340px"}}>
                        <ImageLoader source={this.props.multimediaUri} alt="Ad" className="" color="rgba(255, 255, 255, 1)" secondaryColor="rgba(150, 41, 230, 1)" />
                    </div>
                    <div className="post-wrapper">
                        <div className="post-header">
                            <ul className="post-meta">
                                <li>{moment(this.props.creationDt).fromNow()}</li>
                                <li className="list-inline-item">
                                    <a className="facebook" href={this.props.likeCount} ><i className="fab fa-facebook-f"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="row pt-3">
                            <div className="col-4 col-lg-3 border-right">
                                <div className="count-data text-center">
                                    <h6 className="count-number mb-0 color-primary font-weight-bold">{this.props.likeCount}</h6>
                                    <span>Likes</span>
                                </div>
                            </div>
                            <div className="col-4 col-lg-3 border-right">
                                <div className="count-data text-center">
                                    <h6 className="count-number mb-0 color-primary font-weight-bold">{this.props.commentCount}</h6>
                                    <span className="post-meta">Comments</span>
                                </div>
                            </div>
                        </div>
                        <div className="post-more pt-4 align-items-center d-flex"><a href="https://www.facebook.com" className="btn btn-brand-02">{this.props.dictionary.results.buttons.goToFacebook} <span className="ti-arrow-right"></span></a></div>
                    </div>
                </article> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Advertisement);
