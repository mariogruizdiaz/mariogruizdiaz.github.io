import React from "react";
import { connect } from "react-redux";
import { Button, CardActions, IconButton } from '@mui/material';
import Lightbox from 'react-image-lightbox';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import 'react-image-lightbox/style.css';
import { actionTypes } from "../../state/actionTypes";
import * as globalModels from "influencers-models";
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";
import { genericAction } from "../../state/actions";
import moment from 'moment';
import 'moment/locale/es';
import { TailSpin } from 'react-loader-spinner'; 
import ExpandableText from '../../state/helpers/expandableText';
import { SnackbarContext } from '../Toast/SnackbarContext';

class HeroSectionCompanyPage extends React.Component {
    static contextType = SnackbarContext;
    constructor(props) {
        super(props);

        this.state = {
            hero: {},
            isOpen: false,
            loading: false,  // Estado para la máscara de carga
            resultStatus: 'rejected'  // Estado para el resultado de aprobación/rechazo
        };

        this.handleImageClick = this.handleImageClick.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
    }

    handleImageClick() {
        this.setState({ isOpen: true });
    }

    closeLightbox() {
        this.setState({ isOpen: false });
    }

    componentDidMount() {
        this.resizeImage();
    }

    resizeImage = () => {
        const image = document.querySelector('.image-container img');
        image.onload = () => {
            if (image.naturalWidth < image.naturalHeight) {
                image.classList.add('portrait');
            }
        };
    }

    render() {
        const { isOpen, loading } = this.state;
        moment.locale(this.props.language);
        
        return (
            <React.Fragment>
                <section className="page-header-section ptb-100 bg-image" image-overlay="5">
                    <div className="background-image-wraper" style={{ backgroundImage: "url(assets/img/cta-bg.jpg)", opacity: 1 }}></div>
                    <div className="container">
                        <div className="row align-items-center justify-content-md-center justify-content-center" >
                            <div className="col-lg-8 col-md-6 col-sm-8">
                                <div className="popular-price bg-white text-center single-pricing-pack mt-4" color="primary">
                                    <div className="pricing-content">
                                      {
                                        this.props.advertisement.status === (globalModels.advertisementStatusEnum.WaitingForCustomerAudit || globalModels.advertisementStatusEnum.WaitingForPlatformAudit) ?
                                          this.props.advertisement.campaignType === globalModels.campaignTypeEnum.Advertising ?
                                            <CardActions>
                                                <Button fullWidth className="btn btn-brand-02 btn-rounded mb-3" color="primary" disabled={this.props.advertisement.fetchStatus === 'SAVING'} variant="contained" onClick={this.handleApprove}>{this.props.dictionary.audtiAdvertisemnt.approve}</Button>
                                                <Button fullWidth className="btn btn-outline-brand-02 btn-rounded mb-3" color="error" disabled={this.props.advertisement.fetchStatus === 'SAVING'} variant="contained" onClick={this.handleDecline}>{this.props.dictionary.audtiAdvertisemnt.reject}</Button>
                                            </CardActions>
                                            :
                                            <CardActions>
                                                <Button fullWidth className="btn btn-brand-02 btn-rounded mb-3" color="primary" disabled={this.props.advertisement.fetchStatus === 'SAVING'} variant="contained" onClick={this.handleApprove}>{this.props.dictionary.audtiAdvertisemnt.validate}</Button>
                                            </CardActions>
                                        :
                                        this.props.advertisement.status === globalModels.advertisementStatusEnum.Approved ? 
                                         <div className={`message-box d-block alert-success alert`}>
                                            {this.props.dictionary.audtiAdvertisemnt.approvedAd}
                                          </div>
                                          :
                                          <div className={`message-box d-block alert-danger alert`}>
                                            {this.props.dictionary.audtiAdvertisemnt.rejectedAd}
                                          </div>
                                      }
                                    </div>
                                    
                                    <div className="image-container" style={{ position: 'relative' }}>
                                        <img src={this.props.advertisement.multimediaUri} alt="" onClick={this.handleImageClick} style={{ cursor: 'pointer', width: '100%' }} />
                                        {/* Icono de lupa */}
                                        <IconButton
                                            onClick={this.handleImageClick}
                                            style={{ 
                                                position: 'absolute',
                                                bottom: '10px',
                                                right: '10px',
                                                backgroundColor: 'rgba(255, 255, 255, 0.8)'
                                            }}
                                            aria-label="zoom"
                                        >
                                            <SearchIcon style={{ color: '#000' }} />
                                        </IconButton>
                                    </div>

                                    <div className="py-4 border-0 pricing-header">
                                        <h2 className="text mb-0 color-secondary"> <ExpandableText text={this.props.advertisement.campaignName} maxChars={50} /></h2>
                                    </div>
                                    <div className="price-name">
                                         <h5 className="mb-0 text">
                                          {
                                            this.props.advertisement.campaignType === globalModels.campaignTypeEnum.Advertising &&
                                           <React.Fragment>
                                              {this.props.dictionary.audtiAdvertisemnt.brief}
                                              <ExpandableText text={this.props.advertisement._campaign.brief ? this.props.advertisement._campaign.brief : ""} maxChars={50} />
                                           </React.Fragment>
                                           
                                          }
                                          
                                        </h5>
                                    </div>
                                    <div className="pricing-content">
                                        <ul className="list-unstyled mb-4 pricing-feature-list">
                                            <li><span>{this.props.dictionary.audtiAdvertisemnt.willBePaidWith}</span> {this.props.advertisement._campaign.productPaymentDescription}</li>
                                            <li><span>{this.props.dictionary.audtiAdvertisemnt.creation} </span>{moment(this.props.advertisement.creationDt).fromNow()}</li>
                                            <li><span>{this.props.dictionary.audtiAdvertisemnt.campaignType} </span> {`${this.props.advertisement.campaignType}`}</li>
                                            <li><span>{this.props.dictionary.audtiAdvertisemnt.creatorUser}</span> {`${this.props.advertisement._person.firstName} ${this.props.advertisement._person.lastName}`}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="support-cta text-center text-white mt-5">
                                    <p>{this.props.dictionary.audtiAdvertisemnt.youAreInAudit}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {loading && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1000
                    }}>
                        <TailSpin
                            height="80"
                            width="80"
                            color="#fff"
                            ariaLabel="tail-spin-loading"
                            visible={true}
                        />
                    </div>
                )}

                {isOpen && (
                    <Lightbox
                        mainSrc={this.props.advertisement.multimediaUri}
                        onCloseRequest={this.closeLightbox}
                        enableZoom={false} // Desactivar el zoom predeterminado
                        toolbarButtons={[]} // Opcional: Personalizamos completamente los botones
                    />
                )}
                {isOpen && (
                    <div style={{
                        position: 'fixed',
                        top: 20, // Cambia esta posición según tus necesidades
                        right: 20,
                        zIndex: 10000 // Asegúrate de que esté por encima de otros elementos
                    }}>
                        <IconButton
                            key="close"
                            title="Close"
                            onClick={this.closeLightbox}
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', margin: '5px' }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </div>
                )}
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        dictionary: state.i18n.dictionary,
        language: state.i18n.language,
        company: state.security.company,
        advertisement: state.advertisement,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        genericAction: bindActionCreators(genericAction, dispatch)
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeroSectionCompanyPage));
