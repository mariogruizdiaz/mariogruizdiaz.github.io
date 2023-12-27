import React from "react";
import { connect } from "react-redux";
import { genericAction } from "../../state/actions";
import { bindActionCreators } from "redux";
import { actionTypes } from "../../state/actionTypes";
import { commonStatuses } from "../../state/models/common";
import { Redirect } from "react-router-dom";

class HeroSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hero: {},
            // email: "",
            // password: "",
            disableBtn: false,
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

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.security !== nextProps.security) {
            this.message(nextProps.security.authenticationStatus === commonStatuses.failed);
        }

        return true;
    }

    handleSubmit(event) {
        event.preventDefault();

        let error = false;
        // if (!(this.state.email && this.state.password)) {
        //     error = true;
        // }

        if (!error) {
            // disable the button
            this.setState({ disableBtn: true });

            // // // get action
            // const loginAction = login(this.state);

            // // // Dispatch the contact from data
            // this.props.dispatch(loginAction);
            this.message(error);
            
            this.props.genericAction(actionTypes.DELETE_MY_DATA, {});

            // added delay to change button text to previous
            setTimeout(
                function () {
                    
                    this.setState({
                        redirectToHome: true
                    });
                    this.props.genericAction(actionTypes.LOGOUT, {});
                }.bind(this),
                5000
            );
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
            messageBox.innerHTML = this.props.dictionary.deleteMyData.confirmMessage;
        }
    }

    componentDidMount() {
        /**
         * Your ajax will goes here to get data then call setState
         */
    }

    render() {
        if(!this.props.security.authenticated){
            return <Redirect to={{
                pathname: "/login",
                state: { from: '/deletemydata' }
            }} />;
        }
        if(this.state.redirectToHome){
            return <Redirect to="/#"/>;
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
                                        <h4 className="mb-5">{this.props.dictionary.deleteMyData.title}</h4>
                                        <p className="lead">{this.props.dictionary.deleteMyData.subtitle}</p>
                                    </div>
                                    <div className="message-box d-none alert alert-success"></div>
                                    <form className="login-signup-form" onSubmit={this.handleSubmit}>

                                        <button className="btn btn-block btn-brand-02 border-radius mt-4 mb-3" disabled={this.state.disableBtn} onClick={() => { this.changeBtnText("Deleting..."); }}>
                                            {this.props.dictionary.deleteMyData.confirmButton}
                                        </button>
                                    </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeroSection);


