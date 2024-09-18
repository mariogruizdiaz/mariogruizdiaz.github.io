import React from "react";
import { connect } from "react-redux";
import { Collapse, Button, TextField, InputAdornment , Card, CardContent, CardActions } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { genericAction } from "../../state/actions";
import { actionTypes } from "../../state/actionTypes";
import { SnackbarContext } from '../Toast/SnackbarContext';
import Person2Icon from '@mui/icons-material/Person2';
import { commonStatuses } from "../../state/models/common";
import { validateEditUserFields, validateField } from '../../state/helpers/validator';
import * as globalModels from "influencers-models";

class EditProfile extends React.Component {
  static contextType = SnackbarContext;
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      firstName: "",
      lastName: "",
      email: "",
      errors: {
        firstNameOk: true,
        lastNameOk: true,
        hasErrors: false,
      },
      showPassword: false,
      showConfirmPassword: false,
    };

    this.handleSubmitUser = this.handleSubmitUser.bind(this);
    this.toggleShowPassword = this.toggleShowPassword.bind(this);
    this.toggleShowConfirmPassword = this.toggleShowConfirmPassword.bind(this);

    if (!this.props.security.authenticated) this.props.history.push('/');
      
  }

  componentDidMount() {
    this.setState({
        firstName: this.props.security.firstName || "",
        lastName: this.props.security.lastName || "",
        email: this.props.security.email || "",
    });
  }

  toggleEditMode = () => {
    this.setState(prevState => ({ isEditing: !prevState.isEditing }));
  }

  togglePortal = () => {
    this.props.history.push('/brands');
  }

  toggleEditCompany = () => {
    this.props.history.push('/editCompany');
  }

  toggleAddCompany = () => {
    this.props.history.push('/SignUp');
  }

  async handleFormValueChange(inputName, event) {
    let stateValue = {};
    stateValue[inputName] = event.target.value;
    this.setState(stateValue);
    this.setState(await validateField('editProfile', inputName, this.state.errors, stateValue[inputName]));
  }

  async handleSubmitUser(event) {
    event.preventDefault();
    this.setState(await validateEditUserFields(this.state));
    if (!this.state.errors.hasErrors) {
      // Editar usuario
      this.setState(prevState => ({ isEditing: !prevState.isEditing }));
      this.props.genericAction(actionTypes.UPDATE_USER, {
        [globalModels.personFields._id]: this.props.security._id,
        [globalModels.personFields.firstName]: this.state.firstName,
        [globalModels.personFields.lastName]: this.state.lastName,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.security !== this.props.security) {
      if (!this.props.security.authenticated) {
        this.props.history.push('/');
      }
    }
  }

  toggleShowPassword() {
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  }

  toggleShowConfirmPassword() {
    this.setState(prevState => ({ showConfirmPassword: !prevState.showConfirmPassword }));
  }

  handleCancel = () => {
    this.setState({ isEditing: false });
    this.setState({
      firstName: this.props.security.firstName || "",
      lastName: this.props.security.lastName,
       email: this.props.security.email
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.security.authenticationStatus !== nextProps.security.authenticationStatus) {
      switch (nextProps.security.authenticationStatus) {
        case commonStatuses.saving:
          this.context.showSnackbar(this.props.dictionary.editProfile.saving, "info");
          break;
        case commonStatuses.saved:
          this.context.showSnackbar(this.props.dictionary.editProfile.saved, "success");
          break;
        case commonStatuses.failed:
          this.context.showSnackbar(this.props.dictionary.editProfile.editError, "error");
          this.setState({
              firstName: this.props.security.firstName || "",
              lastName: this.props.security.lastName,
              email: this.props.security.email
          });
          break;
      
        default:
          break;
      }
    }

    return true;
  }

  getLabel () {
    const searchParams = new URLSearchParams(this.props.location.search);
    const from = searchParams.get('from');

    return from ? this.props.dictionary.editProfile.goBackMyPortal : this.props.dictionary.editProfile.myPortal;
  }

  render() {
    const { isEditing } = this.state;
    return (
      <React.Fragment>
        <div className="main">
          <section className="page-header-section ptb-100 bg-image full-height" image-overlay="8">
            <div className="background-image-wraper" style={{ backgroundImage: "url(assets/img/cta-bg.jpg)", opacity: 1 }}></div>
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                  <Card className="login-signup-wrap p-5 gray-light-bg rounded shadow">
                    <CardContent>
                      <div className="login-signup-header text-center">
                        <img width={50} src="assets/img/admeLogoLogin.png" className="img-fluid mb-3" alt="Adme" />
                        <Collapse in={isEditing} timeout={500}>
                          <h4 className="mb-5">{this.props.dictionary.editProfile.editTitle}</h4>
                        </Collapse>
                        <Collapse in={!isEditing} timeout={500}>
                          <h4 className="mb-5">{this.props.dictionary.editProfile.title}</h4>
                        </Collapse>
                      </div>
                      <div>
                      <Collapse in={isEditing} timeout={500}>
                        <form className="login-signup-form" onSubmit={this.handleSubmitUser}>
                          <div className="form-group">
                            <TextField
                              label={this.props.dictionary.editProfile.firstName}
                              value={this.state.firstName}
                              onChange={e => this.handleFormValueChange("firstName", e)}
                              error={!this.state.errors.firstNameOk}
                              fullWidth
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <Person2Icon />
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </div>
                          <div className="form-group">
                            <TextField
                              label={this.props.dictionary.editProfile.lastName}
                              value={this.state.lastName}
                              onChange={e => this.handleFormValueChange("lastName", e)}
                              error={!this.state.errors.lastNameOk}
                              fullWidth
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <Person2Icon />
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </div>
                          <div className="form-group">
                            <TextField
                              label={this.props.dictionary.editProfile.email}
                              type="email"
                              value={this.state.email}
                              onChange={e => this.handleFormValueChange("email", e)}
                              fullWidth
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <EmailIcon />
                                  </InputAdornment>
                                ),
                              }}
                              disabled
                            />
                          </div>
                          <CardActions>
                            <Button
                              variant="contained"
                              color="primary"
                              fullWidth
                              type="submit"
                            >
                              {this.props.dictionary.editProfile.save}
                            </Button>
                            <Button
                              variant="contained"
                              color="error"
                              fullWidth
                              type="button"
                              onClick={() => this.handleCancel()}
                            >
                              {this.props.dictionary.editProfile.cancel}
                            </Button>
                          </CardActions>
                        </form>
                      </Collapse>
                        <Collapse in={!isEditing} timeout={500}>
                          <ul className="contact-info-list">
                                <li className="d-flex pb-3">
                                    <div className="contact-icon mr-3">
                                        <Person2Icon />
                                    </div>
                                    <div className="contact-text">
                                        <h5 className="mb-1">{this.props.dictionary.editProfile.firstName}</h5>
                                        <p>
                                        {this.state.firstName}
                                        </p>
                                    </div>
                                </li>
                                <li className="d-flex pb-3">
                                    <div className="contact-icon mr-3">
                                        <Person2Icon />
                                    </div>
                                    <div className="contact-text">
                                        <h5 className="mb-1">{this.props.dictionary.editProfile.lastName}</h5>
                                        <p>
                                        {this.state.lastName}
                                        </p>
                                    </div>
                                </li>
                                <li className="d-flex pb-3">
                                    <div className="contact-icon mr-3">
                                        <EmailIcon />
                                    </div>
                                    <div className="contact-text">
                                        <h5 className="mb-1">{this.props.dictionary.editProfile.email}</h5>
                                        <p>
                                        {this.state.email}
                                        </p>
                                    </div>
                                </li>
                          </ul>
                          <CardActions>
                           <Button
                              variant="contained"
                              color="primary"
                              fullWidth
                              onClick={this.toggleEditMode}
                            >
                              {this.props.dictionary.editProfile.editInformation}
                            </Button>
                          </CardActions>
                          <CardActions>
                           {!this.props.security.company.id ?
                            <Button
                              variant="contained"
                              color="secondary"
                              fullWidth
                              onClick={this.toggleAddCompany}
                            >
                              {this.props.dictionary.editProfile.addCompany}
                            </Button>
                           :
                            <Button
                              variant="contained"
                              color="secondary"
                              fullWidth
                              onClick={this.toggleEditCompany}
                            >
                              {this.props.dictionary.editProfile.goToCompanyInformation}
                            </Button>}
                            
                          </CardActions>
                          <CardActions>
                          <Button
                              variant="contained"
                              color="inherit"
                              fullWidth
                              onClick={this.togglePortal}
                            >
                              {this.getLabel()}
                            </Button>
                            </CardActions>
                        </Collapse>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>ß
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    security: state.security,
    dictionary: state.i18n.dictionary,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    genericAction: bindActionCreators(genericAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditProfile));
