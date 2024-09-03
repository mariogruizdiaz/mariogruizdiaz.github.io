import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { genericAction } from "../../state/actions";
import { actionTypes } from "../../state/actionTypes";
import { commonStatuses } from "../../state/models/common";
import { Button, TextField, IconButton, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { SnackbarContext } from '../Toast/SnackbarContext';
import MessageBox from '../message/messageBox';
import { translatorFromApi } from '../../state/helpers/translator';
import { validateLoginFields, validateField } from '../../state/helpers/validator';

class LoginComponent extends React.Component {
  static contextType = SnackbarContext; 
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      disableBtn: false,
      btnText: "Sign In",
      showPassword: false,
      errors: {
        emailOk: true,
        passwordOk: true,
        hasErrors: false,
      },
      fromAudit: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleShowPassword = this.toggleShowPassword.bind(this);
  }

  componentWillUnmount () {
    this.props.genericAction(actionTypes.SIGNUP_CLEAR_STATUS);
  }

  changeBtnText = btnText => {
    this.setState({ btnText });
  };

  async handleFormValueChange(inputName, event) {
    let stateValue = {};
    stateValue[inputName] = event.target.value;
    this.setState(stateValue);
    this.setState(await validateField('login', inputName, this.state.errors, stateValue[inputName]));
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.security !== nextProps.security) {
      this.props.security.authenticated && this.getQueryValue();
      switch (nextProps.security.authenticationStatus) {
        case commonStatuses.loading:
          break;
        case commonStatuses.loaded:
          this.context.showSnackbar(this.props.dictionary.login.loginSuccessful, "success");
          break;
          case commonStatuses.notAvailable:
          this.context.showSnackbar(this.props.dictionary.login.notAvailable, "error");
          break;
        case commonStatuses.failed:
          this.context.showSnackbar(this.props.dictionary.login.loginError, "error");
          break;
      
        default:
          break;
      }
    }
    return true;
  }

  async handleSubmit(event) {
    event.preventDefault();

    this.setState(await validateLoginFields(this.state));

    if (!this.state.errors.hasErrors) {
      this.props.genericAction(actionTypes.LOGIN, { 
        email: this.state.email, 
        password: this.state.password 
      });
    } else {
      this.changeBtnText(this.props.dictionary.login.login);
    }
  }

  toggleShowPassword() {
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  }

  componentDidMount() {
    const searchParams = new URLSearchParams(this.props.location.search);
    const from = searchParams.get('from');
    from === 'audit' && this.setState({fromAudit : true});
  }

  getQueryValue() {
    const searchParams = new URLSearchParams(this.props.location.search);
    const from = searchParams.get('from');
    const id = searchParams.get('id');

    switch (from) {
      case 'signUp':
        this.props.history.push(`/${from}`);
        break;
      case 'audit':
        this.props.history.push(`/${from}/${id}`);
        break;
      default:
        this.props.history.push(`/`);
        break;
    }
  }

  render() {
    if (this.props.security.authenticated) {
      this.getQueryValue();
    }
    return ( 
      <React.Fragment>
        <section className="page-header-section ptb-100 bg-image full-height" image-overlay="8">
          <div className="background-image-wraper" style={{ backgroundImage: "url(assets/img/cta-bg.jpg)", opacity: 1 }}></div>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-md-8 col-lg-6">
                <div className="login-signup-wrap p-5 gray-light-bg rounded shadow">
                  <div className="login-signup-header text-center">
                    <img width={50} src="assets/img/admeLogoLogin.png" className="img-fluid mb-3" alt="Adme" />
                    <h4 className="mb-5">{this.props.dictionary.login.title}</h4>
                  </div>
                 { this.state.fromAudit && 
                 <div className={`message-box d-block alert-info alert`}>
                    {"Debe hacer login antes de poder auditar este anuncio"}
                  </div>}
                  <MessageBox
                        authenticationStatus={this.props.security.authenticationStatus}
                        authenticationStatusDescription={
                          !!this.props.security.authenticationStatusDescription ? 
                          this.props.dictionary.login[translatorFromApi[this.props.security.authenticationStatusDescription]] 
                          :
                          this.props.dictionary.login[translatorFromApi[this.props.security.authenticationStatus]] }
                      />
                  <form className="login-signup-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <TextField
                        label={this.props.dictionary.login.email}
                        type="email"
                        value={this.state.email}
                        error={!this.state.errors.emailOk}
                        onChange={e => this.handleFormValueChange("email", e)}
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <EmailIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <TextField
                        label={this.props.dictionary.login.password}
                        type={this.state.showPassword ? "text" : "password"}
                        value={this.state.password}
                        onChange={e => this.handleFormValueChange("password", e)}
                        error={!this.state.errors.passwordOk}
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LockOpenIcon />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={this.toggleShowPassword}>
                                {this.state.showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      type="submit"
                      disabled={this.props.security.authenticationStatus === commonStatuses.loading}
                      onClick={() => { this.changeBtnText(this.props.dictionary.login.signing); }}
                    >
                      {this.props.security.authenticationStatus === commonStatuses.loading ? this.props.dictionary.login.signing : this.props.dictionary.login.login}
                    </Button>
                  </form>
                  <p className="text-center mb-0">{this.props.dictionary.login.accountYesOrNot} <a href="/#/signup">{this.props.dictionary.login.register}</a></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginComponent));
