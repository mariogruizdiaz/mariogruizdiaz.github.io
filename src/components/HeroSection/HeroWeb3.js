import React from "react";
import { connect } from "react-redux";
import _data from "../../state/data";

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

        this.setState({
            hero: _data.hero
        });
    }

    render() {
        return (
            <React.Fragment>
                <section className="ptb-100 bg-image overflow-hidden" image-overlay="8">
                    <div className="hero-bottom-shape-two" style={{
                        backgroundImage: "url(assets/img/wave-shap.svg)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "bottom center",
                    }}></div>
                    <div className="effect-1 opacity-1">
                        <svg version="1.1" x="0px" y="0px" viewBox="0 0 361.1 384.8" style={{ enableBackground: "new 0 0 361.1 384.8" }} className="injected-svg svg_img dark-color">
                            <path d="M53.1,266.7C19.3,178-41,79.1,41.6,50.1S287.7-59.6,293.8,77.5c6.1,137.1,137.8,238,15.6,288.9 S86.8,355.4,53.1,266.7z"></path>
                        </svg>
                    </div>
                    <div className="container">
                        <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
                            <div className="col-md-12 col-lg-6">
                                <div className="hero-slider-content text-white py-5">
                                    <h1 className="text-white">{this.props.dictionary.web3.hero.title}</h1>
                                    <p className="lead">{this.props.dictionary.web3.hero.subtitle}</p>
                                    <div className="video-promo-content my-5 pb-4">
                                        <a href={this.props.dictionary.hero.videoUrl} className="popup-youtube video-play-icon text-center m-auto"><span className="ti-control-play"></span> </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-lg-6">
                                <div className="img-wrap">
                                    <img src="assets/img/hero-image.svg" alt="app" className="img-fluid" />
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
