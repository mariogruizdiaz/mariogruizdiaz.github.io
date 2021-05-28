import React from "react";

class Feature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <section id="features" className="feature-section ptb-100 gray-light-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-8">
                        <div className="section-heading text-center mb-5">
                            <h2>App Features</h2>
                            <p className="text-muted para-desc mb-0 mx-auto">Start working with that can provide everything you need to generate awareness, drive traffic, connect. Efficiently transform granular value with client-focused content. Energistically redefine market.</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-12">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-12">
                                <div className="features-single-wrap mb-sm-0 mb-md-5 mb-lg-5">
                                    <span className="ti-layout p-3 mr-4 mt-1 rounded-circle float-left"></span>
                                    <div className="features-single-content d-block overflow-hidden">
                                        <h5 className="mb-2">Use On Any Device</h5>
                                        <p>composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-12">
                                <div className="features-single-wrap mb-sm-0 mb-md-5 mb-lg-5">
                                    <span className="ti-themify-favicon-alt p-3 mr-4 mt-1 rounded-circle float-left"></span>
                                    <div className="features-single-content d-block overflow-hidden">
                                        <h5 className="mb-2">Themify Icon</h5>
                                        <p>composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-12">
                                <div className="features-single-wrap mb-sm-0 mb-md-5 mb-lg-5">
                                    <span className="ti-eye p-3 mr-4 mt-1 rounded-circle float-left"></span>
                                    <div className="features-single-content d-block overflow-hidden">
                                        <h5 className="mb-2">Retina Ready</h5>
                                        <p>composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-12">
                                <div className="features-single-wrap mb-sm-0 mb-md-5 mb-lg-5">
                                    <span className="ti-thumb-up p-3 mr-4 mt-1 rounded-circle float-left"></span>
                                    <div className="features-single-content d-block overflow-hidden">
                                        <h5 className="mb-2">W3c Valid Code</h5>
                                        <p>composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-12">
                                <div className="features-single-wrap mb-sm-0 mb-md-5 mb-lg-5">
                                    <span className="ti-mobile p-3 mr-4 mt-1 rounded-circle float-left"></span>
                                    <div className="features-single-content d-block overflow-hidden">
                                        <h5 className="mb-2">Fully Responsive</h5>
                                        <p>composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-12">
                                <div className="features-single-wrap mb-sm-0 mb-md-5 mb-lg-5">
                                    <span className="ti-world p-3 mr-4 mt-1 rounded-circle float-left"></span>
                                    <div className="features-single-content d-block overflow-hidden">
                                        <h5 className="mb-2">Browser Compatibility</h5>
                                        <p>composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-12">
                        <img src="assets/img/app-mobile-image.png" className="img-fluid mx-auto d-lg-block d-none" alt="app screen" />
                    </div>
                </div>
            </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Feature;
