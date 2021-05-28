import React from "react";
import { connect } from "react-redux";

class Faq extends React.Component {
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
        <section id="faq" className={"ptb-100 " + (this.props.isGray && this.props.isGray === true ? 'gray-light-bg' : '')}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-8">
                        <div className="section-heading text-center mb-5">
                            <h2>{this.props.dictionary.faq.title}</h2>
                            <p>{this.props.dictionary.faq.subtitle}</p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-12 col-lg-6 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
                        <div className="img-wrap">
                            <img src="assets/img/health.png" alt="download" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div id="accordion" className="accordion faq-wrap">
                            <div className="card mb-3">
                                <a className="card-header " data-toggle="collapse" href="#collapse0" aria-expanded="false">
                                    <h6 className="mb-0 d-inline-block">{this.props.dictionary.faq.q1Question}</h6>
                                </a>
                                <div id="collapse0" className="collapse show" data-parent="#accordion">
                                    <div className="card-body white-bg">
                                        <p>{this.props.dictionary.faq.q1Answer}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card my-3">
                                <a className="card-header collapsed" data-toggle="collapse" href="#collapse1" aria-expanded="false">
                                    <h6 className="mb-0 d-inline-block">{this.props.dictionary.faq.q2Question}</h6>
                                </a>
                                <div id="collapse1" className="collapse " data-parent="#accordion">
                                    <div className="card-body white-bg">
                                        <p>{this.props.dictionary.faq.q2Answer}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card my-3">
                                <a className="card-header collapsed" data-toggle="collapse" href="#collapse2" aria-expanded="false">
                                    <h6 className="mb-0 d-inline-block">{this.props.dictionary.faq.q3Question}</h6>
                                </a>
                                <div id="collapse2" className="collapse " data-parent="#accordion">
                                    <div className="card-body white-bg">
                                        <p>{this.props.dictionary.faq.q3Answer}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <a className="card-header collapsed" data-toggle="collapse" href="#collapse3" aria-expanded="false">
                                    <h6 className="mb-0 d-inline-block">{this.props.dictionary.faq.q4Question}</h6>
                                </a>
                                <div id="collapse3" className="collapse " data-parent="#accordion">
                                    <div className="card-body white-bg">
                                        <p>{this.props.dictionary.faq.q4Answer}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <a className="card-header collapsed" data-toggle="collapse" href="#collapse4" aria-expanded="false">
                                    <h6 className="mb-0 d-inline-block">{this.props.dictionary.faq.q5Question}</h6>
                                </a>
                                <div id="collapse4" className="collapse " data-parent="#accordion">
                                    <div className="card-body white-bg">
                                        <p>{this.props.dictionary.faq.q5Answer}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <a className="card-header collapsed" data-toggle="collapse" href="#collapse5" aria-expanded="false">
                                    <h6 className="mb-0 d-inline-block">{this.props.dictionary.faq.q6Question}</h6>
                                </a>
                                <div id="collapse5" className="collapse " data-parent="#accordion">
                                    <div className="card-body white-bg">
                                        <p>{this.props.dictionary.faq.q6Answer}</p>
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

export default connect(state => ({
    dictionary: state.i18n.dictionary
}))(Faq);
