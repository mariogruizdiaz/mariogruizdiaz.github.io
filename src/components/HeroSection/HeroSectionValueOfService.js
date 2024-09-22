import React from "react";
import { connect } from "react-redux";
import { subscribe } from "../../actions/index";
import _data from "../../state/data";

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
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-8">
                        <div className="section-heading text-center mb-5">
                            <h2 className="text-white">{this.props.dictionary.brands.plansAndPrices.title}</h2>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
                    <div className="col-md-12 col-lg-6">
                      <h3 className="text-white">{this.props.dictionary.brands.plansAndPrices.subtitle}</h3>
                        <div className="hero-slider-content text-white py-1">
                            <p className="text-left">{this.props.dictionary.brands.plansAndPrices.paragraph1}</p>
                            <p className="text-left">{this.props.dictionary.brands.plansAndPrices.paragraph21}<span>{this.props.dictionary.brands.plansAndPrices.paragraph22}</span>{this.props.dictionary.brands.plansAndPrices.paragraph23}</p>
                            <p className="text-left">{this.props.dictionary.brands.plansAndPrices.paragraph3}</p>
                            <p className="text-justify"><span>{this.props.dictionary.brands.plansAndPrices.paragraph4}</span></p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-5">
                        <div className="img-wrap">
                            <img width={450} src="assets/img/gratis6meses.png" alt="app" className="img-fluid" />
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
