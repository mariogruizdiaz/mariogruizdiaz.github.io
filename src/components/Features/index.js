import React from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { SnackbarContext } from '../Toast/SnackbarContext';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ShareIcon from '@mui/icons-material/Share';
import CampaignIcon from '@mui/icons-material/Campaign';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AddLinkIcon from '@mui/icons-material/AddLink';

class Feature extends React.Component {
  static contextType = SnackbarContext; 
  constructor(props) {
    super(props);
    this.state = {
      text: '9CD4CD95',
      copied: false
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.copied !== this.state.copied && nextState.copied) {
      this.context.showSnackbar(this.props.dictionary.download.copiedSuccessful, "success");
    }

    return true;
  }

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

  render() {
    return (
      <React.Fragment>
        <div id="features" className="about-us ptb-100 background-shape-img position-relative">
            <div className="animated-shape-wrap">
                    <div className="animated-shape-item"></div>
                    <div className="animated-shape-item"></div>
                    <div className="animated-shape-item"></div>
                    <div className="animated-shape-item"></div>
                </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-9">
                        <div className="section-heading text-center mb-5">
                            <h2>{this.props.dictionary.download.bodyTitle}</h2>
                            <p>{this.props.dictionary.download.bodySubtitle}</p>

                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-md-center">
                    <div className="col-lg-4 col-md-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <CloudDownloadIcon fontSize="large" className="color-secondary mr-4"></CloudDownloadIcon>
                                    <div className="icon-text">
                                        <h5 className="mb-2">{this.props.dictionary.download.step1Title}</h5>
                                        <p>{this.props.dictionary.download.step1Subtitle}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <ContentCopyIcon fontSize="large" className="color-secondary mr-4"></ContentCopyIcon>
                                    <div className="icon-text">
                                        <h5 className="mb-2">{this.props.dictionary.download.step2Title}</h5>
                                        <p style={{ color: this.state.copied ? 'green' : 'black' }} >{`9CD4CD95 `}<ContentCopyIcon onClick={this.copyToClipboard} /></p>
                                        <p>{this.props.dictionary.download.step2Subtitle}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <PersonAddIcon fontSize="large" className="color-secondary mr-4"></PersonAddIcon>
                                    <div className="icon-text">
                                        <h5 className="mb-2">{this.props.dictionary.download.step3Title}</h5>
                                        <p>{this.props.dictionary.download.step3Subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5 d-none d-sm-none d-md-block d-lg-block">
                        <div className="position-relative pb-md-5 py-lg-0">
                            <img alt="placeholder" src="assets/img/app-adme-mobile-image.png" className="img-center img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <AddLinkIcon fontSize="large" className="color-secondary mr-4"></AddLinkIcon>
                                    <div className="icon-text">
                                        <h5 className="mb-2">{this.props.dictionary.download.step4Title}</h5>
                                        <p>{this.props.dictionary.download.step4Subtitle}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <CampaignIcon fontSize="large" className="color-secondary mr-4"></CampaignIcon>
                                    <div className="icon-text">
                                        <h5 className="mb-2">{this.props.dictionary.download.step5Title}</h5>
                                        <p>{this.props.dictionary.download.step5Subtitle}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <ShareIcon fontSize="large" className="color-secondary mr-4" />
                                    
                                    <div className="icon-text">
                                        <h5 className="mb-2">{this.props.dictionary.download.step6Title}</h5>
                                        <p><CardGiftcardIcon fontSize="large" className="color-primary mr-4" />
                                          <MonetizationOnIcon fontSize="large" className="color-primary mr-4" /></p>
                                        <p>{this.props.dictionary.download.step6Subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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

export default connect(mapStateToProps)(withRouter(Feature));
