import React, { Component } from "react";
import { connect } from "react-redux";

class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonial: {}
    };
  }


  render() {
    return (
      <React.Fragment>
        <section id="testimonials" className="position-relative gradient-bg ptb-100">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-6 col-lg-5 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
                      <div className="testimonial-heading text-white">
                          <h2 className="text-white">{this.props.dictionary.testimonials.title}</h2>
                          <p>{this.props.dictionary.testimonials.subtitle}</p>
                      </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                      <div className="testimonial-content-wrap">
                          <img src="assets/img/testimonial-arrow-top.png" className="img-fluid testimonial-tb-shape shape-top" alt="testimonial shape" />
                          <div className="owl-carousel owl-theme client-testimonial-1 dot-indicator testimonial-shape">
                              <div className="item">
                                  <div className="testimonial-quote-wrap">
                                      <div className="media author-info mb-3">
                                          <div className="author-img mr-3">
                                              <img src="assets/img/client/gi.png" alt="client" className="img-fluid" />
                                          </div>
                                          <div className="media-body text-white">
                                              <h5 className="mb-0 text-white">{this.props.dictionary.testimonials.testimonial1Name}</h5>
                                              <span>{this.props.dictionary.testimonials.testimonial1Title}</span>
                                          </div>
                                          <i className="fas fa-quote-right text-white"></i>
                                      </div>
                                      <div className="client-say text-white">
                                          <p>{this.props.dictionary.testimonials.testimonial1Testimony}</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="item">
                                  <div className="testimonial-quote-wrap">
                                      <div className="media author-info mb-3">
                                          <div className="author-img mr-3">
                                              <img src="assets/img/client/fer.png" alt="client" className="img-fluid" />
                                          </div>
                                          <div className="media-body text-white">
                                              <h5 className="mb-0 text-white">{this.props.dictionary.testimonials.testimonial2Name}</h5>
                                              <span>{this.props.dictionary.testimonials.testimonial2Title}</span>
                                          </div>
                                          <i className="fas fa-quote-right text-white"></i>
                                      </div>
                                      <div className="client-say text-white">
                                          <p>{this.props.dictionary.testimonials.testimonial2Testimony}</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="item">
                                  <div className="testimonial-quote-wrap">
                                      <div className="media author-info mb-3">
                                          <div className="author-img mr-3">
                                              <img src="assets/img/client/gonza.png" alt="client" className="img-fluid" />
                                          </div>
                                          <div className="media-body text-white">
                                              <h5 className="mb-0 text-white">{this.props.dictionary.testimonials.testimonial3Name}</h5>
                                              <span>{this.props.dictionary.testimonials.testimonial3Title}</span>
                                          </div>
                                          <i className="fas fa-quote-right text-white"></i>
                                      </div>
                                      <div className="client-say text-white">
                                          <p>{this.props.dictionary.testimonials.testimonial3Testimony}</p>
                                      </div>
                                  </div>
                              </div>
                              {/* <div className="item">
                                  <div className="testimonial-quote-wrap">
                                      <div className="media author-info mb-3">
                                          <div className="author-img mr-3">
                                              <img src="assets/img/client/gi.png" alt="client" className="img-fluid" />
                                          </div>
                                          <div className="media-body text-white">
                                              <h5 className="mb-0 text-white">{this.props.dictionary.testimonials.testimonial4Name}</h5>
                                              <span>{this.props.dictionary.testimonials.testimonial4Title}</span>
                                          </div>
                                          <i className="fas fa-quote-right text-white"></i>
                                      </div>
                                      <div className="client-say text-white">
                                          <p>{this.props.dictionary.testimonials.testimonial4Testimony}</p>
                                      </div>
                                  </div>
                              </div> */}
                          </div>
                          <img src="assets/img/testimonial-arrow-bottom.png" className="img-fluid testimonial-tb-shape shape-bottom" alt="testimonial shape" />
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
}))(Testimonial);
