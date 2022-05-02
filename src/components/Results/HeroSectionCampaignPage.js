import React from "react";
import { connect } from "react-redux";
import * as globalModels from "influencers-models";

class HeroSectionCampaignPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {
        /**
         * Your ajax will goes here to get data then call setState
         */
    }

    render() {
        const likeCount = this.props.selectedCampaign.advertisements.items.reduce((n, item) => n + item[globalModels.advertisementFields.likeCount], 0);
        const commentCount = this.props.selectedCampaign.advertisements.items.reduce((n, item) => n + item[globalModels.advertisementFields.commentCount], 0);
        return (
            <React.Fragment>
                <section className="page-header-section ptb-100 bg-image" image-overlay="8">
                    {/* <div className="background-image-wraper" style={{backgroundImage: "url(assets/img/slider-bg-1.jpg)", opacity: 1}}></div> */}
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-9 col-lg-7">
                                <div className="page-header-content text-white pt-4">
                                    <h1 className="text-white mb-0">{this.props.selectedCampaign[globalModels.campaignFields.name]}</h1>
                                    <p className="lead">{`${this.props.dictionary.results.campaign.hero.title}`} </p>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 col-md-6 col-lg-3">
                                        <div className="text-white p-2 count-data text-center my-3">
                                            <span className="fas fa-cloud-download-alt icon-size-lg mb-2"></span>
                                            <h3 className="count-number mb-1 text-white font-weight-bolder">{this.props.selectedCampaign.advertisements.items.length}</h3>
                                            <span>Posts</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-3">
                                        <div className="text-white p-2 count-data text-center my-3">
                                            <span className="fas fa-users icon-size-lg mb-2"></span>
                                            <h3 className="count-number mb-1 text-white font-weight-bolder">{commentCount}</h3>
                                            <span>Comments</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-3">
                                        <div className="text-white p-2 count-data text-center my-3">
                                            <span className="fas fa-smile icon-size-lg mb-2"></span>
                                            <h3 className="count-number mb-1 text-white font-weight-bolder">{likeCount}</h3>
                                            <span>Likes</span>
                                        </div>
                                    </div>
                                    {/* <div className="col-sm-6 col-md-6 col-lg-3">
                                        <div className="text-white p-2 count-data text-center my-3">
                                            <span className="fas fa-mug-hot icon-size-lg mb-2"></span>
                                            <h3 className="count-number mb-1 text-white font-weight-bolder">2323</h3>
                                            <span>Cup of Coffee</span>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default connect(state => ({
    dictionary: state.i18n.dictionary,
    selectedCampaign: state.companies.selectedCampaign,
    selectedCompany: state.companies.selectedCompany
}))(HeroSectionCampaignPage);
