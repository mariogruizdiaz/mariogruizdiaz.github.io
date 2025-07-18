import React, { Component } from "react";
import { connect } from "react-redux";
import { genericAction } from "../../state/actions";
import { bindActionCreators } from "redux";

class OpenPostions extends Component {
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
                <div className="module ptb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <article className="post">
                                    <div className="post-wrapper">
                                        <div className="post-header">
                                            <h2 className="post-title">{this.props.dictionary.joinUs.positions.influencer.title}</h2>
                                            <ul className="post-meta">
                                                <li>{this.props.dictionary.joinUs.positions.influencer.date}</li>
                                                <li>{this.props.dictionary.joinUs.positions.influencer.tags}</li>
                                                <li>{this.props.dictionary.joinUs.positions.influencer.positionsAvailable}</li>
                                            </ul>
                                        </div>
                                        <div
                                            className="post-content"
                                            dangerouslySetInnerHTML={{ __html: this.props.dictionary.joinUs.positions.influencer.description }}
                                        ></div>
                                        <div className="col-md-12 col-lg-12">
                                            <div id="accordion" className="accordion faq-wrap">
                                                <div className="card mb-3">
                                                    <a className="card-header " data-toggle="collapse" href="#collapse0" aria-expanded="false">
                                                        <h6 className="mb-0 d-inline-block">{this.props.dictionary.joinUs.positions.influencer.hiringProcessTitle}</h6>
                                                    </a>
                                                    <div id="collapse0" className="collapse" data-parent="#accordion">
                                                        <div className="card-body white-bg"
                                                            dangerouslySetInnerHTML={{ __html: this.props.dictionary.joinUs.positions.influencer.hiringProcessDetails }}>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </article>
                                <article className="post">
                                    <div className="post-wrapper">
                                        <div className="post-header">
                                            <h2 className="post-title">{this.props.dictionary.joinUs.positions.brandAmbassador.title}</h2>
                                            <ul className="post-meta">
                                                <li>{this.props.dictionary.joinUs.positions.brandAmbassador.date}</li>
                                                <li>{this.props.dictionary.joinUs.positions.brandAmbassador.tags}</li>
                                                <li>{this.props.dictionary.joinUs.positions.brandAmbassador.positionsAvailable}</li>
                                            </ul>
                                        </div>
                                        <div
                                            className="post-content"
                                            dangerouslySetInnerHTML={{ __html: this.props.dictionary.joinUs.positions.brandAmbassador.description }}
                                        ></div>
                                        <div className="col-md-12 col-lg-12">
                                            <div id="accordion" className="accordion faq-wrap">
                                                <div className="card mb-3">
                                                    <a className="card-header " data-toggle="collapse" href="#collapse1" aria-expanded="false">
                                                        <h6 className="mb-0 d-inline-block">{this.props.dictionary.joinUs.positions.brandAmbassador.hiringProcessTitle}</h6>
                                                    </a>
                                                    <div id="collapse1" className="collapse" data-parent="#accordion">
                                                        <div className="card-body white-bg"
                                                            dangerouslySetInnerHTML={{ __html: this.props.dictionary.joinUs.positions.brandAmbassador.hiringProcessDetails }}>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </article>

                                {/* <article className="post">
                            <div className="post-preview"><a href="/#"><img src="assets/img/blog/2-w.jpg" alt="blog" /></a></div>
                            <div className="post-wrapper">
                                <div className="post-header">
                                    <h2 className="post-title"><a href="blog-single.html">Objectively communicate business core competencies </a></h2>
                                    <ul className="post-meta">
                                        <li>November 18, 2016</li>
                                        <li><a href="/#">Branding</a>, <a href="/#">Design</a></li>
                                        <li><a href="/#">3 Comments</a></li>
                                    </ul>
                                </div>
                                <div className="post-content">
                                    <p>Just then her head struck against the roof of the hall in fact she was now more than nine feet high and she at once took up the little golden key and hurried off to the garden door. The first question of course was, how to get dry again: they had a consultation about this, and after a few minutes it seemed quite natural to Alice to find herself talking familiarly with them.</p>
                                </div>
                                <div className="post-more pt-4 align-items-center d-flex"><a href="/#" className="btn btn-brand-02">Read more <span className="ti-arrow-right"></span></a></div>
                            </div>
                        </article>

                        <article className="post">
                            <div className="post-preview"><a href="/#"><img src="assets/img/blog/3-w.jpg" alt="blog" /></a></div>
                            <div className="post-wrapper">
                                <div className="post-header">
                                    <h2 className="post-title"><a href="blog-single.html">Objectively communicate business core competencies </a></h2>
                                    <ul className="post-meta">
                                        <li>November 18, 2016</li>
                                        <li><a href="/#">Branding</a>, <a href="/#">Design</a></li>
                                        <li><a href="/#">3 Comments</a></li>
                                    </ul>
                                </div>
                                <div className="post-content">
                                    <p>Just then her head struck against the roof of the hall in fact she was now more than nine feet high and she at once took up the little golden key and hurried off to the garden door. The first question of course was, how to get dry again: they had a consultation about this, and after a few minutes it seemed quite natural to Alice to find herself talking familiarly with them.</p>
                                </div>
                                <div className="post-more pt-4 align-items-center d-flex"><a href="/#" className="btn btn-brand-02">Read more <span className="ti-arrow-right"></span></a></div>
                            </div>
                        </article>

                        <article className="post">
                            <div className="post-preview"><a href="/#"><img src="assets/img/blog/4-w.jpg" alt="blog" /></a></div>
                            <div className="post-wrapper">
                                <div className="post-header">
                                    <h2 className="post-title"><a href="blog-single.html">Objectively communicate business core competencies </a></h2>
                                    <ul className="post-meta">
                                        <li>November 18, 2016</li>
                                        <li><a href="/#">Branding</a>, <a href="/#">Design</a></li>
                                        <li><a href="/#">3 Comments</a></li>
                                    </ul>
                                </div>
                                <div className="post-content">
                                    <p>Just then her head struck against the roof of the hall in fact she was now more than nine feet high and she at once took up the little golden key and hurried off to the garden door. The first question of course was, how to get dry again: they had a consultation about this, and after a few minutes it seemed quite natural to Alice to find herself talking familiarly with them.</p>
                                </div>
                                <div className="post-more pt-4 align-items-center d-flex"><a href="/#" className="btn btn-brand-02">Read more <span className="ti-arrow-right"></span></a></div>
                            </div>
                        </article> */}

                                {/* <div className="row">
                            <div className="col-md-12">
                                <nav className="custom-pagination-nav">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item"><a className="page-link" href="/#"><span className="ti-angle-left"></span></a></li>
                                        <li className="page-item active"><a className="page-link" href="/#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="/#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="/#">3</a></li>
                                        <li className="page-item"><a className="page-link" href="/#">4</a></li>
                                        <li className="page-item"><a className="page-link" href="/#"><span className="ti-angle-right"></span></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


function mapStateToProps(state) {
    return {
        dictionary: state.i18n.dictionary,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        genericAction: bindActionCreators(genericAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenPostions);