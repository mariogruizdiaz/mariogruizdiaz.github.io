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
        <div id="features" className="feature-section ptb-100 ">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-9">
                        <div className="section-heading text-center mb-5">
                            <h2>Quick &amp; Easy Process With Best Features</h2>
                            <p>Objectively deliver professional value with diverse web-readiness.
                                Collaboratively transition wireless customer service without goal-oriented catalysts for
                                change. Collaboratively.</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center justify-content-md-center">
                    <div className="col-lg-4 col-md-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-5 mb-lg-5">
                                    <img src="assets/img/app-icon-3.svg" alt="app icon" width="50" className="img-fluid mr-3" />
                                    <div className="icon-text">
                                        <h5 className="mb-2">Responsive web design</h5>
                                        <p>Modular and interchangable componente between layouts and even demos.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-5 mb-lg-5">
                                    <img src="assets/img/app-icon-4.svg" alt="app icon" width="50" className="img-fluid mr-3" />
                                    <div className="icon-text">
                                        <h5 className="mb-2">Loaded with features</h5>
                                        <p>Modular and interchangable componente between layouts and even demos.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-5 mb-lg-5">
                                    <img src="assets/img/app-icon-5.svg" alt="app icon" width="50" className="img-fluid mr-3" />
                                    <div className="icon-text">
                                        <h5 className="mb-2">Friendly online support</h5>
                                        <p>Modular and interchangable componente between layouts and even demos.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5 d-none d-sm-none d-md-block d-lg-block">
                        <div className="position-relative pb-md-5 py-lg-0">
                            <img alt="placeholder" src="assets/img/app-mobile-image.png" className="img-center img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-5 mb-lg-5">
                                    <img src="assets/img/app-icon-7.svg" alt="app icon" width="50" className="img-fluid mr-3" />
                                    <div className="icon-text">
                                        <h5 className="mb-2">Free updates forever</h5>
                                        <p>Modular and interchangable componente between layouts and even demos.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-5 mb-lg-5">
                                    <img src="assets/img/app-icon-8.svg" alt="app icon" width="50" className="img-fluid mr-3" />
                                    <div className="icon-text">
                                        <h5 className="mb-2">Built with Sass</h5>
                                        <p>Modular and interchangable componente between layouts and even demos.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-5 mb-lg-5">
                                    <img src="assets/img/app-icon-9.svg" alt="app icon" width="50" className="img-fluid mr-3" />
                                    <div className="icon-text">
                                        <h5 className="mb-2">Infinite colors</h5>
                                        <p>Modular and interchangable componente between layouts and even demos.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Feature;
