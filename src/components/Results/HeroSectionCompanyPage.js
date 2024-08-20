import React from "react";
import { connect } from "react-redux";
import ImageLoader from "../Loaders/ImageLoader";

class HeroSectionCompanyPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hero: {}
        };
    }

    componentDidMount() {
        /**
         * Your ajax will goes here to get data then call setState
         */
    }

    render() {
        return (
            <React.Fragment>
                <section className="position-relative feature-section ptb-100 bg-image" image-overlay="9">
                  <div className="background-image-wraper" style={{ backgroundImage: "url(assets/img/cta-bg.jpg)", opacity: 1 }}></div>
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            
                            <div className="col-md-12 col-lg-6">
                                <div className="feature-contents text-center section-heading text-white">
                                    <h2 className="text-white mb-0">{this.props.selectedCompany.name}</h2>
                                    <p className="lead">{this.props.dictionary.results.company.hero.subtitle} </p>
                                    <ul className="list-inline mt-4 list-with-icon">
                                      <div className="row">
                                    <div className="col-sm-6 col-md-6 col-lg-3">
                                        <div className="text-white p-2 count-data text-center my-3">
                                            <h3 className="count-number mb-1 text-white font-weight-bolder">{this.props.selectedCompany.campaignsOnGoingCount}</h3>
                                            <span>Active</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-3">
                                        <div className="text-white p-2 count-data text-center my-3">
                                            <h3 className="count-number mb-1 text-white font-weight-bolder">{this.props.selectedCompany.campaignsStoppedCount}</h3>
                                            <span>Finished</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-3">
                                        <div className="text-white p-2 count-data text-center my-3">
                                            <h3 className="count-number mb-1 text-white font-weight-bolder">{this.props.selectedCompany.campaignsFinishedCount}</h3>
                                            <span>Stopped</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-3">
                                        <div className="text-white p-2 count-data text-center my-3">
                                            <h3 className="count-number mb-1 text-white font-weight-bolder">{this.props.selectedCompany.campaignsDraftCount}</h3>
                                            <span>Draft</span>
                                        </div>
                                    </div>
                                  </div>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="download-img">
                                    <ImageLoader source={this.props.selectedCompany.logo} alt="An image" className="img-fluid rounded shadow-sm" secondaryColor="rgba(255, 255, 255, 1)" color="rgba(150, 41, 230, 1)" />
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
    selectedCompany: state.companies.selectedCompany
}))(HeroSectionCompanyPage);
