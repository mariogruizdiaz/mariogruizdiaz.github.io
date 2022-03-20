import React, { Component } from "react";
import { connect } from "react-redux";
import { genericAction } from "../../state/actions";
import { bindActionCreators } from "redux";
import moment from "moment";

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
        return (
            <React.Fragment>
                <article className="post">
                    <h2 className="post-title"><a href={`https://www.facebook.com/hashtag/${this.props.hashtagValue.replace('#', '')}`} target="_blank">{`${this.props.hashtagValue} `}</a><a>{this.props.caption}</a></h2>
                    <div className="post-preview"><a><img src={this.props.multimediaUri} alt="post" /></a></div>
                    <div className="post-wrapper">
                        <div className="post-header">
                            <ul className="post-meta">
                                <li>{moment(this.props.creationDt).fromNow()}</li>
                                {/* <li><a >{this.props.likeCount} Likes</a></li>
                                <li><a >{this.props.commentCount} Comments</a></li> */}
                                <li className="list-inline-item">
                                    <a className="facebook" href={this.props.likeCount} target="_blank"><i className="fab fa-facebook-f"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="row pt-3">
                            <div className="col-4 col-lg-3 border-right">
                                <div className="count-data text-center">
                                    <h4 className="count-number mb-0 color-primary font-weight-bold">{this.props.likeCount}</h4>
                                    <span>Likes</span>
                                </div>
                            </div>
                            <div className="col-4 col-lg-3 border-right">
                                <div className="count-data text-center">
                                    <h4 className="count-number mb-0 color-primary font-weight-bold">{this.props.commentCount}</h4>
                                    <span>Comments</span>
                                </div>
                            </div>
                        </div>
                        {/* <div className="post-content">
                            <p>Just then her head struck against the roof of the hall in fact she was now more than nine feet high and she at once took up the little golden key and hurried off to the garden door. The first question of course was, how to get dry again: they had a consultation about this, and after a few minutes it seemed quite natural to Alice to find herself talking familiarly with them.</p>
                        </div> */}
                        <div className="post-more pt-4 align-items-center d-flex"><a href="https://www.facebook.com" className="btn btn-brand-02" target="_blank">{this.props.dictionary.results.buttons.goToFacebook} <span className="ti-arrow-right"></span></a></div>
                    </div>
                </article>
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
