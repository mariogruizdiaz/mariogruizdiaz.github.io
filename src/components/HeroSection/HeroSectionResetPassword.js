import React from "react";
import { connect } from "react-redux";
import { resetPassword } from "../../actions/index";

class HeroSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          hero: {},
          email: "",
          disableBtn: false,
          btnText: "Reset Password",
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
        if(!(this.state.email)) {
            error = true;
        }

        if(!error) {
            // disable the button
            this.setState({ disableBtn: true });

            // // get action
            const formAction = resetPassword(this.state);

            // // Dispatch the contact from data
            this.props.dispatch(formAction);

            // // added delay to change button text to previous
            setTimeout(
                function() {
                // enable the button
                this.setState({ disableBtn: false });

                // change to button name
                this.changeBtnText("Reset Password");

                // get action again to update state
                const formAction = resetPassword(this.state);

                // Dispatch the contact from data
                this.props.dispatch(formAction);

                // clear form data
                this.setState({
                    email: ""
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
        this.changeBtnText("Reset Password");
      }
    }

    message(error) {
        const messageBox = document.querySelector('.login-signup-wrap .message-box');
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
            <div className="row align-items-center justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                <div className="login-signup-wrap p-5 gray-light-bg rounded shadow">
                        <div className="login-signup-header text-center">
                            <a href="/"><img src="assets/img/logo-color.png" className="img-fluid mb-3" alt="Logo" /></a>
                            <h4 className="mb-5">Reset Your Account</h4>
                        </div>
                        <div className="message-box d-none alert alert-success"></div>
                        <form className="login-signup-form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                                <label className="pb-1">
                                    Email Address
                                </label>
                                <div className="input-group input-group-merge">
                                    <div className="input-icon">
                                        <span className="ti-email"></span>
                                    </div>
                                    <input name="email" value={this.state.email} onChange={e => this.handleFormValueChange("email", e)} type="email" className="form-control" placeholder="name@address.com" />
                                </div>
                            </div>

                            <button className="btn btn-block btn-brand-02 border-radius mt-4 mb-3" disabled={this.state.disableBtn} onClick={() => { this.changeBtnText("Resetting..."); }}>
                                {this.state.btnText}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="copyright-wrap small-text text-center mt-5 text-white">
                        <p className="mb-0">&copy; ThemeTags Design Agency, All rights reserved</p>
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
