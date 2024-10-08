import React, { Component } from "react";
import { connect } from "react-redux";
import { genericAction } from "../../state/actions";
import { bindActionCreators } from "redux";
import { actionTypes } from "../../state/actionTypes";
import * as globalModels from "influencers-models";
import moment from "moment";
import { Redirect } from "react-router-dom";
import { commonStatuses } from "../../state/models/common";
import { BulletList } from 'react-content-loader';
import { withRouter } from "react-router-dom";

const statusDescription = {
    'Draft': 'Borrador',
    'OnGoing': 'Activa',
    'Stopped': 'Frenada',
    'Finished': 'Finalizada'
  };

class CampaignsGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            pathCampain: ""
        };

        this.props.genericAction(actionTypes.FETCH_CAMPAIGNS, { [globalModels.advertisementFields.companyId]: this.props.selectedCompany[globalModels.companyFields._id] });
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.selectedCompany.campaigns !== nextProps.selectedCompany.campaigns) {
            return true;
        }

        if (this.state !== nextState) {
            return true;
        }
        return false;
    }

    handleClick = (e, campaignId) => {
        e.preventDefault();
        const clickedCampaign = this.props.selectedCompany.campaigns.items.find(i => i[globalModels.campaignFields._id] === campaignId);
        this.props.genericAction(actionTypes.SELECT_CAMPAIGN, { ...clickedCampaign });

        this.props.history.push(`/companies/${this.props.selectedCompany._id}/${campaignId}`);
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.pathCampain} />;
        }
        return (
            <React.Fragment>
                <section className="our-blog-section ptb-100">
                    {
                        <div className="container" id="main">
                            <div className="row">
                                {
                                    this.props.selectedCompany && this.props.selectedCompany.campaigns.fetchStatus === commonStatuses.loaded &&
                                    this.props.selectedCompany.campaigns.items.map((campaignItem, index) => (
                                        <div className="col-md-6 col-lg-4" key={campaignItem._id}>
                                            <div className="single-blog-card card gray-light-bg border-0 shadow-sm my-3">
                                                <div className="blog-img position-relative" style={{ width: "100%" }}>
                                                    <div className="meta-date">
                                                        <strong>{moment(campaignItem[globalModels.campaignFields.startDt]).format('MMM')}</strong>
                                                        <small>{moment(campaignItem[globalModels.campaignFields.startDt]).format('YYYY')}</small>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <h3 className="h6 mb-2 card-title"><a href="/" onClick={(e) => this.handleClick(e, campaignItem._id)} >{campaignItem[globalModels.campaignFields.name]}</a></h3>
                                                    <div className="post-meta mb-2">
                                                             <p className="card-text"><i className="fas fa-ad mr-2"></i>{"Estado: " + statusDescription[campaignItem[globalModels.campaignFields.status]]}</p>
                                                        <ul className="list-inline meta-list">
                                                            <li className="list-inline-item"><i className="fas fa-heart mr-2"></i><span>{campaignItem[globalModels.campaignFields.likeCount]} </span>
                                                                Likes
                                                            </li>
                                                            <li className="list-inline-item"><i className="fas fa-comment-alt mr-2"></i><span>{campaignItem[globalModels.campaignFields.commentCount]} </span>
                                                                Comments
                                                            </li>
                                                            <li className="list-inline-item"><i className="fas fa-share-alt mr-2"></i><span>{campaignItem[globalModels.campaignFields.sharedCount]} </span>
                                                                Shared
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p className="card-text">{`Creacion: ${moment(campaignItem[globalModels.campaignFields.startDt]).format('l')}`}</p>
                                                    <a href='/' onClick={(e) => this.handleClick(e, campaignItem._id)} className="detail-link">{this.props.dictionary.results.buttons.goToCampaign} <span className="ti-arrow-right"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                {
                                    (!this.props.selectedCompany || this.props.selectedCompany.campaigns.fetchStatus === commonStatuses.loading)
                                    && <BulletList />
                                }
                            </div>

                            {/* <div className="row">
                                <div className="col-md-12">
                                    <nav className="custom-pagination-nav mt-4">
                                        <ul className="pagination justify-content-center">
                                            <li className="page-item"><a className="page-link page-scroll" href="#main"><span className="ti-angle-left"></span></a></li>
                                            <li className="page-item active"><a className="page-link" href="/#">1</a></li>
                                            <li className="page-item"><a className="page-link page-scroll" href="#main"><span className="ti-angle-right"></span></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div> */}
                        </div>
                    }

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CampaignsGrid));