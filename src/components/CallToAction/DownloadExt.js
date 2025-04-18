import React from "react";
import { connect } from "react-redux";
// import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { SnackbarContext } from '../Toast/SnackbarContext';
import { withRouter } from "react-router-dom";
import { getMobileOperatingSystem } from '../../state/helpers/openWhatsAppLink';

class Download extends React.Component {
    static contextType = SnackbarContext;
    
    constructor(props) {
        super(props);
        this.state = {
            text: '9CD4CD9A',
            copied: false,
        };
    }

    componentDidMount() {
        const fullQuery = this.props.location.search.replace(/^\?/, '');
        console.log('fullQuery', fullQuery);
        const searchParams = new URLSearchParams(this.props.location.search);
        const companycode = searchParams.get("companyCode") || "";
        this.setState({
            companycode: companycode,
            fullQuery: fullQuery
        });
      }

    copyToClipboard = () => {
        navigator.clipboard.writeText(this.state.text)
            .then(() => {
                this.setState({ copied: true });
                setTimeout(() => {
                    this.setState({ copied: false });
                }, 4000);
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
        const os = getMobileOperatingSystem();
        console.log('state', this.state);
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
                                                    {/* <p className="m-0px">{this.props.dictionary.download.downloadSubtitle}</p>  */}
                                                    <p className="m-0px">{this.props.dictionary.download.preLunchdownloadSubtitle}</p>
                                                    {/* <p style={{ color: this.state.copied ? 'green' : 'black' }} >{`9CD4CD9A `}<ContentCopyIcon style={{ cursor: 'pointer' }} onClick={this.copyToClipboard} /></p> */}
                                                    {/* <a className="btn btn-brand-02 btn-sm btn-rounded" target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/us/app/adme-%24/id1637316014">{this.props.dictionary.download.download}</a> */}
                                                    <img src="assets/img/admeDownloadiOS.png" alt="logo" class="img-fluid" />
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
                                                    {/* <p className="m-0px">{this.props.dictionary.download.downloadSubtitle}</p>  */}
                                                    <p className="m-0px">{this.props.dictionary.download.preLunchdownloadSubtitle}</p>
                                                    {/* <p style={{ color: this.state.copied ? 'green' : 'black' }} >{`9CD4CD9A `}<ContentCopyIcon style={{ cursor: 'pointer' }} onClick={this.copyToClipboard} /></p> */}
                                                    {/* <a className="btn btn-brand-02 btn-sm btn-rounded" target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=ar.com.adme.social.qa">{this.props.dictionary.download.download}</a> */}
                                                    <img src="assets/img/admeDownloadAndroid.png" alt="logo" class="img-fluid" />
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
                                            {/* <p className="m-0px">{this.props.dictionary.download.downloadSubtitle}</p>  */}
                                            <p className="m-0px">{this.props.dictionary.download.preLunchdownloadSubtitle}</p>
                                            {/* <p style={{ color: this.state.copied ? 'green' : 'black' }} >{`9CD4CD9A `}<ContentCopyIcon style={{ cursor: 'pointer' }}  onClick={this.copyToClipboard} /></p> */}
                                            {/* <a className="btn btn-brand-02 btn-sm btn-rounded" target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/us/app/adme-%24/id1637316014">{this.props.dictionary.download.download}</a> */}
                                            <a className="btn btn-brand-02 btn-sm btn-rounded" href={`/#/downloadAppRedirector?source=PHYSICAL_QR&store=iOS&companyCode=${this.state.companycode}&from=download&prevQuery=${encodeURIComponent(this.state.fullQuery)}`}>{this.props.dictionary.download.download}</a>
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
                                            {/* <p className="m-0px">{this.props.dictionary.download.downloadSubtitle}</p>  */}
                                            <p className="m-0px">{this.props.dictionary.download.preLunchdownloadSubtitle}</p>
                                            {/* <p style={{ color: this.state.copied ? 'green' : 'black' }} >{`9CD4CD9A `}<ContentCopyIcon onClick={this.copyToClipboard} /></p> */}
                                            {/* <a className="btn btn-brand-02 btn-sm btn-rounded" target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=ar.com.adme.social.qa">{this.props.dictionary.download.download}</a> */}
                                            <a className="btn btn-brand-02 btn-sm btn-rounded" href={`/#/downloadAppRedirector?source=PHYSICAL_QR&store=Android&companyCode=${this.state.companycode}&from=download&prevQuery=${encodeURIComponent(this.state.fullQuery)}`}>{this.props.dictionary.download.download}</a>
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
