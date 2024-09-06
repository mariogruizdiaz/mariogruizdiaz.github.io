import React from "react";
import { connect } from "react-redux";

class HeroSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hero: {}
        };
    }

    componentDidMount() {
        /**
         * Your ajax will goes here to get data then call setState
         */
    }

    render() {
        return (
            <React.Fragment>
                <section className="page-header-section ptb-100 bg-image full-height" image-overlay="8">
                    <div className="background-image-wraper" style={{
                        backgroundImage: "url(assets/img/cta-bg.jpg)",
                        opacity: 1
                    }}></div>
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-9 col-lg-7">
                                <div className="error-content-wrap text-center text-white">
                                    <h2 className="text-white">{this.props.dictionary.general.UnauthorizedTitle}</h2>
                                    <p className="lead">{this.props.dictionary.general.UnauthorizedSubtitle}</p>
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
}))(HeroSection);
