import React from "react";
import { connect } from "react-redux";

class Download extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="bg-image ptb-100" image-overlay="8">
            <div className="background-image-wraper" style={{
              backgroundImage: "url(assets/img/cta-bg.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom center",
              backgroundSize: "cover fixed",
              opacity: 1
            }}></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-8">
                        <div className="section-heading text-center mb-1 text-white">
                            <h2 className="text-white">Download Our Apps</h2>
                            <p>Start working with that can provide everything you need to generate awareness, drive traffic, connect. Efficiently transform granular value with client-focused content. Energistically redefine market.</p>
                            <div className="action-btns mt-4">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a href="/#" className="d-flex align-items-center app-download-btn btn btn-brand-02 btn-rounded">
                                            <span className="fab fa-windows icon-size-sm mr-3"></span>
                                            <div className="download-text text-left">
                                                <small>Download form</small>
                                                <h5 className="mb-0">Windows</h5>
                                            </div>
                                        </a>
                                    </li>
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
                </div>
            </div>
        </section>
      </React.Fragment>
    );
  }
}

export default connect(state => ({}))(Download);
