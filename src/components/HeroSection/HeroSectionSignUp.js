import React from "react";
import { connect } from "react-redux";
import { Collapse, Button, TextField, Checkbox, FormControlLabel, IconButton, InputAdornment,  Avatar } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { genericAction } from "../../state/actions";
import { actionTypes } from "../../state/actionTypes";
import * as globalModels from "influencers-models";
import 'firebase/compat/storage';
import { commonStatuses } from "../../state/models/common";
import { SnackbarContext } from '../Toast/SnackbarContext';
import MessageBox from '../message/messageBox';
import { translatorFromApi } from '../../state/helpers/translator';
import { validateSignUpFields, validateField } from '../../state/helpers/validator';
import { pink } from '@mui/material/colors';
import ImageIcon from '@mui/icons-material/Image';
import ImageLoader from "../Loaders/ImageLoader";
import { uploadImageToFirebase, createThumbnail, uploadThumbnailToFirebase } from '../../state/helpers/firebase';


class HeroSection extends React.Component {
  static contextType = SnackbarContext; 
  constructor(props) {
    super(props);
    this.state = {
      hero: {},
      photo: "",
      thumbnail: "",
      uploadProgress: 0,
      isUploading: false,
      cellPhone: "",
      companyName: "",
      email: "",
      password: "",
      confirmPassword: "",
      isAgreed: false,
      disableBtn: false,
      ip: '',
      appTypes: "PublicPortal",
      location: {
        latitude: null,
        longitude: null
      },
      termsAndConditionsVersion: '',
      handleSubmit: false,
      errors: {
        cellPhoneOk: true,
        companyNameOk: true,
        emailOk: true,
        passwordOk: true,
        confirmPasswordOk: true,
        isAgreedOK: true,
        hasErrors: false,
      },
      photoError: "",
      showPassword: false,
      showConfirmPassword: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormPhotoChange = this.handleFormPhotoChange.bind(this);
    this.handleEditPhoto = this.handleEditPhoto.bind(this);
    this.handleDeletePhoto = this.handleDeletePhoto.bind(this);
    this.toggleShowPassword = this.toggleShowPassword.bind(this);
    this.toggleShowConfirmPassword = this.toggleShowConfirmPassword.bind(this);

    this.props.genericAction(actionTypes.SIGNUP_CLEAR_STATUS);
  }

  async handleFormValueChange(inputName, event) {
    let stateValue = {};
    stateValue[inputName] = event.target.type === "checkbox" ? event.target.checked : event.target.value;

    this.setState(stateValue);
    if (inputName === 'confirmPassword') this.setState(await validateField('signUp', inputName, this.state.errors, stateValue[inputName], this.state.password))
    else this.setState(await validateField('signUp', inputName, this.state.errors, stateValue[inputName]))
  }

  handleFormPhotoChange = (e) => {
    const file = e.target.files[0];

    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      this.setState({ isUploading: true, photoError: null });

      uploadImageToFirebase(
        file,
        (progress) => this.setState({ uploadProgress: progress }),
        (error) => {
          this.setState({ isUploading: false });
        },
        (downloadURL, file, uniqueId) => {
          this.setState({ photo: downloadURL, uploadProgress: 50 });
          createThumbnail(file, uniqueId, (uri, uniqueId) => {
            uploadThumbnailToFirebase(
              uri,
              uniqueId,
              (progress) => this.setState({ uploadProgress: progress }),
              (error) => {
                this.setState({ isUploading: false });
              },
              (thumbnailURL) => {
                this.setState({ thumbnail: thumbnailURL, uploadProgress: 0, isUploading: false });
              }
            );
          });
        }
      );
      } else {
        this.setState({ photo: "", photoError: 'photoError' });
      }

  };

  handleEditPhoto() {
    document.getElementById('fileUpload').click();
  }

