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
        <section className="position-relative bg-image pt-100" image-overlay="8">
            <div className="background-image-wraper" style={{
            backgroundImage: "url(assets/img/header-img2.jpg)",
            opacity: 1
          }}></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-9">
                        <div className="section-heading text-center text-white py-5">
                            <h1 className="text-white">The Most Uses App Platform</h1>
                            <p>Start working with that can provide everything you need to generate awareness, drive traffic, connect. Efficiently transform granular value with client-focused content. Energistically redefine market.</p>
                            <div className="action-btns mt-3">
                                <a href="/#" className="btn btn-brand-03 btn-rounded mr-3">Download Now <i className="fas fa-cloud-download-alt pl-2"></i></a>
                                <a href="https://www.youtube.com/watch?v=1APwq1df6Mw" className="popup-youtube btn btn-white btn-circle btn-icon"><i className="fas fa-play"></i> </a> <span className="pl-2">Watch Now</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-11 col-lg-9">
                        <div className="hero-animation-img">
                            <img src="assets/img/macbook.png" alt="shape" className="bottom-shape img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-bottom">
                <img src="assets/img/curve-shape-top.svg" alt="shape" className="bottom-shape img-fluid" />
            </div>
        </section>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  state
}))(HeroSection);
