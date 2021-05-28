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
        <section id="about" className="about-section gray-light-bg position-relative overflow-hidden ptb-100">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-6 col-lg-6">
                        <div className="image-wrap">
                            <img className="img-fluid" src="assets/img/mobile-pana.svg" alt="animation" />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="feature-contents section-heading">
                            <h2>The Most Useful Resource Created For Designers</h2>
                            <p>Objectively deliver professional value with diverse web-readiness.
                                Collaboratively transition wireless customer service without goal-oriented catalysts for
                                change. Collaboratively.</p>

                            <ul className="check-list-wrap list-two-col py-3">
                                <li>Data driven quality review</li>
                                <li>Secure work environment</li>
                                <li>24x7 coverage</li>
                                <li>Lifetime updates</li>
                                <li>Management team</li>
                                <li>Tech support</li>
                                <li>Integration ready</li>
                                <li>Tons of assets</li>
                                <li>Compliance driven process</li>
                                <li>Workforce management</li>
                            </ul>
                            <div className="row pt-4">
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
                </div>
            </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
