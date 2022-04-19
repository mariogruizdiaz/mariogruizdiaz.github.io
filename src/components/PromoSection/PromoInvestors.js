import React from "react";
import { connect } from "react-redux";

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
    });
  }

  render() {
    return (
      <React.Fragment>
        <section id="about" className="promo-section ptb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="section-heading text-center">
                            <h2>{this.props.dictionary.investors.promo.title}</h2>
                            <p>{this.props.dictionary.investors.promo.subtitle}</p>
                            <p>{this.props.dictionary.investors.promo.subtitle2}</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center justify-content-sm-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0 single-promo-card single-promo-hover text-center p-2 mt-4">
                            <div className="card-body">
                                <div className="pb-2">
                                    <span className="fas fa-hand-holding-usd icon-size-lg color-primary"></span>
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>{this.props.dictionary.investors.promo.reason1Title}</h5>
                                    <p className="mb-0">{this.props.dictionary.investors.promo.reason1Subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0 single-promo-card single-promo-hover text-center p-2 mt-4">
                            <div className="card-body">
                                <div className="pb-2">
                                    <span className="fas fa-share-alt icon-size-lg color-primary"></span>
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>{this.props.dictionary.investors.promo.reason2Title}</h5>
                                    <p className="mb-0">{this.props.dictionary.investors.promo.reason2Subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0 single-promo-card single-promo-hover text-center p-2 mt-4">
                            <div className="card-body">
                                <div className="pb-2">
                                    <span className="fas fa-users icon-size-lg color-primary"></span>
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>{this.props.dictionary.investors.promo.reason3Title}</h5>
                                    <p className="mb-0">{this.props.dictionary.investors.promo.reason3Subtitle}</p>
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
