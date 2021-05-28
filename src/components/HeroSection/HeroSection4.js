import React from "react";
import { connect } from "react-redux";
import _data from "../../data";

class HeroSection extends React.Component {
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

    this.setState({
      hero: _data.hero
    });
  }

  render() {
    return (
      <React.Fragment>
        <section className="position-relative overflow-hidden hero-section-3 ptb-100">
            <div className="animated-shape-wrap">
                <div className="animated-shape-item"></div>
                <div className="animated-shape-item"></div>
                <div className="animated-shape-item"></div>
                <div className="animated-shape-item"></div>
                <div className="animated-shape-item"></div>
            </div>
            <img src="assets/img/combined-shape.svg" alt="s" className="shape-img-2" />
            <img src="assets/img/shape-1.svg" alt="group shape" width="100" className="img-fluid group-shape-1" />
            <img src="assets/img/shape-2.svg" alt="group shape" width="60" className="img-fluid group-shape-2" />
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-6 col-lg-6">
                        <div className="hero-content-left pt-5">
                            <h1 className="font-weight-bold">Make Cool Landing Pages With Apdash</h1>
                            <p className="lead">Conveniently generate multifunctional markets and B2C vortals. Uniquely enable
                                inexpensive materials rather than sticky products.</p>
                            <div className="action-btns mt-4">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a href="/#" className="d-flex align-items-center app-download-btn btn btn-outline-brand-02 btn-rounded">
                                            <span className="fab fa-apple icon-size-sm mr-3"></span>
                                            <div className="download-text text-left">
                                                <small>Download form</small>
                                                <h5 className="mb-0">App Store</h5>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="/#" className="d-flex align-items-center app-download-btn btn btn-outline-brand-02 btn-rounded">
                                            <span className="fab fa-google-play icon-size-sm mr-3"></span>
                                            <div className="download-text text-left">
                                                <small>Download form</small>
                                                <h5 className="mb-0">Google Play</h5>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="img-wrap">
                            <img src="assets/img/hero-image.svg" alt="hero" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            <img src="assets/img/hero-bg-shape-4.svg" className="shape-image" alt="shape" />
        </section>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  state
}))(HeroSection);
