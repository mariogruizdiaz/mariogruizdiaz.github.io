import React from "react";
import { connect } from "react-redux";

class Feature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <div id="features" className={"feature-section ptb-100 " + (this.props.isGray && this.props.isGray === true ? 'gray-light-bg' : '')}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-9">
                        <div className="section-heading text-center mb-5">
                            <h2>{this.props.dictionary.features.title}</h2>
                            <p>{this.props.dictionary.features.subtitle}</p>

                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-md-center">
                    <div className="col-lg-4 col-md-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <span className="ti-gallery icon-size-md color-secondary mr-4"></span>
                                    <div className="icon-text">
                                        <h5 className="mb-2">{this.props.dictionary.features.feature1Title}</h5>
                                        <p>{this.props.dictionary.features.feature1Subtitle}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <span className="ti-shield icon-size-md color-secondary mr-4"></span>
                                    <div className="icon-text">
                                    <h5 className="mb-2">{this.props.dictionary.features.feature2Title}</h5>
                                        <p>{this.props.dictionary.features.feature2Subtitle}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <span className="ti-target icon-size-md color-secondary mr-4"></span>
                                    <div className="icon-text">
                                    <h5 className="mb-2">{this.props.dictionary.features.feature3Title}</h5>
                                        <p>{this.props.dictionary.features.feature3Subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5 d-none d-sm-none d-md-block d-lg-block">
                        <div className="position-relative pb-md-5 py-lg-0">
                            <img alt="placeholder" src="assets/img/Iphone-Front3.png" className="img-center img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <span className="ti-announcement icon-size-md color-secondary mr-4"></span>
                                    <div className="icon-text">
                                    <h5 className="mb-2">{this.props.dictionary.features.feature4Title}</h5>
                                        <p>{this.props.dictionary.features.feature4Subtitle}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <span className="ti-thumb-up icon-size-md color-secondary mr-4"></span>
                                    <div className="icon-text">
                                    <h5 className="mb-2">{this.props.dictionary.features.feature5Title}</h5>
                                        <p>{this.props.dictionary.features.feature5Subtitle}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <span className="ti-money icon-size-md color-secondary mr-4"></span>
                                    <div className="icon-text">
                                    <h5 className="mb-2">{this.props.dictionary.features.feature6Title}</h5>
                                        <p>{this.props.dictionary.features.feature6Subtitle}</p>
                                    </div>
                                </div>
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

export default connect(state => ({
    dictionary: state.i18n.dictionary
}))(Feature);
