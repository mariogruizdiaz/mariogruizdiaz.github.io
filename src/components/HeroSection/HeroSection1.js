import React from "react";
import { connect } from "react-redux";
import { subscribe } from "../../actions/index";
import _data from "../../data";

class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: {},
      email: "",
      disableBtn: false,
      btnText: "Subscribe"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeBtnText = btnText => {
    this.setState({ btnText });
  };

  handleFormValueChange(inputName, event) {
    let stateValue = {};
    stateValue[inputName] =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(stateValue);
  }

  handleSubmit(event) {
    event.preventDefault();

    // disable the button
    this.setState({ disableBtn: true });

    // get action
    const subscribeAction = subscribe(this.state);

    // Dispatch the contact from data
    this.props.dispatch(subscribeAction);

    // added delay to change button text to previous
    setTimeout(
      function() {
        // enable the button
        this.setState({ disableBtn: false });

        // change to button name
        this.changeBtnText("Subscribe");

        // get action again to update state
        const subscribeAction = subscribe(this.state);

        // Dispatch the contact from data
        this.props.dispatch(subscribeAction);

        // clear form data
        this.setState({
          email: ""
        });
      }.bind(this),
      3000
    );
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
        <section id="hero" className="ptb-100 bg-image overflow-hidden" image-overlay="10">
            <div className="hero-bottom-shape-two" style={{
              backgroundImage: "url(assets/img/hero-bottom-shape-2.svg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom center"
            }}></div>
            <div className="container">
                <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
                    <div className="col-md-12 col-lg-6">
                        <div className="hero-slider-content text-white py-5">
                            <h1 className="text-white">{this.props.dictionary.hero.title}</h1>
                            <p className="lead">{this.props.dictionary.hero.subtitle}</p>
                            <div className="video-promo-content my-5 pb-4">
                                <a href={this.props.dictionary.hero.videoUrl} className="popup-youtube video-play-icon text-center m-auto"><span className="ti-control-play"></span> </a>
                            </div>
                            <div className="action-btns mt-4 text-center">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a href="/#" className="d-flex align-items-center app-download-btn btn btn-white btn-rounded">
                                            <span className="fab fa-apple icon-size-sm mr-3 color-primary"></span>
                                            <div className="download-text text-left">
                                                <small>{this.props.dictionary.general.downloadFrom}</small>
                                                <h5 className="mb-0">App Store</h5>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="/#" className="d-flex align-items-center app-download-btn btn btn-white btn-rounded">
                                            <span className="fab fa-google-play icon-size-sm mr-3 color-primary"></span>
                                            <div className="download-text text-left">
                                                <small>{this.props.dictionary.general.downloadFrom}</small>
                                                <h5 className="mb-0">Google Play</h5>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-5">
                        <div className="img-wrap">
                            <img src="assets/img/adme-mobil3-dash3.png" alt="app" className="img-fluid" />
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
