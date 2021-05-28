import React from "react";
import { connect } from "react-redux";
import { postQuote } from "../../actions/index";
import _data from "../../data";

class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        hero: {},
        name: "",
        email: "",
        message: "",
        isAgreed: false,
        disableBtn: false,
        btnText: "Send your query"
      };
  
      this.handleSubmit = this.handleSubmit.bind(this);
      this.message = this.message.bind(this);
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

    let error = false;
    if(!(this.state.name && this.state.email && this.state.message && this.state.isAgreed)) {
      error = true;
    }

    if(!error) {
        // disable the button
        this.setState({ disableBtn: true });

        // // get action
        const quoteAction = postQuote(this.state);

        // // Dispatch the contact from data
        this.props.dispatch(quoteAction);

        // // added delay to change button text to previous
        setTimeout(
        function() {
            // enable the button
            this.setState({ disableBtn: false });

            // change to button name
            this.changeBtnText("Send your query");

            // get action again to update state
            const quoteAction = postQuote(this.state);

            // Dispatch the contact from data
            this.props.dispatch(quoteAction);

            // clear form data
            this.setState({
            name: "",
            email: "",
            message: "",
            isAgreed: false
            });

            // Set success message
            this.message(error);
        }.bind(this),
        3000
        );
    } else {
        // Set error message
        this.message(error);
        
        // enable the button
        this.setState({ disableBtn: false });
  
        // change to button name
        this.changeBtnText("Send your query");
      }
  }

  message(error) {
    const messageBox = document.querySelector('.sign-up-form-wrap .message-box');
    if (messageBox.classList.contains("d-none")) {
      messageBox.classList.remove("d-none");
    }
    messageBox.classList.add("d-block");
    if(error) {
      if (messageBox.classList.contains("alert-success")) {
        messageBox.classList.remove("alert-success");
      }
      messageBox.classList.add("alert-danger");
      messageBox.innerHTML = 'Found error in the form. Please check again.';
    }
    else {
      if (messageBox.classList.contains("alert-danger")) {
        messageBox.classList.remove("alert-danger");
      }
      messageBox.classList.add("alert-success");
      messageBox.innerHTML = 'Form submitted successfully';
    }
  }

  componentDidMount() {
    /**
     * Your ajax/ saga/ thunk call will goes here to get data then call setState
     */

    this.setState({
        hero: _data.hero
    });
  }

  render() {
    return (
      <React.Fragment>
        <section className="ptb-100 hero-bg-shape">
            <div className="container">
                <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
                    <div className="col-md-12 col-lg-6">
                        <div className="hero-slider-content text-white py-5">
                            <h1 className="text-white">Best Way to Connect with Customers</h1>
                            <p className="lead">Holisticly procrastinate mission-critical convergence with reliable customer service. Assertively underwhelm idea-sharing for impactful solutions.</p>

                            <div className="action-btns mt-3">
                                <a href="/#" className="btn btn-brand-03 btn-rounded mr-3">Download Now <i className="fas fa-cloud-download-alt pl-2"></i></a>
                                <a href="https://www.youtube.com/watch?v=1APwq1df6Mw" className="popup-youtube btn btn-white btn-circle btn-icon"><i className="fas fa-play"></i> </a> <span className="pl-2">Watch Now</span>
                            </div>
                            <div className="hero-counter mt-5">
                                <div className="row">
                                    <div className="col-6 col-sm-4">
                                        <div className="counter-item d-flex align-items-center">
                                            <div className="single-counter-item">
                                                <span className="h4 count-number text-white">672,086</span>
                                                <h6 className="text-white mb-0">Total Install</h6>
                                            </div>
                                            <span className="color-6 ml-2 p-2 rounded-circle">
                                            <i className="fas fa-arrow-up icon-sm"></i>
                                        </span>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4">
                                        <div className="counter-item d-flex align-items-center">
                                            <div className="single-counter-item">
                                                <span className="h4 count-number text-white">143,870</span>
                                                <h6 className="text-white mb-0">Total Download</h6>
                                            </div>
                                            <span className="color-6 ml-2 p-2 rounded-circle">
                                            <i className="fas fa-arrow-up icon-sm"></i>
                                        </span>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4">
                                        <div className="counter-item d-flex align-items-center">
                                            <div className="single-counter-item">
                                                <span className="h4 count-number text-white">31,191</span>
                                                <h6 className="text-white mb-0">Active Users</h6>
                                            </div>
                                            <span className="color-6 ml-2 p-2 rounded-circle">
                                            <i className="fas fa-arrow-up icon-sm"></i>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-9 col-lg-5">
                        <div className="sign-up-form-wrap position-relative z-index shadow-lg rounded p-5 w-100 gray-light-bg">
                            <div className="sign-up-form-header text-center mb-4">
                                <h4 className="mb-1">Get a quote today</h4>
                                <p>Get response from us within 24 hours</p>
                            </div>
                            <div className="message-box d-none alert alert-success"></div>
                            <form id="getQuoteFrm" method="POST" className="login-signup-form get-quote-form-wrap" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Your Name</label>
                                    <div className="input-group input-group-merge">
                                        <div className="input-icon">
                                            <span className="ti-user"></span>
                                        </div>
                                        <input type="text" name="name" value={this.state.name} onChange={e => this.handleFormValueChange("name", e)} className="form-control" placeholder="Enter your name" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Your Email</label>
                                    <div className="input-group input-group-merge">
                                        <div className="input-icon">
                                            <span className="ti-email"></span>
                                        </div>
                                        <input type="email" name="email" value={this.state.email} onChange={e => this.handleFormValueChange("email", e)} className="form-control" placeholder="Enter your email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Write your message</label>
                                    <div className="input-group input-group-merge">
                                        <div className="input-icon textarea-icon">
                                            <span className="ti-comment-alt"></span>
                                        </div>
                                        <textarea name="message" value={this.state.message} onChange={e => this.handleFormValueChange("message", e) } className="form-control" placeholder="Write your message" cols="30" rows="4" required=""></textarea>
                                    </div>
                                </div>
                                <button className="btn btn-block btn-brand-02 mt-4 mb-3" disabled={this.state.disableBtn} onClick={() => { this.changeBtnText("Sending..."); }}>
                                {this.state.btnText}
                                </button>

                                <div className="form-check d-flex align-items-center text-center">
                                    <input type="checkbox" className="form-check-input mt-0 mr-3" id="exampleCheck1" checked={this.state.isAgreed} onChange={e => this.handleFormValueChange("isAgreed", e) } />
                                    <label className="form-check-label small" htmlFor="exampleCheck1">I agree your <a href="/#">terms &amp; conditions</a></label>
                                </div>
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
