import React from "react";
import { connect } from "react-redux";
import { subscribe } from "../../actions/index";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
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

    handleSubmit(event) {
        event.preventDefault();

        window.open(`https://api.whatsapp.com/send?phone=5491140851807&text=Quiero%20sumarme%20a%20Adme.%20Mi%20instagram%20es%20${this.state.email}`, "_blank");
        // get action
        const subscribeAction = subscribe(this.state);

        // Dispatch the contact from data
        this.props.dispatch(subscribeAction);

        // added delay to change button text to previous
        setTimeout(
            function () {
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
                <footer className={"footer-1 gradient-bg ptb-60 " + (this.props.withoutNewsletter && this.props.withoutNewsletter === true ? "" : "footer-with-newsletter")}>
                    {!(this.props.withoutNewsletter && this.props.withoutNewsletter === true) && (
                        <div className="container">
                            <div className="row newsletter-wrap primary-bg rounded shadow-lg p-5">
                                <div className="col-md-6 col-lg-7 mb-4 mb-md-0 mb-sm-4 mb-lg-0">
                                    <div className="newsletter-content text-white">
                                        <h3 className="mb-0 text-white">{this.props.dictionary.footer.subscribe.title}</h3>
                                        <p className="mb-0">{this.props.dictionary.footer.subscribe.subtitle}</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-5">
                                    <form className="newsletter-form position-relative" method="post" onSubmit={this.handleSubmit}>
                                        <input value={this.state.email} onChange={e => this.handleFormValueChange("email", e)} type="text" className="input-newsletter form-control" placeholder={this.props.dictionary.footer.subscribe.placeholder} name="email" required="" />
                                        <button type="submit" className="disabled"><i className="fas fa-paper-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-4 mb-4 mb-md-4 mb-sm-4 mb-lg-0">
                                <a href="/#" className="navbar-brand mb-2">
                                    <img src="assets/img/adme-logo-name.png" alt="logo" className="img-fluid" />
                                </a>
                                <br />
                                <p>{this.props.dictionary.footer.corp.subtitle}</p>
                                <div className="list-inline social-list-default background-color social-hover-2 mt-2">
                                    <li className="list-inline-item"><a className="instagram" href="https://www.instagram.com/admecorp/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a className="facebook" href="https://www.facebook.com/Adme.And.Payme" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                                    <li className="list-inline-item"><a className="linkedin" href="https://www.linkedin.com/company/advertiseme" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" target="_blank" rel="noopener noreferrer"></i></a></li>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-8">
                                <div className="row mt-0">
                                    {/* <div className="col-sm-6 col-md-3 col-lg-3 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
                            <h6 className="text-uppercase">Resources</h6>
                            <ul>
                                <li>
                                    <a href="/#">Help</a>
                                </li>
                                <li>
                                    <a href="/#">Events</a>
                                </li>
                                <li>
                                    <a href="/#">Live sessions</a>
                                </li>
                                <li>
                                    <a href="/#">Open source</a>
                                </li>
                                <li>
                                    <a href="/#">Documentation</a>
                                </li>
                            </ul>
                        </div> */}
                                    <div className="col-sm-6 col-md-3 col-lg-3 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
                                        <h6 className="text-uppercase">{this.props.dictionary.footer.products.title}</h6>
                                        <ul>
                                            <li>
                                                <a href="#hero" className="page-scroll">{this.props.dictionary.footer.products.p1}</a>
                                            </li>
                                            <li>
                                                <a href={`${process.env.PUBLIC_URL}/#comingSoonBrands`}>{this.props.dictionary.footer.products.p2}</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6 col-md-3 col-lg-3 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
                                        <h6 className="text-uppercase">{this.props.dictionary.footer.company.title}</h6>
                                        <ul>
                                            <li>
                                                <a href="#about" className="page-scroll">{this.props.dictionary.footer.company.section1}</a>
                                            </li>
                                            <li>
                                                <a href="#testimonials" className="page-scroll">{this.props.dictionary.footer.company.section2}</a>
                                            </li>
                                            <li>
                                                <a href={`${process.env.PUBLIC_URL}/#comingSoonInvestors`}>{this.props.dictionary.footer.company.section3}</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6 col-md-3 col-lg-3">
                                        <h6 className="text-uppercase">{this.props.dictionary.footer.support.title}</h6>
                                        <ul>
                                            <li>
                                                <a href="#faq" className="page-scroll">{this.props.dictionary.footer.support.s1}</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="footer-bottom py-3 gray-light-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-7">
                                <div className="copyright-wrap small-text">
                                    <p className="mb-0">&copy; {this.props.dictionary.footer.rights}</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="terms-policy-wrap text-lg-right text-md-right text-left">
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><a className="small-text" href="/#">Terms</a></li>
                                        <li className="list-inline-item"><a className="small-text" href="/#">Security</a></li>
                                        <li className="list-inline-item"><a className="small-text" href="/#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(state => ({
    dictionary: state.i18n.dictionary
}))(Footer);
