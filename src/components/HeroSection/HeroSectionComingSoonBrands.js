import React from "react";
import { connect } from "react-redux";
import { subscribe } from "../../actions/index";

class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        disableBtn: false,
        btnText: "Subscribe"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFormValueChange(inputName, event) {
    let stateValue = {};
    stateValue[inputName] =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(stateValue);
  }

  changeBtnText = btnText => {
    this.setState({ btnText });
  };

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
  }

  render() {
    return (
      <React.Fragment>
        <section className="page-header-section ptb-100 bg-image full-height" image-overlay="8">
        <div className="background-image-wraper" style={{
            backgroundImage: "url(assets/img/cta-bg.jpg)",
            opacity:1
          }}></div>
        <div className="container">
          {
            !this.props.security.authenticated ?
            <div className="row align-items-center justify-content-md-center justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-8">
                          <a href="/#/signUp"><div className="text-center bg-white single-pricing-pack mt-4 ">
                              <div className="py-4 border-0 pricing-header">
                              </div>
                              <div className="price-name">
                                  <h5 className="mb-0">Sign Up and Create your Company</h5>
                              </div>
                              <div className="pricing-content">
                                  <ul className="list-unstyled mb-4 pricing-feature-list">
                                      <span>I don´t have an account yet</span>
                                  </ul>
                                  <span className="btn btn-outline-brand-02 btn-rounded mb-3">Sing Up</span>
                              </div>
                          </div></a>
              </div>
            </div>
          :
            !this.props.security.company.id ? 
            <div className="row align-items-center justify-content-md-center justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-8">
                          <a href="/#/signUp"><div className="text-center bg-white single-pricing-pack mt-4 ">
                              <div className="py-4 border-0 pricing-header">
                              </div>
                              <div className="price-name">
                                  <h5 className="mb-0">Create your Company</h5>
                              </div>
                              <div className="pricing-content">
                                  <ul className="list-unstyled mb-4 pricing-feature-list">
                                      <li><span>I don´t have a company yet</span></li>
                                  </ul>
                                  <span className="btn btn-outline-brand-02 btn-rounded mb-3">Create Company</span>
                              </div>
                          </div></a>
              </div>
            </div>
            :
            null
          }

          <div className="row align-items-center justify-content-center">
              <div className="col-12 col-md-9 col-lg-7">
                  <div className="hero-content-left text-white text-center">
                      <h1 className="text-white">{this.props.dictionary.commingSoonBrands.title}</h1>
                      <p className="lead">{this.props.dictionary.commingSoonBrands.subtitle}</p>
                      <div id="clock" className="countdown-wrap my-4 text-white"></div>
                  </div>
              </div>
          </div>
          <div className="row justify-content-center">
              <div className="col-12 col-md-5 col-lg-5">
                  <form className="newsletter-form position-relative" onSubmit={this.handleSubmit}>
                      <input type="text" value={this.state.email} onChange={e => this.handleFormValueChange("email", e)} className="input-newsletter form-control" placeholder={this.props.dictionary.commingSoonBrands.placeholder} name="email" required="" />
                      <button type="submit" className="disabled" disabled={this.state.disableBtn} onClick={() => { this.changeBtnText("Subscribing..."); }}>{this.state.btnText}</button>
                  </form>
              </div>
          </div>
        </div>
    </section>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
    dictionary: state.i18n.dictionary,
    security: state.security
}))(HeroSection);
