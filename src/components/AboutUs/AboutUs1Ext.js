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
                <div className="row align-items-center justify-content-between justify-content-sm-center justify-content-md-center">
                    <div className="col-sm-5 col-md-6 col-lg-6 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
                        <div className="download-img">
                            <img src="assets/img/about-us.png" alt="download" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="feature-contents">
                            <h2>Share Your Photos With Friends Easily</h2>
                            <p>Objectively deliver professional value with diverse web-readiness.
                                Collaboratively transition wireless customer service without goal-oriented catalysts for
                                change. Collaboratively.</p>
                            <p>Uniquely simplify sustainable applications whereas adaptive schemas. Competently brand performance based content and.</p>
                            <ul className="dot-circle pt-2">
                                <li>The only way your business can evolve is in information.</li>
                                <li>Your app will be used by a host and for different.</li>
                                <li>Intrinsicly innovate top-line expertise benefits. </li>
                                <li>Efficiently redefine value-added internal sources without.</li>
                            </ul>

                            <div className="action-btns mt-4">
                                <a href="/#" className="btn btn-brand-02 mr-3">Get Start Now</a>
                                <a href="/#" className="btn btn-outline-brand-02">More About Us</a>
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
