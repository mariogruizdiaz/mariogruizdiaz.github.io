import React from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { SnackbarContext } from '../Toast/SnackbarContext';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

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
                            <h2>¿Cómo empezar?</h2>
                            <p>Sigue estos simples pasos para empezar a ganar atravez de Adme </p>

                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-md-center">
                    <div className="col-lg-4 col-md-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <span className="ti-face-smile icon-size-md color-secondary mr-4"></span>
                                    <div className="icon-text">
                                        <h5 className="mb-2">Descargá la App</h5>
                                        <p>Hace click en el boton de arriba y comenza a disfrutar Ya de Adme.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <span className="ti-vector icon-size-md color-secondary mr-4"></span>
                                    <div className="icon-text">
                                        <h5 className="mb-2">Ingresá un código de referido</h5>
                                        <p style={{ color: this.state.copied ? 'green' : 'black' }} >{`9CD4CD95 `}<ContentCopyIcon onClick={this.copyToClipboard} /></p>
                                        <p>Podes copiar este codigo o bien usar el de un amig@ si ya se la descargo antes a la App.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <span className="ti-headphone-alt icon-size-md color-secondary mr-4"></span>
                                    <div className="icon-text">
                                        <h5 className="mb-2">registraté</h5>
                                        <p>completa info necesaria poder brindarte campañas que se ajusten a tu perfil. </p>
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
                                    <span className="ti-layout-media-right icon-size-md color-secondary mr-4"></span>
                                    <div className="icon-text">
                                        <h5 className="mb-2">Linkea tus redes</h5>
                                        <p>Para poder hacer todo de forma automatica desde Adme</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <span className="ti-layout-cta-right icon-size-md color-secondary mr-4"></span>
                                    <div className="icon-text">
                                        <h5 className="mb-2">Seleccioná una campaña</h5>
                                        <p>Las campañas pueden darte dinero o producto/descuento. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <span className="ti-palette icon-size-md color-secondary mr-4"></span>
                                    <div className="icon-text">
                                        <h5 className="mb-2">Publicá y recibí tu recompensa</h5>
                                        <p>Luego de publicar, recibiras tu recompensa. Dependiendo de la campaña en particular, serás recompensado con dinero o con producto!</p>
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
