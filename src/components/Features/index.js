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
        <div id="features" className={"feature-section ptb-100 " + (this.props.isGray && this.props.isGray === true ? 'gray-light-bg' : '')}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-9">
                        <div className="section-heading text-center mb-5">
                            <h2>Apdash Features</h2>
                            <p>Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented catalysts for change. Collaboratively.</p>

                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-md-center">
                    <div className="col-lg-4 col-md-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <span className="ti-face-smile icon-size-md color-secondary mr-4"></span>
                                    <div className="icon-text">
                                        <h5 className="mb-2">Responsive web design</h5>
                                        <p>Modular and monetize an componente between layouts monetize array. Core competencies for testing.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <span className="ti-vector icon-size-md color-secondary mr-4"></span>
                                    <div className="icon-text">
                                        <h5 className="mb-2">Loaded with features</h5>
                                        <p>Holisticly aggregate client centered the manufactured products transparent. Organic sources content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <span className="ti-headphone-alt icon-size-md color-secondary mr-4"></span>
                                    <div className="icon-text">
                                        <h5 className="mb-2">Friendly online support</h5>
                                        <p>Monotonectally recaptiualize client the centric customize clicks niche markets for this meta-services via. </p>
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
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <span className="ti-layout-media-right icon-size-md color-secondary mr-4"></span>
                                    <div className="icon-text">
                                        <h5 className="mb-2">Free updates forever</h5>
                                        <p>Compellingly formulate installed base imperatives high standards in benefits for highly efficient client.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <span className="ti-layout-cta-right icon-size-md color-secondary mr-4"></span>
                                    <div className="icon-text">
                                        <h5 className="mb-2">Built with Sass</h5>
                                        <p>Energistically initiate client-centric the maximize market positioning synergy rather client-based data. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <span className="ti-palette icon-size-md color-secondary mr-4"></span>
                                    <div className="icon-text">
                                        <h5 className="mb-2">Infinite colors</h5>
                                        <p>Energistically initiate client-centric e-tailers rather than-based data. Morph business technology before.</p>
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
