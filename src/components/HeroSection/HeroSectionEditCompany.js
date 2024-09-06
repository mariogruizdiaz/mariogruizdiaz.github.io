import React from "react";
import { connect } from "react-redux";
import { Collapse, Button, TextField, InputAdornment , Card, CardContent, CardActions, Avatar } from '@mui/material';
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { genericAction } from "../../state/actions";
import { actionTypes } from "../../state/actionTypes";
import { SnackbarContext } from '../Toast/SnackbarContext';
import MessageBox from '../message/messageBox';
import Person2Icon from '@mui/icons-material/Person2';
import { commonStatuses } from "../../state/models/common";
import { validateEditCompanyFields, validateField } from '../../state/helpers/validator';
import * as globalModels from "influencers-models";
import StoreIcon from '@mui/icons-material/Store';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ImageIcon from '@mui/icons-material/Image';
import ImageLoader from "../Loaders/ImageLoader";
import 'firebase/compat/storage';
import { pink } from '@mui/material/colors';
import { uploadImageToFirebase, createThumbnail, uploadThumbnailToFirebase } from '../../state/helpers/firebase';

class EditCompany extends React.Component {
  static contextType = SnackbarContext;
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      photo: "",
      thumbnail: "",
      uploadProgress: 0,
      isUploading: false,
      photoError: null,
      cellPhone: "",
      companyName: "",
      socialMedia : {
        webSite : "",
        instagram : "",
        facebook : "",
      },
      errors: {
        cellPhoneOk: true,
        companyNameOk: true,
        hasErrors: false,
      },
    };

    this.handleSubmitCompany = this.handleSubmitCompany.bind(this);
    this.handleFormPhotoChange = this.handleFormPhotoChange.bind(this);
    this.handleEditPhoto = this.handleEditPhoto.bind(this);
    this.handleDeletePhoto = this.handleDeletePhoto.bind(this);

    if (!this.props.security.authenticated) this.props.history.push('/');
      
  }

  componentDidMount() {
    this.setState({
        cellPhone: this.props.security.company.cellPhone || "",
        companyName: this.props.security.company.name || "",
        photo: this.props.security.company.logo || "",
        thumbnail: this.props.security.company.thumbnail || "",
        socialMedia : {
          webSite : this.props.security.company.socialMedia?.webSite || "",
          instagram : this.props.security.company.socialMedia?.instagram || "",
          facebook : this.props.security.company.socialMedia?.facebook || "",
        },
    });
  }

  toggleEditMode = () => {
    this.setState(prevState => ({ isEditing: !prevState.isEditing }));
  }

  async handleFormValueChange(inputName, event) {
    let stateValue = {};
    stateValue[inputName] = event.target.value;
    this.setState(stateValue);
    this.setState(await validateField('editCompany', inputName, this.state.errors, stateValue[inputName]));
  }

  async handleSubmitCompany(event) {
    event.preventDefault();
    this.setState(await validateEditCompanyFields(this.state));
    if (!this.state.errors.hasErrors) {
      // Editar usuario
      this.setState(prevState => ({ isEditing: !prevState.isEditing }));
      this.props.genericAction(actionTypes.UPDATE_COMPANY, {
        [globalModels.companyFields._id]: this.props.security.company.id,
        [globalModels.companyFields.logo]: this.state.photo,
        [globalModels.companyFields.thumbnail]: this.state.thumbnail,
        [globalModels.companyFields.cellPhone]: this.state.cellPhone,
        [globalModels.companyFields.name]: this.state.companyName,
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

  handleCancel = () => {
    this.setState({
      isEditing: false,
      cellPhone: this.props.security.company.cellPhone || "",
      companyName: this.props.security.company.name || "",
      photo: this.props.security.company.logo || "",
      thumbnail: this.props.security.company.thumbnail || "",
      socialMedia : {
        webSite : this.props.security.company.socialMedia?.webSite || "",
        instagram : this.props.security.company.socialMedia?.instagram || "",
        facebook : this.props.security.company.socialMedia?.facebook || "",
      },
      photoError: null,
    });
  }

  toggleEditUser = () => {
    this.props.history.push('/editProfile');
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.security.company.status !== nextProps.security.company.status) {
      switch (nextProps.security.company.status) {
        case commonStatuses.saving:
          this.context.showSnackbar(this.props.dictionary.editCompany.saving, "info");
          break;
        case commonStatuses.saved:
          this.context.showSnackbar(this.props.dictionary.editCompany.saved, "success");
          break;
        case commonStatuses.failed:
          this.context.showSnackbar(this.props.dictionary.editCompany.editError, "error");
          this.setState({
              cellPhone: this.props.security.company.cellPhone || "",
              companyName: this.props.security.company.name || "",
              photo: this.props.security.company.logo || "",
              thumbnail: this.props.security.company.thumbnail || "",
              socialMedia : {
                webSite : this.props.security.company.socialMedia.webSite || "",
                instagram : this.props.security.company.socialMedia.instagram || "",
                facebook : this.props.security.company.socialMedia.facebook || "",
              },
          });
          break;
      
        default:
          break;
      }
    }

    return true;
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
    this.setState({ photo: this.props.security.company.logo, photoError: 'photoError' });
  }

  };

  handleEditPhoto() {
    document.getElementById('fileUpload').click();
  }

  handleDeletePhoto() {
    this.setState({ photo: "", thumbnail: "" });
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
                          <h4 className="mb-3">{this.props.dictionary.editCompany.editTitle}</h4>
                        </Collapse>
                        <Collapse in={!isEditing} timeout={500}>
                          <h4 className="mb-3">{this.props.dictionary.editCompany.title}</h4>
                        </Collapse>
                        {
                          this.state.photo === "" ?
                          <div style={{display: "inline-block", marginBottom: 20}} >
                            <Avatar sx={{ bgcolor: pink[500] }}>
                              <ImageIcon />
                            </Avatar>
                          </div>
                          :
                          <ImageLoader source={this.state.photo} alt="An image" maxWidth={100} secondaryColor="rgba(255, 255, 255, 1)" color="rgba(150, 41, 230, 1)" />
                        }
                        
                      </div>
                      <div>
                      <Collapse in={isEditing} timeout={500}>
                        <form className="login-signup-form" onSubmit={this.handleSubmitCompany}>
                          <div className="form-group">
                            <TextField
                                label={this.props.dictionary.editCompany.companyName}
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
                                label={this.props.dictionary.editCompany.cellPhone}
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
                              <small className="small-text">
                                {this.props.dictionary.signUp.specificationCellPhone}
                              </small>
                          </div>
                          <div className="form-group">
                              <input type="file" id="fileUpload" style={{ display: 'none' }} onChange={e => this.handleFormPhotoChange(e)} />
                              {!this.state.photo && (
                                <Button variant="outlined" onClick={() => document.getElementById('fileUpload').click()} fullWidth>
                                  {this.props.dictionary.editCompany.uploadLogo}
                                </Button>
                              )}
                              <Collapse in={!!this.state.photoError} timeout={1000}>
                                <MessageBox
                                  authenticationStatus={commonStatuses.failed}
                                  authenticationStatusDescription={this.props.dictionary.editCompany.photoError}
                                />
                              </Collapse>
                              {this.state.photo && (
                                <div className="d-flex justify-content-around">
                                  <Button variant="outlined" onClick={this.handleEditPhoto} fullWidth>{this.props.dictionary.editCompany.editPhoto}</Button>
                                  <Button variant="outlined" onClick={this.handleDeletePhoto} fullWidth>{this.props.dictionary.editCompany.deletePhoto}</Button>
                                </div>
                              )}
                            </div>
                            {
                              this.state.isUploading ? 
                              <Button
                              variant="contained"
                              color="primary"
                              fullWidth
                              type="submit"
                              disabled={this.state.disableBtn || this.state.isUploading}
                              >
                                  {`${this.props.dictionary.editCompany.uploading}(${Math.round(this.state.uploadProgress)}%)`}
                              </Button>
                            :
                            <CardActions>
                            <Button
                              variant="contained"
                              color="primary"
                              fullWidth
                              type="submit"
                              disabled={this.props.security.company.status === commonStatuses.loading || this.state.isUploading}
                            >
                              {this.props.dictionary.editCompany.save}
                            </Button>
                            <Button
                              variant="contained"
                              color="error"
                              fullWidth
                              type="button"
                              onClick={() => this.handleCancel()}
                            >
                              {this.props.dictionary.editCompany.cancel}
                            </Button>
                          </CardActions>
                            }
                        </form>
                      </Collapse>
                        <Collapse in={!isEditing} timeout={500}>
                          <ul className="contact-info-list">
                                <li className="d-flex pb-3">
                                    <div className="contact-icon mr-3">
                                        <Person2Icon />
                                    </div>
                                    <div className="contact-text">
                                        <h5 className="mb-1">{this.props.dictionary.editCompany.companyName}</h5>
                                        <p>
                                        {this.state.companyName}
                                        </p>
                                    </div>
                                </li>
                                <li className="d-flex pb-3">
                                    <div className="contact-icon mr-3">
                                        <Person2Icon />
                                    </div>
                                    <div className="contact-text">
                                        <h5 className="mb-1">{this.props.dictionary.editCompany.cellPhone}</h5>
                                        <p>
                                        {this.state.cellPhone}
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
                                {this.props.dictionary.editCompany.editInformation}
                              </Button>
                            </CardActions>
                            <CardActions>
                              <Button
                                variant="contained"
                                color="secondary"
                                fullWidth
                                onClick={this.toggleEditUser}
                              >
                                {this.props.dictionary.editCompany.goToProfilInformation}
                              </Button>
                          </CardActions>
                        </Collapse>
                      </div>
                    </CardContent>
                  </Card>
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
    security: state.security,
    dictionary: state.i18n.dictionary,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    genericAction: bindActionCreators(genericAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditCompany));
