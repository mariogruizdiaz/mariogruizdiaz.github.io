import React from "react";
import { connect } from "react-redux";

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
  }

  render() {
    return (
      <React.Fragment>
        <section className="position-relative overflow-hidden background-video">
            <div className="video-container">
                <video playsInline={true} autoPlay={true} muted={true} loop={true} poster="" id="bgvid">
                    <source src="https://www.apdash.themetags.com/youtube-video-1.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="video-content-wraper ptb-100">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-6 col-lg-6">
                            <div className="hero-content-left text-white py-5">
                                <h1 className="text-white">We Developed Best Quality Product</h1>
                                <p className="lead">Conveniently generate multifunctional markets and B2C vortals. Uniquely enable
                                    inexpensive materials rather than sticky products.</p>
                                <div className="action-btns mt-4">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a href="/#" className="d-flex align-items-center app-download-btn btn btn-white btn-rounded">
                                                <span className="fab fa-apple icon-size-sm mr-3 color-primary"></span>
                                                <div className="download-text text-left">
                                                    <small>Download form</small>
                                                    <h5 className="mb-0">App Store</h5>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="/#" className="d-flex align-items-center app-download-btn btn btn-white btn-rounded">
                                                <span className="fab fa-google-play icon-size-sm mr-3 color-primary"></span>
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
                        <div className="col-md-6 col-lg-5">
                            <div className="hero-animation-img pt-lg-4">
                                <img className="img-fluid" src="assets/img/home-banner-img.png" alt="animation" />
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
  state
}))(HeroSection);
