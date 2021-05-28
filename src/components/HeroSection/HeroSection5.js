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
        <section className="position-relative bg-image pt-100" image-overlay="10">
            <div className="background-image-wraper"></div>
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-10 col-lg-6">
                        <div className="section-heading text-white py-5">
                            <h1 className="text-white font-weight-bold">Creative Way to Showcase Your App</h1>
                            <p>Start working with that can provide everything you need to generate awareness, drive traffic, connect. Efficiently transform granular value with client-focused content. Energistically redefine market.</p>
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
                    <div className="col-sm-12 col-md-9 col-lg-5">
                        <div className="img-wrap">
                            <img src="assets/img/app-mobile-image.png" alt="shape" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <ul className="list-inline counter-wrap bg-white">
                        <li className="list-inline-item">
                            <div className="single-counter text-center count-data">
                                <span className="color-primary count-number">2350</span>
                                <h6>Happy Client</h6>
                            </div>
                        </li>
                        <li className="list-inline-item">
                            <div className="single-counter text-center count-data">
                                <span className="color-primary count-number">2150</span>
                                <h6>App Download</h6>
                            </div>
                        </li>
                        <li className="list-inline-item">
                            <div className="single-counter text-center count-data">
                                <span className="color-primary count-number">2350</span>
                                <h6>Total Rates</h6>
                            </div>
                        </li>
                        <li className="list-inline-item">
                            <div className="single-counter text-center count-data">
                                <span className="color-primary count-number">2250</span>
                                <h6>Awards win</h6>
                            </div>
                        </li>
                    </ul>
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
