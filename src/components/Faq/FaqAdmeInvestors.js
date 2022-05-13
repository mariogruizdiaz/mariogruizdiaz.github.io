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
                <section className={`ptb-100  ${this.props.isWhite && this.props.isWhite === true ? '' : 'gray-light-bg'}`} >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-8">
                                <div className="section-heading mb-3 text-center">
                                    <h2>{this.props.dictionary.investors.faq.title}</h2>
                                    <p className="lead">{this.props.dictionary.investors.faq.subtitle}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-12 col-lg-12">
                                <div id="accordion" className="accordion faq-wrap">
                                    <div className="card mb-3">
                                        <a className="card-header " data-toggle="collapse" href="#collapse0" aria-expanded="false">
                                            <h6 className="mb-0 d-inline-block">{this.props.dictionary.investors.faq.item1Question}</h6>
                                        </a>
                                        <div id="collapse0" className="collapse show" data-parent="#accordion">
                                            <div className="card-body white-bg">
                                                <p>{this.props.dictionary.investors.faq.item1Answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card my-3">
                                        <a className="card-header collapsed" data-toggle="collapse" href="#collapse1" aria-expanded="false">
                                            <h6 className="mb-0 d-inline-block">{this.props.dictionary.investors.faq.item2Question}</h6>
                                        </a>
                                        <div id="collapse1" className="collapse " data-parent="#accordion">
                                            <div className="card-body white-bg">
                                                <p>{this.props.dictionary.investors.faq.item2Answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card my-3">
                                        <a className="card-header collapsed" data-toggle="collapse" href="#collapse2" aria-expanded="false">
                                            <h6 className="mb-0 d-inline-block">{this.props.dictionary.investors.faq.item3Question}</h6>
                                        </a>
                                        <div id="collapse2" className="collapse " data-parent="#accordion">
                                            <div className="card-body white-bg">
                                                <p>{this.props.dictionary.investors.faq.item3Answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card my-3">
                                        <a className="card-header collapsed" data-toggle="collapse" href="#collapse3" aria-expanded="false">
                                            <h6 className="mb-0 d-inline-block">{this.props.dictionary.investors.faq.item4Question}</h6>
                                        </a>
                                        <div id="collapse3" className="collapse " data-parent="#accordion">
                                            <div className="card-body white-bg">
                                                <p>{this.props.dictionary.investors.faq.item4Answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card my-3">
                                        <a className="card-header collapsed" data-toggle="collapse" href="#collapse4" aria-expanded="false">
                                            <h6 className="mb-0 d-inline-block">{this.props.dictionary.investors.faq.item5Question}</h6>
                                        </a>
                                        <div id="collapse4" className="collapse " data-parent="#accordion">
                                            <div className="card-body white-bg">
                                                <p>{this.props.dictionary.investors.faq.item5Answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card my-3">
                                        <a className="card-header collapsed" data-toggle="collapse" href="#collapse5" aria-expanded="false">
                                            <h6 className="mb-0 d-inline-block">{this.props.dictionary.investors.faq.item6Question}</h6>
                                        </a>
                                        <div id="collapse5" className="collapse " data-parent="#accordion">
                                            <div className="card-body white-bg">
                                                <p>{this.props.dictionary.investors.faq.item6Answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card my-3">
                                        <a className="card-header collapsed" data-toggle="collapse" href="#collapse6" aria-expanded="false">
                                            <h6 className="mb-0 d-inline-block">{this.props.dictionary.investors.faq.item7Question}</h6>
                                        </a>
                                        <div id="collapse6" className="collapse " data-parent="#accordion">
                                            <div className="card-body white-bg">
                                                <p>{this.props.dictionary.investors.faq.item7Answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card my-3">
                                        <a className="card-header collapsed" data-toggle="collapse" href="#collapse7" aria-expanded="false">
                                            <h6 className="mb-0 d-inline-block">{this.props.dictionary.investors.faq.item8Question}</h6>
                                        </a>
                                        <div id="collapse7" className="collapse " data-parent="#accordion">
                                            <div className="card-body white-bg">
                                                <p>{this.props.dictionary.investors.faq.item8Answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card my-3">
                                        <a className="card-header collapsed" data-toggle="collapse" href="#collapse8" aria-expanded="false">
                                            <h6 className="mb-0 d-inline-block">{this.props.dictionary.investors.faq.item9Question}</h6>
                                        </a>
                                        <div id="collapse8" className="collapse " data-parent="#accordion">
                                            <div className="card-body white-bg">
                                                <p>{this.props.dictionary.investors.faq.item9Answer}</p>
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
