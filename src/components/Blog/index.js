import React, { Component } from "react";

class Blog extends Component {
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
        <section className="our-blog-section ptb-100 gray-light-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-8">
                        <div className="section-heading text-center">
                            <h2>Our Latest News</h2>
                            <p>
                                Efficiently matrix robust total linkage after market positioning bandwidth. Holisticly restore B2B materials rather than brand flexible paradigms vis-a-vis mission-critical e-commerce.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="single-blog-card card border-0 shadow-sm mt-4">
                            <div className="blog-img position-relative">
                                <img src="assets/img/blog/1.jpg" className="card-img-top" alt="blog" />
                                <div className="meta-date">
                                    <strong>24</strong>
                                    <small>Apr</small>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="post-meta mb-2">
                                    <ul className="list-inline meta-list">
                                        <li className="list-inline-item"><i className="fas fa-heart mr-2"></i><span>45</span>
                                            Comments
                                        </li>
                                        <li className="list-inline-item"><i className="fas fa-share-alt mr-2"></i><span>10</span>
                                            Share
                                        </li>
                                    </ul>
                                </div>
                                <h3 className="h5 mb-2 card-title"><a href="/#">Appropriately productize fully</a></h3>
                                <p className="card-text">Some quick example text to build on the card title and make up the
                                    bulk.</p>
                                <a href="/#" className="detail-link">Read more <span className="ti-arrow-right"></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="single-blog-card card border-0 shadow-sm mt-4">
                            <div className="blog-img position-relative">
                                <img src="assets/img/blog/2.jpg" className="card-img-top" alt="blog" />
                                <div className="meta-date">
                                    <strong>24</strong>
                                    <small>Apr</small>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="post-meta mb-2">
                                    <ul className="list-inline meta-list">
                                        <li className="list-inline-item"><i className="fas fa-heart mr-2"></i><span>45</span>
                                            Comments
                                        </li>
                                        <li className="list-inline-item"><i className="fas fa-share-alt mr-2"></i><span>10</span>
                                            Share
                                        </li>
                                    </ul>
                                </div>
                                <h3 className="h5 mb-2 card-title"><a href="/#">Quickly formulate backend</a></h3>
                                <p className="card-text">Synergistically engage effective ROI after customer directed
                                    partnerships.</p>
                                <a href="/#" className="detail-link">Read more <span className="ti-arrow-right"></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="single-blog-card card border-0 shadow-sm mt-4">
                            <div className="blog-img position-relative">
                                <img src="assets/img/blog/3.jpg" className="card-img-top" alt="blog" />
                                <div className="meta-date">
                                    <strong>24</strong>
                                    <small>Apr</small>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="post-meta mb-2">
                                    <ul className="list-inline meta-list">
                                        <li className="list-inline-item"><i className="fas fa-heart mr-2"></i><span>45</span>
                                            Comments
                                        </li>
                                        <li className="list-inline-item"><i className="fas fa-share-alt mr-2"></i><span>10</span>
                                            Share
                                        </li>
                                    </ul>
                                </div>
                                <h3 className="h5 mb-2 card-title"><a href="/#">Objectively extend extensive</a></h3>
                                <p className="card-text">Holisticly mesh open-source leadership rather than proactive
                                    users. </p>
                                <a href="/#" className="detail-link">Read more <span className="ti-arrow-right"></span></a>
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

export default Blog;
