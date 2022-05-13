import React from "react";
import { connect } from "react-redux";
import AccessByToken from "./AccessByToken";

class PrivateDocuments extends React.Component {
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
                <section className={"team-two-section ptb-100 " + (this.props.isWhite && this.props.isWhite === true ? '' : 'gray-light-bg')}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-8">
                                <div className="section-heading mb-3 text-center">
                                    <h2>{this.props.dictionary.investors.privateDocuments.title}</h2>
                                    <p className="lead">{this.props.dictionary.investors.privateDocuments.subtitle}</p>
                                </div>
                            </div>
                        </div>
                        {
                            (this.props.security.authenticated || this.props.security.guestToken) &&
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="single-faq mt-4">
                                        <h5>{this.props.dictionary.investors.privateDocuments.pitchDeck.title}</h5>
                                        <p>{this.props.dictionary.investors.privateDocuments.pitchDeck.subtitle}</p>
                                        <a href={this.props.dictionary.investors.privateDocuments.pitchDeck.externalURL}>{this.props.dictionary.investors.privateDocuments.pitchDeck.externalURLLabel}</a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-faq mt-4">
                                        <h5>{this.props.dictionary.investors.privateDocuments.demo.title}</h5>
                                        <p>{this.props.dictionary.investors.privateDocuments.demo.subtitle}</p>
                                        {/* <a className="btn btn-brand-02 btn-sm btn-rounded" href={this.props.dictionary.investors.privateDocuments.demo.externalURL}>
                                            {this.props.dictionary.investors.privateDocuments.downloadNowButton}
                                        </a> */}
                                        <div className="video-promo-content my-5 pb-4">
                                            <a href={this.props.dictionary.investors.privateDocuments.demo.externalURL} className="popup-youtube video-play-icon text-center m-auto"><span className="ti-control-play"></span> </a>
                                        </div>
                                        {/* <a href={this.props.dictionary.investors.privateDocuments.demo.externalURL} className="popup-youtube video-play-icon text-center m-auto">{this.props.dictionary.investors.privateDocuments.demo.externalURLLabel}</a> */}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-faq mt-4">
                                        <h5>{this.props.dictionary.investors.privateDocuments.crunchbase.title}</h5>
                                        <p>{this.props.dictionary.investors.privateDocuments.crunchbase.subtitle}</p>
                                        <a href={this.props.dictionary.investors.privateDocuments.crunchbase.externalURL} target="_blank" rel="noopener noreferrer">{this.props.dictionary.investors.privateDocuments.crunchbase.externalURLLabel}</a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-faq mt-4">
                                        <h5>{this.props.dictionary.investors.privateDocuments.gust.title}</h5>
                                        <p>{this.props.dictionary.investors.privateDocuments.gust.subtitle}</p>
                                        <a href={this.props.dictionary.investors.privateDocuments.gust.externalURL} target="_blank" rel="noopener noreferrer">{this.props.dictionary.investors.privateDocuments.gust.externalURLLabel}</a>
                                    </div>
                                </div>
                            </div>

                        }
                        {
                            (!this.props.security.authenticated && !this.props.security.guestToken) &&
                            <div className="row justify-content-around">
                                <AccessByToken />
                            </div>
                        }

                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default connect(state => ({
    dictionary: state.i18n.dictionary,
    security: state.security
}))(PrivateDocuments);
