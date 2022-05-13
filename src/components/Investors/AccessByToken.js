import React, { Component } from "react";
import { connect } from "react-redux";
import { submitContact } from "../../actions/index";
import { actionTypes } from "../../state/actionTypes";
import { genericAction } from "../../state/actions";
import { bindActionCreators } from "redux";

class AccessByToken extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            token: "",
            profileURL: "",
            applyTokenMessage: "",
            requestTokenMessage: "",
            disableContactBtn: false,
            contactBtnText: "Send Message",
            contact: {}
        };

        this.handleApplyTokenSubmit = this.handleApplyTokenSubmit.bind(this);
        this.handleRequestTokenSubmit = this.handleRequestTokenSubmit.bind(this);
        this.message = this.message.bind(this);
    }

    /**
     * When we click on Send button, changeBtnText function will help to change text
     * @param contactBtnText
     */
    changeBtnText = contactBtnText => {
        this.setState({ contactBtnText });
    };

    /**
     * Get all form data and set to the state
     * @param contactBtnText
     */
    handleFormValueChange(inputName, event) {
        let stateValue = {};
        stateValue[inputName] =
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value;
        this.setState(stateValue);
    }

    /**
     * Submit the form and dispatch to the store
     * @param contactBtnText
     */
    handleApplyTokenSubmit(event) {
        event.preventDefault();

        let error = false;
        if (!this.state.token || this.state.token !== 'test') {
            error = true;
        }

        if (!error) {
            // disable the button
            this.setState({ disableContactBtn: true });

            // // get action
            // const contactAction = submitContact(this.state);

            // // Dispatch the contact from data
            // this.props.dispatch(contactAction);

            this.message(error);
            this.props.genericAction(actionTypes.APPLY_GUEST_TOKEN, this.state.token);


            // // added delay to change button text to previous
            // setTimeout(
            //     function () {
            //         // enable the button
            //         this.setState({ disableContactBtn: false });

            //         // change to button name
            //         this.changeBtnText("Send Message");

            //         // get action again to update state
            //         const contactAction = submitContact(this.state);

            //         // Dispatch the contact from data
            //         this.props.dispatch(contactAction);

            //         // clear form data
            //         this.setState({
            //             name: "",
            //             profileURL: "",
            //             message: ""
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
            this.setState({ disableContactBtn: false });

            // change to button name
            this.changeBtnText("Send Message");
        }

    }

    message(error) {
        // const messageBox = document.querySelector('#contact .message-box');
        const messageBox = document.querySelector('#message-box-apply-token');

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

    /**
   * Submit the form and dispatch to the store
   * @param contactBtnText
   */
    handleRequestTokenSubmit(event) {
        event.preventDefault();

        let error = false;
        if (!(this.state.name && this.state.profileURL && this.state.message)) {
            error = true;
        }

        if (!error) {
            // disable the button
            this.setState({ disableContactBtn: true });

            // get action
            const contactAction = submitContact(this.state);

            // Dispatch the contact from data
            this.props.dispatch(contactAction);

            // added delay to change button text to previous
            setTimeout(
                function () {
                    // enable the button
                    this.setState({ disableContactBtn: false });

                    // change to button name
                    this.changeBtnText("Send Message");

                    // get action again to update state
                    const contactAction = submitContact(this.state);

                    // Dispatch the contact from data
                    this.props.dispatch(contactAction);

                    // clear form data
                    this.setState({
                        name: "",
                        profileURL: "",
                        message: ""
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
            this.setState({ disableContactBtn: false });

            // change to button name
            this.changeBtnText("Send Message");
        }

    }



    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                {/* <section id="contact" className="contact-us-section"> */}
                {/* <div className="container"> */}
                <div className="row justify-content-around">
                    <div id="message-box-apply-token" className="col-12 pb-3 mb-4 message-box d-none alert alert-success"></div>
                    <div className="col-md-12 col-lg-5 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
                        <div className="contact-us-form gray-light-bg rounded p-5">
                            <h4>{this.props.dictionary.investors.privateDocuments.tokenApplyTitle}</h4>
                            <form action="" method="POST" id="contactForm" className="contact-us-form" onSubmit={this.handleApplyTokenSubmit}>
                                <div className="form-row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="name" value={this.state.token} onChange={e => this.handleFormValueChange("token", e)} placeholder={this.props.dictionary.investors.privateDocuments.tokenInputPlaceHolder} />
                                        </div>
                                    </div>
                                    <div className="col-sm-12 mt-3">
                                        <button type="submit" className="btn btn-brand-02" id="btnContactUs" disabled={this.state.disableContactBtn} onClick={() => { this.changeBtnText(this.props.dictionary.investors.privateDocuments.tokenMessageInProgress); }}>
                                            {this.props.dictionary.investors.privateDocuments.tokenButton}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <div id="message-box-request-token" className="col-12 pb-3 mb-4 message-box d-none alert alert-success"></div> */}
                    <div className="col-md-12 col-lg-5 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
                        <div className="contact-us-form gray-light-bg rounded p-5">
                            <h4>{this.props.dictionary.investors.privateDocuments.tokenRequestTitle}</h4>
                            <form action="" method="POST" id="contactForm" className="contact-us-form" onSubmit={this.handleRequestTokenSubmit}>
                                <div className="form-row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="name" value={this.state.name} onChange={e => this.handleFormValueChange("name", e)} placeholder={this.props.dictionary.investors.privateDocuments.tokenRequestFullNamePlaceHolder} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="email" className="form-control" name="email" value={this.state.profileURL} onChange={e => this.handleFormValueChange("profileURL", e)} placeholder={this.props.dictionary.investors.privateDocuments.tokenRequestProfilePlaceHolder} />
                                        </div>
                                    </div>
                                    <div className="col-sm-12 mt-3">
                                        <button type="submit" className="btn btn-brand-02" id="btnContactUs" disabled={this.state.disableContactBtn} onClick={() => { this.changeBtnText(this.props.dictionary.investors.privateDocuments.tokenRequestButtonInProgressLabel); }}>
                                            {this.props.dictionary.investors.privateDocuments.tokenRequestButtonLabel}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* </div> */}
                {/* </section> */}
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        dictionary: state.i18n.dictionary,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        genericAction: bindActionCreators(genericAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccessByToken);