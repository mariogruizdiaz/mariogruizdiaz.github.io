import React, { Component } from "react";
import { connect } from "react-redux";
import { genericAction } from "../../state/actions";
import { bindActionCreators } from "redux";
import { actionTypes } from "../../state/actionTypes";
import * as globalModels from "influencers-models";
import moment from "moment";
import { Redirect } from "react-router-dom";

class CampaignsGrid extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            redirect: false
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.selectedCompany[globalModels.companyFields._id] !== nextProps.selectedCompany[globalModels.companyFields._id]) {
            this.props.genericAction(actionTypes.FETCH_CAMPAIGNS, { [globalModels.advertisementFields.companyId]: nextProps.selectedCompany[globalModels.companyFields._id] });
            return false;

        }
        if (this.props.selectedCompany.campaigns !== nextProps.selectedCompany.campaigns) {
            return true;
        }

        if(this.state !== nextState){
            return true;
        }
        return false;
    }

    componentDidMount() {

    }

    handleClick = (e, campaignId) => {
        e.preventDefault();
        const clickedCampaign = this.props.selectedCompany.campaigns.items.find(i => i[globalModels.campaignFields._id] === campaignId);
        this.props.genericAction(actionTypes.SELECT_CAMPAIGN, { ...clickedCampaign });
        this.setState({
            redirect: true
          });
    };

    render() {
        if(this.state.redirect){
            return <Redirect to="/campaign"/>;
        }
        return (
            <React.Fragment>
                <section className="our-blog-section ptb-100">
                    <div className="container" id="main">
                        <div className="row">
                            {
                                this.props.selectedCompany && this.props.selectedCompany.campaigns &&
                                this.props.selectedCompany.campaigns.items.map((campaignItem, index) => (
                                    <div className="col-md-6 col-lg-4" key={campaignItem._id}>
                                        <div className="single-blog-card card gray-light-bg border-0 shadow-sm my-3">
                                            <div className="blog-img position-relative">
                                                <img src={this.props.selectedCompany.logo} className="card-img-top" alt="blog" />
                                                <div className="meta-date">
                                                    <strong>{moment(campaignItem[globalModels.campaignFields.startDt]).format('MMM')}</strong>
                                                    <small>{moment(campaignItem[globalModels.campaignFields.startDt]).format('YYYY')}</small>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div className="post-meta mb-2">
                                                    <ul className="list-inline meta-list">
                                                        <li className="list-inline-item"><i className="fas fa-heart mr-2"></i><span>{campaignItem[globalModels.campaignFields.likeCount]} </span>
                                                            Likes
                                                        </li>
                                                        <li className="list-inline-item"><i className="fas fa-comment-alt mr-2"></i><span>{campaignItem[globalModels.campaignFields.likeCount]} </span>
                                                            Comments
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h3 className="h5 mb-2 card-title"><a href="/#/iosInstallGuide">{campaignItem[globalModels.campaignFields.name]}</a></h3>
                                                <p className="card-text">{`${moment(campaignItem[globalModels.campaignFields.startDt]).format('l')} - ${moment(campaignItem[globalModels.campaignFields.endDt]).format('l')}`}</p>
                                                <a href="https://www.facebook.com" onClick={(e) => this.handleClick(e, campaignItem._id)} className="detail-link">{this.props.dictionary.results.buttons.goToCampaign} <span className="ti-arrow-right"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <nav className="custom-pagination-nav mt-4">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item"><a className="page-link page-scroll" href="#main"><span className="ti-angle-left"></span></a></li>
                                        <li className="page-item active"><a className="page-link" href="/#">1</a></li>
                                        {/* <li className="page-item"><a className="page-link" href="/#">2</a></li>
                                <li className="page-item"><a className="page-link" href="/#">3</a></li>
                                <li className="page-item"><a className="page-link" href="/#">4</a></li> */}
                                        <li className="page-item"><a className="page-link page-scroll" href="#main"><span className="ti-angle-right"></span></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                    </div>
                </section>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        dictionary: state.i18n.dictionary,
        selectedCompany: state.companies.selectedCompany
    };
}

function mapDispatchToProps(dispatch) {
    return {
        genericAction: bindActionCreators(genericAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignsGrid);
