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
  }

  render() {
    return (
      <React.Fragment>
        <section className="promo-block ptb-100">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="promo-one-single rounded p-5 my-3 my-md-3 my-lg-0 shadow-lg text-center">
                            <img src="assets/img/app-icon-4.svg" alt="promo" className="mb-3" width="100" />
                            <h5>Advertising Agency</h5>
                            <p className="mb-0">Intrinsicly create 2.0 testing procedures rather than interdependent
                                schemas. Quickly.</p>
                            <a href="/#" className="icon-link accent-bg"><span className="ti-angle-double-right"></span></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="promo-one-single rounded p-5 my-3 my-md-3 my-lg-0 shadow-lg text-center">
                            <img src="assets/img/app-icon-5.svg" alt="promo" className="mb-3" width="100" />
                            <h5>Creative Business</h5>
                            <p className="mb-0">Conveniently myocardinate efficient opportunities rather than
                                distributed catalysts for change.</p>
                            <a href="/#" className="icon-link accent-bg"><span className="ti-angle-double-right"></span></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="promo-one-single rounded p-5 my-3 my-md-3 my-lg-0 shadow-lg text-center">
                            <img src="assets/img/app-icon-6.svg" alt="promo" className="mb-3" width="100" />
                            <h5>Total SEO Services</h5>
                            <p className="mb-0">Quickly expedite cross-media information rather than open-source
                                metrics maintain.</p>
                            <a href="/#" className="icon-link accent-bg"><span className="ti-angle-double-right"></span></a>
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
  state
}))(PromoSection);
