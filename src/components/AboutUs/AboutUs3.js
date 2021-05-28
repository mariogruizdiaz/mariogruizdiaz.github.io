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
        <section id="about" className="about-us ptb-100 position-relative gray-light-bg">
            <div className="container">
                <div className="row align-items-center justify-content-lg-between justify-content-md-center">
                    <div className="col-md-5 col-lg-4">
                        <div className="about-content-right">
                            <img src="assets/img/app-mobile-image-2.png" alt="about us" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-7">
                        <div className="about-content-left section-heading">
                            <h2>Use Our App to Manage Everything.</h2>

                            <ul className="check-list-wrap pt-3">
                                <li><strong>Big Data Consulting</strong> – Holisticly leverage existing tactical core competencies with error-free methods of empowerment. Holisticly foster client-centric partnerships.</li>
                                <li><strong>Machine Learning</strong> – Assertively engage backend web-readiness through efficient web services. Enthusiastically innovate frictionless e-commerce after prospective.</li>
                                <li><strong>Artificial Intelligence</strong> – Dynamically incubate transparent technologies after cost effective action items. Competently promote user-centric sources via empowered experiences.</li>
                                <li><strong>Big Data Analytics</strong> – Quickly incubate revolutionary data and effective infomediaries. Credibly transform high standards in convergence via market positioning interfaces.</li>
                            </ul>
                            <div className="action-btns mt-4">
                                <a href="/#" className="btn btn-brand-02 mr-3">Get Start Now</a>
                                <a href="/#" className="btn btn-outline-brand-02">Learn More</a>
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
