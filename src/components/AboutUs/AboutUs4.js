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
        <section id="about" className="ptb-100 gray-light-bg ">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-12 col-lg-6">
                        <div className="feature-contents section-heading">
                            <h2>The Most Useful Resource Created For Designers</h2>
                            <p>Objectively deliver professional value with diverse web-readiness.
                                Collaboratively transition wireless customer service without goal-oriented catalysts for
                                change. Collaboratively.</p>

                            <ul className="vertical-list-with-icon py-3">
                                <li className="d-flex align-items-start">
                                    <div className="mt-2 bg-white shadow-sm rounded p-3 mr-3">
                                        <img src="assets/img/image-icon-1.png" width="30" alt="prevention" />
                                    </div>
                                    <div className="vertical-list-info">
                                        <strong>Search Engine/Browsing</strong>
                                        <p>A web application, when it works well, gathers amounts of information about your business through of different metrics.</p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-start">
                                    <div className="mt-2 bg-white shadow-sm rounded p-3 mr-3">
                                        <img src="assets/img/image-icon-2.png" width="30" alt="prevention" />
                                    </div>
                                    <div className="vertical-list-info">
                                        <strong>Notification system</strong>
                                        <p>Changes don’t always happen when you are looking for it. You could be out to lunch, playing golf on the weekend.</p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-start">
                                    <div className="mt-2 bg-white shadow-sm rounded p-3 mr-3">
                                        <img src="assets/img/image-icon-3.png" width="30" alt="prevention" />
                                    </div>
                                    <div className="vertical-list-info">
                                        <strong>Mobile Friendly</strong>
                                        <p>People are not chained to desktops or laptops anymore. People rely on smart phones and tablets to help them navigate.</p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-start">
                                    <div className="mt-2 bg-white shadow-sm rounded p-3 mr-3">
                                        <img src="assets/img/image-icon-4.png" width="30" alt="prevention" />
                                    </div>
                                    <div className="vertical-list-info">
                                        <strong>User rights management</strong>
                                        <p>Your app will be used by a host of different people and for different reasons. For this reason, maintaining user.</p>
                                    </div>
                                </li>
                            </ul>

                            <div className="action-btns mt-3">
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
      </React.Fragment>
    );
  }
}

export default About;
