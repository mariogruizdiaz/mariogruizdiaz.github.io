import React from "react";
import { connect } from "react-redux";
import _data from "../../state/data";

class PromoSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promo: {}
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */

    this.setState({
      promo: _data.promo
    });
  }

  render() {
    return (
      <React.Fragment>
        <section className="promo-section ptb-100 position-relative overflow-hidden">
        {this.props.hideShape && this.props.hideShape === true && (
            <div className="effect-2 opacity-1">
                <svg version="1.1" x="0px" y="0px" viewBox="0 0 463.6 616" style={{enableBackground: "new 0 0 463.6 616"}} className="injected-svg svg_img dark-color">
                    <path d="M148.4,608.3C25.7,572.5-3.5,442.2,0.3,375.8s24.8-117,124.8-166.5s125.7-77.4,165-129.6 c43.2-57.4,96.5-94.4,127.9-73c63,43,53.9,280,14,358s-68.9,75.5-98.9,118.7S271,644,148.4,608.3z"></path>
                </svg>
            </div>
        )}
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-10">
                        <div className="section-heading">
                            <h2>{this.props.dictionary.web3.promo.title}</h2>
                            <p>{this.props.dictionary.web3.promo.subtitle}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4">
                            <div className="card-body">
                                <div className="pb-2">
                                    <span className="fas fa-concierge-bell icon-size-md color-secondary"></span>
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>{this.props.dictionary.web3.promo.reason1Title}</h5>
                                    <p className="mb-0">{this.props.dictionary.web3.promo.reason1Subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4">
                            <div className="card-body">
                                <div className="pb-2">
                                    <span className="fas fa-window-restore icon-size-md color-secondary"></span>
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>{this.props.dictionary.web3.promo.reason2Title}</h5>
                                    <p className="mb-0">{this.props.dictionary.web3.promo.reason2Subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4">
                            <div className="card-body">
                                <div className="pb-2">
                                    <span className="fas fa-sync-alt icon-size-md color-secondary"></span>
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>{this.props.dictionary.web3.promo.reason3Title}</h5>
                                    <p className="mb-0">{this.props.dictionary.web3.promo.reason3Subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4">
                            <div className="card-body">
                                <div className="pb-2">
                                    <span className="fas fa-bezier-curve icon-size-md color-secondary"></span>
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>{this.props.dictionary.web3.promo.reason4Title}</h5>
                                    <p className="mb-0">{this.props.dictionary.web3.promo.reason4Subtitle}</p>
                                </div>
                            </div>
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
    dictionary: state.i18n.dictionary
}))(PromoSection);