  handleDeletePhoto() {
    this.setState({ photo: "" });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState(await validateSignUpFields(!this.props.security.authenticated, this.state));
    this.setState({ handleSubmit: true });
    if (!this.state.errors.hasErrors) {
      if (!this.props.security.authenticated) await this.createUser()
      else await this.createCompany();
    }
  }

  createUser = async () => {
    await this.props.genericAction(actionTypes.SIGNUP, {
      [globalModels.personFields.email]: this.state.email,
      [globalModels.personFields.password]: this.state.password,
    });
  }

  createCompany = async () => {
    await this.props.genericAction(actionTypes.CREATE_COMPANY, {
          [globalModels.companyFields._id]: this.props.security._id,
          [globalModels.companyFields.logo]: this.state.photo,
          [globalModels.companyFields.thumbnail]: this.state.thumbnail,
          [globalModels.person_companyFields.termsAndConditions]: {
            [globalModels.person_companyFields.appTypes]: this.props.termsAndConditions.appTypes,
            [globalModels.person_companyFields.version]: this.props.termsAndConditions.version,
            [globalModels.person_companyFields.ip]: this.state.ip,
            [globalModels.person_companyFields.location]: this.state.location,
            [globalModels.person_companyFields.language]: this.props.termsAndConditions.language
          },
          [globalModels.companyFields.name]: this.state.companyName,
          [globalModels.companyFields.cellPhone]: this.state.cellPhone
        });
  }

  fetchIp = async () => {
    try {
      const response = await axios.get('https://api.ipify.org?format=json');
      this.setState({ ip: response.data.ip });
    } catch (error) {
      console.error('Error fetching IP address:', error);
    }
  };

  fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          this.setState({ location: { latitude: latitude, longitude: longitude } });
        },
        (error) => {
          console.error('Error fetching location:', error);
        }
      );
    }
  };

  componentDidMount() {
    if (this.props.security.authenticated) {
      this.fetchIp();
      this.fetchLocation();
      this.props.genericAction(actionTypes.FETCH_TERMS_AND_CONDITIONS, {
        "language": this.props.language
      });

      if (!!this.props.security.company.id) this.getQueryValue() //this.props.history.push(`/`);
    }
  }

  componentWillUnmount () {
    this.props.genericAction(actionTypes.SIGNUP_CLEAR_STATUS);
  }

  toggleShowPassword() {
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  }

  toggleShowConfirmPassword() {
    this.setState(prevState => ({ showConfirmPassword: !prevState.showConfirmPassword }));
  }

  clearTextInputs() {
    this.setState({email: "", password: "", confirmPassword: "", 
      errors: {
        ...this.state.errors,
        emailOk: true,
        passwordOk: true,
        confirmPasswordOk: true,
        hasErrors: false,  
      } });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.security !== nextProps.security) {
      if (!!nextProps.security.company.id) this.getQueryValue();
    }

    if(this.props.language !== nextProps.language) {
      this.props.genericAction(actionTypes.FETCH_TERMS_AND_CONDITIONS, {
            "language": nextProps.language
          });
    }

    if (this.props.security.authenticationStatus !== nextProps.security.authenticationStatus) {
      switch (nextProps.security.authenticationStatus) {
        case commonStatuses.loading:
          break;
        case commonStatuses.loaded:
          this.context.showSnackbar(this.props.dictionary.signUp.signUpSuccessful, "success");
          this.clearTextInputs();
          this.fetchIp();
          this.fetchLocation();
          this.props.genericAction(actionTypes.FETCH_TERMS_AND_CONDITIONS, {
            "language": this.props.language
          });
          break;
        case commonStatuses.failed:
          this.context.showSnackbar(this.props.dictionary.signUp.signUpError, "error");
          break;
      
        default:
          break;
      }
    }

    if (this.props.security.company.status !== nextProps.security.company.status) {
      switch (nextProps.security.company.status) {
        case commonStatuses.loading:
          break;
        case commonStatuses.saved:
          this.context.showSnackbar(this.props.dictionary.signUp.createCompanySuccessful, "success");
          break;
        case commonStatuses.notAvailable:
          this.context.showSnackbar(this.props.dictionary.signUp.createCompanyError, "error");
          break;
        case commonStatuses.failed:
          this.context.showSnackbar(this.props.dictionary.signUp.createCompanyError, "error");
          break;
      
        default:
          break;
      }
    }

    return true;
  }

  getParams() {
    const searchParams = new URLSearchParams(this.props.location.search);
    const from = searchParams.get('from');
    return from;
  }

  getQueryValue() {
    const searchParams = new URLSearchParams(this.props.location.search);
    const from = searchParams.get('from');

    switch (from) {
      case 'brands': 
        this.props.history.push(`/${from}`);
        break;
      default:
        this.props.history.push(`/`);
        break;
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="main">
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
                      <img width={50} src="assets/img/admeLogoLogin.png" className="img-fluid" alt="Adme" />
                      <h4 className="mb-5">{this.props.security.authenticated ? this.props.dictionary.signUp.addYourCompany : this.props.dictionary.signUp.createYourAccount }</h4>
                      {
                        this.props.security.authenticated &&
                          (this.state.photo === "" ?
                          <div style={{display: "inline-block", marginBottom: 20}} >
                            <Avatar sx={{ bgcolor: pink[500] }}>
                              <ImageIcon />
                            </Avatar>
                          </div>
                          :
                          <ImageLoader source={this.state.photo} alt="An image" maxWidth={100} secondaryColor="rgba(255, 255, 255, 1)" color="rgba(150, 41, 230, 1)" />
                          )
                        }
                    </div>
                      <form className="login-signup-form" onSubmit={this.handleSubmit}>
                        <Collapse in={!this.props.security.authenticated} timeout={500}>
                          <MessageBox
                            authenticationStatus={this.props.security.authenticationStatus}
                            authenticationStatusDescription={
                              !!this.props.security.authenticationStatusDescription ? 
                              this.props.dictionary.signUp[translatorFromApi[this.props.security.authenticationStatusDescription]] 
                              :
                              this.props.dictionary.signUp[translatorFromApi[this.props.security.authenticationStatus]] }
                          />
                          <div>
                            <div className="form-group">
                              <TextField
                                label={this.props.dictionary.signUp.email}
                                type="email"
                                value={this.state.email}
                                onChange={e => this.handleFormValueChange("email", e)}
                                error={!this.state.errors.emailOk}
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
                                label={this.props.dictionary.signUp.password}
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
                              <small className="small-text">
                                {this.props.dictionary.signUp.specificationPassword}
                              </small>
                            </div>
                            <div className="form-group">
                              <TextField
                                label={this.props.dictionary.signUp.confirmPassword}
                                type={this.state.showConfirmPassword ? "text" : "password"}
                                value={this.state.confirmPassword}
                                onChange={e => this.handleFormValueChange("confirmPassword", e)}
                                error={!this.state.errors.confirmPasswordOk}
                                fullWidth
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <LockOpenIcon />
                                    </InputAdornment>
                                  ),
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton onClick={this.toggleShowConfirmPassword}>
                                        {this.state.showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
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
                            >
                              {this.props.security.authenticationStatus === commonStatuses.loading ? 
                              this.props.dictionary.signUp.loading : this.props.dictionary.signUp.signUp }
                            </Button>
                          </div>
                          <p className="text-center mb-0">{this.props.dictionary.signUp.alreadyHaveAccount}<a href={!!this.getParams() ? "/#/login?from=signUp&from2=" + this.getParams() : "/#/login?from=signUp"}>{this.props.dictionary.login.login}</a></p>
                        </Collapse>
                        <Collapse in={this.props.security.authenticated} timeout={500}>
                           <MessageBox
                              authenticationStatus={this.props.security.company.status}
                              authenticationStatusDescription={
                                !!this.props.security.company.statusDescription ? 
                                this.props.dictionary.signUp[translatorFromApi[this.props.security.company.statusDescription]] 
                                :
                                this.props.dictionary.signUp[translatorFromApi[this.props.security.company.status]] }
                            />
                          <div>
                            <div className="form-group">
                              <TextField
                                label={this.props.dictionary.signUp.companyName}
                                value={this.state.companyName}
                                onChange={e => this.handleFormValueChange("companyName", e)}
                                error={!this.state.errors.companyNameOk}
                                fullWidth
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <StoreIcon />
                                    </InputAdornment>
                                  ),
                                }}
                                inputProps={{ maxLength: 100 }}
                              />
                            </div>
                            <div className="form-group">
                              <TextField
                                label={this.props.dictionary.signUp.cellPhone}
                                value={this.state.cellPhone}
                                onChange={e => this.handleFormValueChange("cellPhone", e)}
                                error={!this.state.errors.cellPhoneOk}
                                fullWidth
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <WhatsAppIcon />
                                    </InputAdornment>
                                  ),
                                }}
                                inputProps={{ maxLength: 100 }}
                              />
                            </div>
                            <div className="form-group">
                              <input type="file" id="fileUpload" style={{ display: 'none' }} onChange={e => this.handleFormPhotoChange(e)} />
                              {!this.state.photo && (
                                <Button variant="outlined" onClick={() => document.getElementById('fileUpload').click()} fullWidth>
                                  {this.props.dictionary.signUp.uploadLogo}
                                </Button>
                              )}
                              <Collapse in={!!this.state.photoError} timeout={1000}>
                                <MessageBox
                                  authenticationStatus={commonStatuses.failed}
                                  authenticationStatusDescription={this.props.dictionary.signUp.photoError}
                                />
                              </Collapse>
                              {this.state.photo && (
                                <div className="d-flex justify-content-around">
                                  <Button variant="outlined" onClick={this.handleEditPhoto} fullWidth>{this.props.dictionary.signUp.editPhoto}</Button>
                                  <Button variant="outlined" onClick={this.handleDeletePhoto} fullWidth>{this.props.dictionary.signUp.deletePhoto}</Button>
                                </div>
                              )}
                            </div>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.isAgreed}
                                  onChange={e => this.handleFormValueChange("isAgreed", e)}
                                  name="isAgreed"
                                  color="primary"
                                />
                              }
                              label={<span>{this.props.dictionary.signUp.iAgree}<a href={this.props.termsAndConditions.url} target="_blank" rel="noopener noreferrer">{this.props.dictionary.signUp.termsAndConditions}</a></span>}
                            />
                            <Collapse in={!this.state.errors.isAgreedOK} timeout={1000}>
                              <MessageBox
                                authenticationStatus={commonStatuses.failed}
                                authenticationStatusDescription={this.props.dictionary.signUp.shouldAcceptTAndC}
                              />
                            </Collapse>
                            {
                              this.state.isUploading ? 
                              <Button
                              variant="contained"
                              color="primary"
                              fullWidth
                              type="submit"
                              disabled={this.state.disableBtn || this.state.isUploading}
                              >
                                  {`${this.props.dictionary.signUp.uploading}(${Math.round(this.state.uploadProgress)}%)`}
                              </Button>
                            :
                            <Button
                              variant="contained"
                              color="primary"
                              fullWidth
                              type="submit"
                              disabled={this.props.security.company.status === commonStatuses.loading || this.state.isUploading}
                            >
                              {this.props.dictionary.signUp.createCompany}
                            </Button>
                            }
                          </div>
                        </Collapse>
                      </form>
                    
                  </div>
                </div>
              </div>
            </div>
            
          </section>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    dictionary: state.i18n.dictionary,
    language: state.i18n.language,
    security: state.security,
    termsAndConditions: state.termsAndConditions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    genericAction: bindActionCreators(genericAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeroSection));


