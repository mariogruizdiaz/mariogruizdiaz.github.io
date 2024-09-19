import React from "react";
import { connect } from "react-redux";
import { Button, CardActions } from '@mui/material';
import { withRouter } from "react-router-dom";

class FooterDownload extends React.Component {
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

    handleAddBrand(event) {
      this.props.history.push('/brands');
    }

    handleSubmit(event) {
        //event.preventDefault();

        window.open(`https://api.whatsapp.com/send?phone=5491135795588&text=Quiero%20sumar%20mi%20negocio%20a%20Adme.%20%C2%BFMe%20podr%C3%ADan%20asistir%3F`, "_blank");
        // get action
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
                                  <CardActions>
                                    <Button
                                      variant="contained"
                                      color="info"
                                      fullWidth
                                      type="button"
                                      onClick={() => this.handleAddBrand()}
                                    >
                                      {this.props.dictionary.header.menu.registerMyBusiness}
                                    </Button>
                                    <Button
                                      variant="contained"
                                      color="secondary"
                                      fullWidth
                                      type="button"
                                      onClick={() => this.handleSubmit()}
                                    >
                                      Contactar un agente
                                    </Button>
                                  </CardActions>
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
                            </div>
                            <div className="col-md-12 col-lg-8">
                                <div className="row mt-0">
                                    <div className="col-sm-6 col-md-3 col-lg-3 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
                                        <h6 className="text-uppercase">{this.props.dictionary.footer.products.title2}</h6>
                                        <ul>
                                            <li>
                                                <a href={`${process.env.PUBLIC_URL}/#/`} target="_blank" rel="noopener noreferrer" >{this.props.dictionary.footer.products.p3}</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6 col-md-3 col-lg-3">
                                        <h6 className="text-uppercase">{this.props.dictionary.footer.products.p4}</h6>
                                        <div className="list-inline social-list-default background-color social-hover-2 mt-2">
                                            <li className="list-inline-item"><a className="instagram" href="https://www.instagram.com/admecorp/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a className="facebook" href="https://www.facebook.com/Adme.And.Payme" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a className="linkedin" href="https://www.linkedin.com/company/advertiseme" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" target="_blank" rel="noopener noreferrer"></i></a></li>
                                        </div>
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
}))(withRouter(FooterDownload));
