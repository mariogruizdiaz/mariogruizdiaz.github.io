import React from "react";
import { connect } from "react-redux";
import { Button, CardActions } from '@mui/material';
import Lightbox from 'react-image-lightbox';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import 'react-image-lightbox/style.css';
import { actionTypes } from "../../state/actionTypes";
import * as globalModels from "influencers-models";
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";
import { genericAction } from "../../state/actions";
import moment from 'moment';
import 'moment/locale/es'; // Importa los idiomas que necesites
import { TailSpin } from 'react-loader-spinner'; // Importa el componente TailSpin desde la librería

class HeroSectionCompanyPage extends React.Component {
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
        //this.fetchAdvertisement();
    }

    // fetchAdvertisement = () => {
    //     const advertisementId = this.props.match.params.advertisementId;
    //     if (advertisementId) {
    //         this.props.genericAction(actionTypes.FETCH_ADVERTISEMENT, {
    //             [globalModels.advertisementFields._id]: advertisementId,
    //             [globalModels.advertisementFields.companyId]: this.props.company.id
    //         });
    //     }
    // }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.advertisement.status !== nextProps.advertisement.status) {
            switch (nextProps.advertisement.status) {
              case "Approved":
                this.setState({ loading: false, resultStatus: 'approved' });
                break;
              case "RejectedByCustomer":
                this.setState({ loading: false, resultStatus: 'rejected' });
                break;
              default:
                break;
            }
        }

        return true;
    }

    resizeImage = () => {
        const image = document.querySelector('.image-container img');
        image.onload = () => {
            if (image.naturalWidth < image.naturalHeight) {
                image.classList.add('portrait');
            }
        };
    }

    handleApprove = () => {
        this.setState({ loading: true, resultStatus: null });
        const advertisementId = this.props.match.params.advertisementId;

        try {
            this.props.genericAction(actionTypes.UPDATE_ADVERTISEMENT, {
                [globalModels.advertisementFields._id]: advertisementId,
                [globalModels.advertisementFields.status]: globalModels.advertisementStatusEnum.Approved,
            });
        } catch (error) {
        }
    }

    handleDecline = () => {
        this.setState({ loading: true, resultStatus: null });
        const advertisementId = this.props.match.params.advertisementId;

        try {
            this.props.genericAction(actionTypes.UPDATE_ADVERTISEMENT, {
                [globalModels.advertisementFields._id]: advertisementId,
                [globalModels.advertisementFields.status]: globalModels.advertisementStatusEnum.RejectedByCustomer
            });
        } catch (error) {
        }
    }

    render() {
        const { isOpen, loading } = this.state;
        moment.locale(this.props.language);

        return (
            <React.Fragment>
                <section className="page-header-section ptb-100 bg-image"image-overlay="5">
                    <div className="background-image-wraper" style={{ backgroundImage: "url(assets/img/cta-bg.jpg)", opacity: 1 }}></div>
                    <div className="container">
                        <div className="row align-items-center justify-content-md-center justify-content-center" >
                            <div className="col-lg-8 col-md-6 col-sm-8">
                                <div className="popular-price bg-white text-center single-pricing-pack mt-4" color="primary">
                                    <div className="pricing-content">
                                      {
                                        this.props.advertisement.status === globalModels.advertisementStatusEnum.WaitingForPlatformAudit ?
                                          this.props.advertisement.campaignType === globalModels.campaignType.advertisement ?
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
                                    <div className="image-container" onClick={this.handleImageClick}>
                                        <img src={this.props.advertisement.multimediaUri} alt="Photo" />
                                    </div>
                                    <div className="py-4 border-0 pricing-header">
                                        <h2 className="text mb-0 color-secondary">{this.props.advertisement.campaignName}</h2>
                                    </div>
                                    <div className="price-name">
                                        <h5 className="mb-0"> {this.props.advertisement.brief} {this.props.advertisement.campaignType === globalModels.campaignType.advertisement && this.props.advertisement._campaign.brief}</h5>
                                    </div>
                                    <div className="pricing-content">
                                        <ul className="list-unstyled mb-4 pricing-feature-list">
                                            <li><span>Se pagara con </span> {this.props.advertisement._campaign.productPaymentDescription}</li>
                                            <li><span>Creación </span>{moment(this.props.advertisement.creationDt).fromNow()}</li>
                                            <li><span>Tipo Campaña </span> {`${this.props.advertisement.campaignType}`}</li>
                                            <li><span>Usuario creador</span> {`${this.props.advertisement._person.firstName} ${this.props.advertisement._person.lastName}`}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="support-cta text-center text-white mt-5">
                                    <h5 className="mb-1"><span className="ti-headphone-alt color-primary mr-3"></span>Estamos aquí para ayudarte</h5>
                                    <p>¿Tienes algunas preguntas? <a href="/#">Chatea con nosotros ahora</a>, o <a href="/#">envíanos un correo</a> para ponerte en contacto.</p>
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
