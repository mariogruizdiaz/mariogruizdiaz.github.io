import React from "react";
import { connect } from "react-redux";

class Download extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="position-relative overflow-hidden ptb-100">
            <div className="mask-65"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-8">
                        <div className="section-heading text-center text-white">
                            <h2 className="text-white">The Most Uses App Platform</h2>
                            <p>Start working with that can provide everything you need to generate awareness, drive traffic, connect. Efficiently transform granular value with client-focused content.</p>
                        </div>
                        <div className="video-promo-content my-5 pb-4">
                            <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="popup-youtube video-play-icon text-center m-auto"><span className="ti-control-play"></span> </a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center justify-content-sm-center">
                    <div className="col-sm-6 col-md-6 col-lg-4">
                        <div className="bg-white p-5 rounded text-center shadow mt-lg-0 mt-4">
                            <div className="icon-text-wrap">
                                <i className="fab fa-apple icon-size-md color-primary mb-2"></i>
                                <h5>Apple Store</h5>
                            </div>
                            <div className="p-20px">
                                <p className="m-0px">Seamlessly foster fully researched convergence and interactive resources administrate data.</p>
                                <a className="btn btn-brand-02 btn-sm btn-rounded" href="/#">Download Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4">
                        <div className="bg-white p-5 rounded text-center shadow mt-lg-0 mt-4">
                            <div className="icon-text-wrap">
                                <i className="fab fa-google-play icon-size-md color-primary mb-2"></i>
                                <h5>Google Play</h5>
                            </div>
                            <div className="p-20px">
                                <p className="m-0px">Assertively build B2C manufactured products before front-end optimize frictionless communities tailers.</p>
                                <a className="btn btn-brand-02 btn-sm btn-rounded" href="/#">Download Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4">
                        <div className="bg-white p-5 rounded text-center shadow mt-lg-0 mt-4">
                            <div className="icon-text-wrap">
                                <i className="fab fa-windows icon-size-md color-primary mb-2"></i>
                                <h5>Microsoft Store</h5>
                            </div>
                            <div className="p-20px">
                                <p className="m-0px">Completely engineer pandemic human capital via reconceptualize installed base niche markets.</p>
                                <a className="btn btn-brand-02 btn-sm btn-rounded" href="/#">Download Now</a>
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

export default connect(state => ({}))(Download);
