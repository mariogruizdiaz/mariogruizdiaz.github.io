import React from "react";
import { connect } from "react-redux";
import { subscribe } from "../../actions/index";

class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        disableBtn: false,
        btnText: "Subscribe Now"
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
        this.changeBtnText("Subscribe Now");

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
        <section className="ptb-100 bg-image" image-overlay="8">
            <div className="background-image-wraper" style={{
            backgroundImage: "url(assets/img/cta-bg.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover fixed",
            opacity: 1
          }} ></div>
            <div className="animated-shape-wrap">
                <div className="animated-shape-item"></div>
                <div className="animated-shape-item"></div>
                <div className="animated-shape-item"></div>
                <div className="animated-shape-item"></div>
                <div className="animated-shape-item"></div>
            </div>
            <div className="container">
                <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
                    <div className="col-md-12 col-lg-6">
                        <div className="hero-slider-content text-white py-5">
                            <h1 className="text-white">Best Way to Connect with Your Customers</h1>
                            <p className="lead">Holisticly procrastinate mission-critical convergence with reliable customer service. Assertively underwhelm idea-sharing for impactful solutions.</p>
                            <div id="clock" className="countdown-wrap my-4 text-white"></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="discount-banner bg-white rounded text-center">
                            <p className="lead">Join our Newsletter It's Free and Get offer discount on your first project</p>
                            <h2 className="color-accent">20%</h2>
                            <form method="post" className="subscribe-form subscribe-form-footer" onSubmit={this.handleSubmit}>
                                <div className="d-flex align-items-center">
                                    <input type="text" value={this.state.email} onChange={e => this.handleFormValueChange("email", e)} className="form-control input" id="email-subscribe" name="email" placeholder="info@yourdomain.com" />
                                </div>
                                <button type="submit" className="btn btn-brand-01 mt-4 d-block btn-block" disabled={this.state.disableBtn} onClick={() => { this.changeBtnText("Subscribing..."); }}>{this.state.btnText}</button>
                            </form>
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
  state
}))(HeroSection);
