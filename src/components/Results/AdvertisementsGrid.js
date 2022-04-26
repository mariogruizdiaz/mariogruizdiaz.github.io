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
        console.log('AdvertisementsGrid', this.props.selectedCampaign.advertisements);
        return (
            <React.Fragment>
                <div className="module ptb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="row">
                                {
                                    this.props.selectedCampaign.advertisements.items.map((adItem, index) => (
                                        // <div className="col-lg-4 col-md-4" key={adItem[globalModels.advertisementFields._id]}>
                                            <Advertisement
                                                
                                                multimediaUri={adItem[globalModels.advertisementFields.multimediaUri]}
                                                caption={adItem[globalModels.advertisementFields.caption]}
                                                likeCount={adItem[globalModels.advertisementFields.likeCount]}
                                                commentCount={adItem[globalModels.advertisementFields.commentCount]}
                                                creationDt={adItem[globalModels.advertisementFields.creationDt]}
                                                bannerIncluded={adItem[globalModels.advertisementFields.bannerIncluded]}
                                                hashtagValue={adItem.resources.hashtag.value}
                                            />
                                        // </div>
                                    ))
                                }

                            </div>
                            <div className="row ptb-100">
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
