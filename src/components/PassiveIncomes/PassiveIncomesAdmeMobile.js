import React from "react";
import { connect } from "react-redux";

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
                            <h2>{this.props.dictionary.passiveIncomes.title}</h2>
                            <p>{this.props.dictionary.passiveIncomes.subtitle}</p>

                            <ul className="vertical-list-with-icon py-3">
                                <li className="d-flex align-items-start">
                                    <div className="mt-2 bg-white shadow-sm rounded p-3 mr-3">
                                        <span className="fas fa-hand-holding-usd icon-size-sm color-primary"></span>
                                    </div>
                                    <div className="vertical-list-info">
                                        <strong>{this.props.dictionary.passiveIncomes.method1Title}</strong>
                                        <p>{this.props.dictionary.passiveIncomes.method1Subtitle}</p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-start">
                                    <div className="mt-2 bg-white shadow-sm rounded p-3 mr-3">
                                        <span className="fas fa-comments-dollar icon-size-sm color-primary"></span>
                                    </div>
                                    <div className="vertical-list-info">
                                    <strong>{this.props.dictionary.passiveIncomes.method2Title}</strong>
                                        <p>{this.props.dictionary.passiveIncomes.method2Subtitle}</p>
                                    </div>
                                </li>
                                {/* <li className="d-flex align-items-start">
                                    <div className="mt-2 bg-white shadow-sm rounded p-3 mr-3">
                                        <img src="assets/img/image-icon-3.png" width="30" alt="prevention" />
                                    </div>
                                    <div className="vertical-list-info">
                                    <strong>{this.props.dictionary.passiveIncomes.method3Title}</strong>
                                        <p>{this.props.dictionary.passiveIncomes.method3Subtitle}</p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-start">
                                    <div className="mt-2 bg-white shadow-sm rounded p-3 mr-3">
                                        <img src="assets/img/image-icon-4.png" width="30" alt="prevention" />
                                    </div>
                                    <div className="vertical-list-info">
                                    <strong>{this.props.dictionary.passiveIncomes.method4Title}</strong>
                                        <p>{this.props.dictionary.passiveIncomes.method4Subtitle}</p>
                                    </div>
                                </li> */}
                            </ul>

                            {/* <div className="action-btns mt-3">
                                <a href="/#" className="btn btn-brand-02 mr-3">Get Start Now</a>
                                <a href="/#" className="btn btn-outline-brand-02">Learn More</a>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="mask-image">
                            <img src="assets/img/referrals/referrals.jpg" className="img-fluid" alt="about" />
                            {/* <div className="item-icon video-promo-content">
                                <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="popup-youtube video-play-icon text-center m-auto"><span className="ti-control-play"></span> </a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
    dictionary: state.i18n.dictionary
}))(About);
