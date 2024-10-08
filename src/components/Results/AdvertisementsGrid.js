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


    render() {
        return (
            <React.Fragment>
                <div className={`module ptb-100 ${this.props.isWhite && this.props.isWhite === true ? '' : 'gray-light-bg'}`}>
                    <div className={`container`}>
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-12">
                                <div className="section-heading text-center mb-4">
                                    <h2>{this.props.dictionary.results.campaign.posts.title}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-md-center justify-content-center">
                                {
                                    this.props.selectedCampaign.advertisements.items.map((adItem, index) => (
                                        <Advertisement
                                            ad={adItem}
                                            key={adItem[globalModels.advertisementFields._id]}
                                        />
                                    ))
                                    
                                }
                        </div>
                        {/* <div className="row ptb-100">
                                <div className="col-md-12">
                                    <nav className="custom-pagination-nav">
                                        <ul className="pagination justify-content-center">
                                            <li className="page-item"><a className="page-link" href="/#"><span className="ti-angle-left"></span></a></li>
                                            <li className="page-item active"><a className="page-link" href="/#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="/#"><span className="ti-angle-right"></span></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div> */}
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
