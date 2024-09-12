import React from "react";
import { connect } from "react-redux";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { SnackbarContext } from '../Toast/SnackbarContext';
import { withRouter } from "react-router-dom";

class Download extends React.Component {
  static contextType = SnackbarContext; 
  constructor(props) {
    super(props);
    this.state = {
      text: '9CD4CD95',
      copied: false
    };
  }
  getMobileOperatingSystem = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Detecta si es Android
    if (/android/i.test(userAgent)) {
      return 'Android';
    }

    // Detecta si es iOS
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return 'iOS';
    }

    // Retorna 'Otro' si no es ni Android ni iOS
    return 'Otro';
  };

  copyToClipboard = () => {
    navigator.clipboard.writeText(this.state.text)
      .then(() => {
        this.setState({ copied: true });
        setTimeout(() => {
          this.setState({ copied: false });
        }, 4000); // Resetea el estado después de 2 segundos
      })
      .catch(err => {
        console.error('Error al copiar: ', err);
      });
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.copied !== this.state.copied && nextState.copied) {
      this.context.showSnackbar(this.props.dictionary.download.copiedSuccessful, "success");
    }

    return true;
  }

  render() {
    const os = this.getMobileOperatingSystem();
    console.log('SISTEMA OPERATIVO', os);
    return (
      <React.Fragment>
        <section className="position-relative overflow-hidden ptb-100">
            <div className="mask-65"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-8">
                        <div className="section-heading text-center text-white">
                            <h2 className="text-white">{this.props.dictionary.download.title}</h2>
                            <p>{this.props.dictionary.download.subtitle}</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center justify-content-sm-center">
                  {
                    os === 'Otro' && (
                      <React.Fragment>
                      <div className="col-sm-6 col-md-6 col-lg-4">
                        <div className="bg-white p-5 rounded text-center shadow mt-lg-0 mt-4">
                            <div className="icon-text-wrap">
                                <i className="fab fa-apple icon-size-md color-primary mb-2"></i>
                                <h5>{this.props.dictionary.download.downloadTitle}</h5>
                            </div>
                            <div className="p-20px">
                                <p className="m-0px">{this.props.dictionary.download.downloadSubtitle}</p> 
                                <p style={{ color: this.state.copied ? 'green' : 'black' }} >{`9CD4CD95 `}<ContentCopyIcon onClick={this.copyToClipboard} /></p>
                               <a className="btn btn-brand-02 btn-sm btn-rounded" target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/us/app/adme-%24/id1637316014">{this.props.dictionary.download.download}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4">
                        <div className="bg-white p-5 rounded text-center shadow mt-lg-0 mt-4">
                            <div className="icon-text-wrap">
                                <i className="fab fa-google-play icon-size-md color-primary mb-2"></i>
                                <h5>{this.props.dictionary.download.downloadTitle}</h5>
                            </div>
                            <div className="p-20px">
                                 <p className="m-0px">{this.props.dictionary.download.downloadSubtitle}</p> 
                                <p style={{ color: this.state.copied ? 'green' : 'black' }} >{`9CD4CD95 `}<ContentCopyIcon onClick={this.copyToClipboard} /></p>
                                <a className="btn btn-brand-02 btn-sm btn-rounded" target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=ar.com.adme.social.qa">{this.props.dictionary.download.download}</a>
                            </div>
                        </div>
                    </div>
                    </React.Fragment>
                    )
                  }
                  {os === 'iOS' && (
                    <div className="col-sm-6 col-md-6 col-lg-4">
                        <div className="bg-white p-5 rounded text-center shadow mt-lg-0 mt-4">
                            <div className="icon-text-wrap">
                                <i className="fab fa-apple icon-size-md color-primary mb-2"></i>
                                <h5>{this.props.dictionary.download.downloadTitle}</h5>
                            </div>
                            <div className="p-20px">
                                 <p className="m-0px">{this.props.dictionary.download.downloadSubtitle}</p> 
                                <p style={{ color: this.state.copied ? 'green' : 'black' }} >{`9CD4CD95 `}<ContentCopyIcon onClick={this.copyToClipboard} /></p>
                                <a className="btn btn-brand-02 btn-sm btn-rounded" target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/us/app/adme-%24/id1637316014">{this.props.dictionary.download.download}</a>
                            </div>
                        </div>
                    </div>)}
                     {os === 'Android' && (
                    <div className="col-sm-6 col-md-6 col-lg-4">
                        <div className="bg-white p-5 rounded text-center shadow mt-lg-0 mt-4">
                            <div className="icon-text-wrap">
                                <i className="fab fa-google-play icon-size-md color-primary mb-2"></i>
                                <h5>{this.props.dictionary.download.downloadTitle}</h5>
                            </div>
                            <div className="p-20px">
                                 <p className="m-0px">{this.props.dictionary.download.downloadSubtitle}</p> 
                                <p style={{ color: this.state.copied ? 'green' : 'black' }} >{`9CD4CD95 `}<ContentCopyIcon onClick={this.copyToClipboard} /></p>
                                <a className="btn btn-brand-02 btn-sm btn-rounded" target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=ar.com.adme.social.qa">{this.props.dictionary.download.download}</a>
                            </div>
                        </div>
                    </div>
                     )}
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
    language: state.i18n.language,
  };
}

export default connect(mapStateToProps)(withRouter(Download));
