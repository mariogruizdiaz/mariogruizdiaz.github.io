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
        <section className="ptb-100 bg-image overflow-hidden" image-overlay="8">
            <div className="background-image-wraper" style={{backgroundImage: "url(assets/img/slider-bg-1.jpg)", opacity: 1
          }}></div>
            <div className="hero-bottom-shape-two" style={{
              backgroundImage: "url(assets/img/wave-shap.svg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom center",
          }}></div>
            <div className="effect-1 opacity-1">
                <svg version="1.1" x="0px" y="0px" viewBox="0 0 361.1 384.8" style={{enableBackground: "new 0 0 361.1 384.8"}} className="injected-svg svg_img dark-color">
                    <path d="M53.1,266.7C19.3,178-41,79.1,41.6,50.1S287.7-59.6,293.8,77.5c6.1,137.1,137.8,238,15.6,288.9 S86.8,355.4,53.1,266.7z"></path>
                </svg>
            </div>
            <div className="container">
                <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
                    <div className="col-md-12 col-lg-6">
                        <div className="hero-slider-content text-white py-5">
                            <h1 className="text-white">Best Way to Connect with Your Customers</h1>
                            <p className="lead">Holisticly procrastinate mission-critical convergence with reliable customer service. Assertively underwhelm idea-sharing for impactful solutions.</p>

                            <div className="action-btns mt-4">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a href="/#" className="d-flex align-items-center app-download-btn btn btn-brand-02 btn-rounded">
                                            <span className="fab fa-apple icon-size-sm mr-3"></span>
                                            <div className="download-text text-left">
                                                <small>Download form</small>
                                                <h5 className="mb-0">App Store</h5>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="/#" className="d-flex align-items-center app-download-btn btn btn-brand-02 btn-rounded">
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
                    <div className="col-md-6 col-sm-6 col-lg-6">
                        <div className="img-wrap">
                            <img src="assets/img/hero5-app.png" alt="app" className="img-fluid" />
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
}))(HeroSection);
