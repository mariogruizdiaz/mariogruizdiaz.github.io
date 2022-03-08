import React, { Component } from "react";
import { connect } from "react-redux";

class DefaultGiudeGrid extends Component {
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
        <section className="our-blog-section ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="single-blog-card card gray-light-bg border-0 shadow-sm my-3">
                            <div className="blog-img position-relative">
                                <img src="assets/img/ios.jpeg" className="card-img-top" alt="blog" />
                                <div className="meta-date">
                                    <strong>Feb</strong>
                                    <small>2022</small>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="post-meta mb-2">
                                    <ul className="list-inline meta-list">
                                        <li className="list-inline-item"><i className="fas fa-heart mr-2"></i><span>12 </span>
                                            Comments
                                        </li>
                                        <li className="list-inline-item"><i className="fas fa-share-alt mr-2"></i><span>32 </span>
                                            Share
                                        </li>
                                    </ul>
                                </div>
                                <h3 className="h5 mb-2 card-title"><a href="/#/iosInstallGuide">{this.props.dictionary.guides.ios.install.smallCard.title}</a></h3>
                                <p className="card-text">{this.props.dictionary.guides.ios.install.smallCard.subtitle}</p>
                                <a href="/#/iosInstallGuide" className="detail-link">{this.props.dictionary.guides.buttons.readMore} <span className="ti-arrow-right"></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="single-blog-card card gray-light-bg border-0 shadow-sm my-3">
                            <div className="blog-img position-relative">
                                <img src="assets/img/android.png" className="card-img-top" alt="blog" />
                                <div className="meta-date">
                                    <strong>Feb</strong>
                                    <small>2022</small>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="post-meta mb-2">
                                    <ul className="list-inline meta-list">
                                        <li className="list-inline-item"><i className="fas fa-heart mr-2"></i><span>45 </span>
                                            Comments
                                        </li>
                                        <li className="list-inline-item"><i className="fas fa-share-alt mr-2"></i><span>102 </span>
                                            Share
                                        </li>
                                    </ul>
                                </div>
                                <h3 className="h5 mb-2 card-title"><a href="/#/androidInstallGuide">Install adme app in Android</a></h3>
                                <p className="card-text">Step by Step instalation guide to start using adme app in android phones.</p>
                                <a href="/#/androidInstallGuide" className="detail-link">Read more <span className="ti-arrow-right"></span></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <nav className="custom-pagination-nav mt-4">
                            <ul className="pagination justify-content-center">
                                <li className="page-item"><a className="page-link" href="/#"><span className="ti-angle-left"></span></a></li>
                                <li className="page-item active"><a className="page-link" href="/#">1</a></li>
                                {/* <li className="page-item"><a className="page-link" href="/#">2</a></li>
                                <li className="page-item"><a className="page-link" href="/#">3</a></li>
                                <li className="page-item"><a className="page-link" href="/#">4</a></li> */}
                                <li className="page-item"><a className="page-link" href="/#"><span className="ti-angle-right"></span></a></li>
                            </ul>
                        </nav>
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
}))(DefaultGiudeGrid);

