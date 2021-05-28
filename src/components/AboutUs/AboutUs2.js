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
            <section id="about" className={"position-relative overflow-hidden feature-section ptb-100 " + (this.props.isWhite && this.props.isWhite === true ? '' : 'gray-light-bg')}>
                <div className="container">
                    <div className="row align-items-center justify-content-between">
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

                                <div className="action-btns mt-4">
                                    <a href="/#" className="btn btn-brand-02 mr-3">Get Start Now</a>
                                    <a href="/#" className="btn btn-outline-brand-02">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="mask-image">
                                <img src="assets/img/about1.jpg" className="img-fluid" alt="about" />
                                <div className="item-icon video-promo-content">
                                    <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="popup-youtube video-play-icon text-center m-auto"><span className="ti-control-play"></span> </a>
                                </div>
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
