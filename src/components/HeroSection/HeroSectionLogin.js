import React from "react";
import { connect } from "react-redux";
import { genericAction } from "../../state/actions";
import { bindActionCreators } from "redux";
import * as globalModels from "adme-models";
import { actionTypes } from "../../state/actionTypes";
import { commonStatuses } from "../../state/models/common";
import { Redirect, withRouter } from "react-router-dom";

class HeroSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hero: {},
            email: "",
            password: "",
            disableBtn: false,
            btnText: "Sign In"
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.message = this.message.bind(this);
    }

    // history = useHistory();
    
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

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.security !== nextProps.security) {
            this.message(nextProps.security.authenticationStatus === commonStatuses.failed);
        }

        return true;
    }

    handleSubmit(event) {
        event.preventDefault();

        let error = false;
        if (!(this.state.email && this.state.password)) {
            error = true;
        }

        if (!error) {
            // disable the button
            this.setState({ disableBtn: true });

            // // // get action
            // const loginAction = login(this.state);

            // // // Dispatch the contact from data
            // this.props.dispatch(loginAction);
            this.message(error);
            this.props.genericAction(actionTypes.LOGIN, { [globalModels.personFields.email]: this.state.email, [globalModels.personFields.password]: this.state.password });

            // // added delay to change button text to previous
            // setTimeout(
            //     function () {
            //         // enable the button
            //         this.setState({ disableBtn: false });

            //         // change to button name
            //         this.changeBtnText("Sign In");

            //         // // get action again to update state
            //         const loginAction = login(this.state);

            //         // // Dispatch the contact from data
            //         this.props.dispatch(loginAction);

            //         // clear form data
            //         this.setState({
            //             email: "",
            //             password: ""
            //         });

            //         // Set success message
            //         this.message(error);
            //     }.bind(this),
            //     3000
            // );
        } else {
            // Set error message
            this.message(error);

            // enable the button
            this.setState({ disableBtn: false });

            // change to button name
            this.changeBtnText("Sign In");
        }
    }

    message(error) {
        const messageBox = document.querySelector('.login-signup-wrap .message-box');
        if (messageBox.classList.contains("d-none")) {
            messageBox.classList.remove("d-none");
        }
        messageBox.classList.add("d-block");
        if (error) {
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
        if(this.props.security.authenticated){
            return <Redirect to={{pathname: this.props.location?.state?.from? this.props.location.state.from : "/"}}/>;
        }
        return (
            <React.Fragment>
                <section className="page-header-section ptb-100 bg-image full-height" image-overlay="8">
                    <div className="background-image-wraper" style={{
                        backgroundImage: "url(assets/img/cta-bg.jpg)",
                        opacity: 1
                    }}></div>
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-12 col-md-8 col-lg-6">
                                <div className="login-signup-wrap p-5 gray-light-bg rounded shadow">
                                    <div className="login-signup-header text-center">
                                        <a href="/#"><img src="assets/img/adme-logo-name.png" className="img-fluid mb-3" alt="Logo" /></a>
                                        <h4 className="mb-5">Login Your Account</h4>
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
                                                <input value={this.state.email} onChange={e => this.handleFormValueChange("email", e)} type="email" className="form-control" placeholder="name@address.com" />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="pb-1">
                                                Password
                                            </label>
                                            <div className="input-group input-group-merge">
                                                <div className="input-icon">
                                                    <span className="ti-lock"></span>
                                                </div>
                                                <input value={this.state.password} onChange={e => this.handleFormValueChange("password", e)} type="password" className="form-control" placeholder="Enter your password" />
                                            </div>
                                        </div>

                                        <button className="btn btn-block btn-brand-02 border-radius mt-4 mb-3" disabled={this.state.disableBtn} onClick={() => { this.changeBtnText("Signing..."); }}>
                                            {this.state.btnText}
                                        </button>
                                    </form>
                                    {/* <div className="other-login-signup my-3">
                            <div className="or-login-signup text-center">
                                <strong>Or Login With</strong>
                            </div>
                        </div>
                        <ul className="list-inline social-login-signup text-center">
                            <li className="list-inline-item my-1">
                                <a href="/#" className="btn btn-facebook"><i className="fab fa-facebook-f pr-1"></i> Facebook</a>
                            </li>
                            <li className="list-inline-item my-1">
                                <a href="/#" className="btn btn-google"><i className="fab fa-google pr-1"></i> Google</a>
                            </li>
                            <li className="list-inline-item my-1">
                                <a href="/#" className="btn btn-twitter"><i className="fab fa-twitter pr-1"></i> Twitter</a>
                            </li>
                        </ul>
                        <p className="text-center mb-0">Don't have an account? <a href="signup">Register</a></p> */}
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-lg-6">
                                <div className="copyright-wrap small-text text-center mt-5 text-white">
                                    <p className="mb-0">&copy; {this.props.dictionary.footer.rights}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        dictionary: state.i18n.dictionary,
        security: state.security
    };
}

function mapDispatchToProps(dispatch) {
    return {
        genericAction: bindActionCreators(genericAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeroSection));


