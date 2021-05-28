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
        <section className="position-relative feature-section ptb-100">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-12 col-lg-6">
                        <div className="feature-contents section-heading">
                            <h2>Share Your Photos With Friends Easily</h2>
                            <p>Objectively deliver professional value with diverse web-readiness.
                                Collaboratively transition wireless customer service without goal-oriented catalysts for
                                change. Collaboratively.</p>
                            <p>Uniquely simplify sustainable applications whereas adaptive schemas. Competently brand performance based content and.</p>
                            <ul className="dot-circle pt-2">
                                <li>The only way your business can to the information.</li>
                                <li>Your app will be used by a host and for different.</li>
                                <li>Intrinsicly innovate top-line collaborative benefits. </li>
                                <li>Efficiently redefine value-added sources without.</li>
                            </ul>

                            <ul className="list-inline mt-4 list-with-icon">
                                <li className="list-inline-item">
                                    <div className="mr-3 list-icon-box p-3 border rounded shadow-sm">
                                        <img src="assets/img/image-icon-2.png" alt="icon" className="img-fluid" />
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <div className="mr-3 list-icon-box p-3 border rounded shadow-sm">
                                        <img src="assets/img/image-icon-3.png" alt="icon" className="img-fluid" />
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <div className="mr-3 list-icon-box p-3 border rounded shadow-sm">
                                        <img src="assets/img/image-icon-4.png" alt="icon" className="img-fluid" />
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <div className="mr-3 list-icon-box p-3 border rounded shadow-sm">
                                        <img src="assets/img/image-icon-1.png" alt="icon" className="img-fluid" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="download-img">
                            <img src="assets/img/mobile-pana.svg" alt="download" className="img-fluid" />
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
