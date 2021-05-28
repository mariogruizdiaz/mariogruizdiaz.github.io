import React from "react";

class About extends React.Component {
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
        <div className="overflow-hidden">
            <section id="about" className="about-us ptb-100 background-shape-img position-relative">
                <div className="animated-shape-wrap">
                    <div className="animated-shape-item"></div>
                    <div className="animated-shape-item"></div>
                    <div className="animated-shape-item"></div>
                    <div className="animated-shape-item"></div>
                    <div className="animated-shape-item"></div>
                </div>
                <div className="container">
                    <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
                        <div className="col-md-12 col-lg-6 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
                            <div className="about-content-left">
                                <h2>Apdash Help to Manage Everything for You</h2>
                                <p>Monotonectally impact sustainable e-services with front-end infomediaries. Collaboratively network functional solutions whereas initiatives. Progressively pontificate collaborative "outside the box" thinking for.</p>
                                <ul className="dot-circle pt-3">
                                    <li>People are not chained to desktops or laptops to help and record.</li>
                                    <li>The only way your business can evolve to the information.</li>
                                    <li>Your app will be used by a host of different people different reasons.</li>
                                    <li>Intrinsicly innovate top-line expertise after collaborative benefits. </li>
                                    <li>Efficiently redefine value-added internal or "organic" sources without.</li>
                                    <li>Objectively optimize backend quality vectors and for different.</li>
                                </ul>
                                <div className="row pt-3">
                                    <div className="col-4 col-lg-3 border-right">
                                        <div className="count-data text-center">
                                            <h4 className="count-number mb-0 color-primary font-weight-bold">1023</h4>
                                            <span>Customers</span>
                                        </div>
                                    </div>
                                    <div className="col-4 col-lg-3 border-right">
                                        <div className="count-data text-center">
                                            <h4 className="count-number mb-0 color-primary font-weight-bold">5470</h4>
                                            <span>Downloads</span>
                                        </div>
                                    </div>
                                    <div className="col-4 col-lg-3 border-right">
                                        <div className="count-data text-center">
                                            <h4 className="count-number mb-0 color-primary font-weight-bold">3560</h4>
                                            <span>Satisfied</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5 col-md-5 col-lg-4">
                            <div className="about-content-right">
                                <img src="assets/img/app-mobile-image-2.png" alt="about us" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
