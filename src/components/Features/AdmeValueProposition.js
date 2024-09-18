import React from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { SnackbarContext } from '../Toast/SnackbarContext';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CampaignIcon from '@mui/icons-material/Campaign';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AddLinkIcon from '@mui/icons-material/AddLink';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ShareIcon from '@mui/icons-material/Share';
import PeopleIcon from '@mui/icons-material/People';
import CreditScoreIcon from '@mui/icons-material/CreditScore';

class AdmeValueProposition extends React.Component {
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
        <br />
        <div id="features" className="about-us ptb-0-100 background-shape-img position-relative">
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
                            <h2>Nuestra propuesta de valor</h2>
                            <p>Para las marcas, Adme representa una oportunidad de acceder a contenido genuino y diverso, ampliando su alcance e impacto en las redes sociales. A través de nuestra plataforma, las marcas pueden:</p>

                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-md-center">
                    <div className="col-lg-4 col-md-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <RocketLaunchIcon fontSize="large" className="color-secondary mr-4"></RocketLaunchIcon>
                                    <div className="icon-text">
                                        <h5 className="mb-2">Lanzar campañas publicitarias.</h5>
                                        <p>Estas seran diseñadas una sola vez, de forma rapida y asistida.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <ShareIcon fontSize="large" className="color-secondary mr-4"></ShareIcon>
                                    <div className="icon-text">
                                        <h5 className="mb-2">Seras publicitado en las redes con contenido autentico.</h5>
                                        <p>Aprovechar contenido auténtico generado y publicado en sus redes por quienes consumen tu producto.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <PeopleIcon fontSize="large" className="color-secondary mr-4"></PeopleIcon>
                                    <div className="icon-text">
                                        <h5 className="mb-2">Atraer a quienes aún no consumen tu marca.</h5>
                                        <p>Todo usuario que tenga la App de Adme descargada sabra que tu marca existe, porque vera tu campaña lista para ejecutar.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5 d-none d-sm-none d-md-block d-lg-block">
                        <div className="mask-image">
                            <img src="assets/img/referrals/referrals.jpg" className="img-fluid" alt="about" />
                        </div>
                    </div>
                    {/* <div className="col-md-6 col-lg-6">
                        <div className="mask-image">
                            <img src="assets/img/referrals/referrals.jpg" className="img-fluid" alt="about" />
                        </div>
                    </div> */}
                    <div className="col-lg-4 col-md-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <AddLinkIcon fontSize="large" className="color-secondary mr-4"></AddLinkIcon>
                                    <div className="icon-text">
                                        <h5 className="mb-2">Conectar con una amplia red de influencers y usuarios</h5>
                                        <p>En Adme, todos pueden ser influencers, desde aquellos que ya monetizan su contenido hasta quienes aún no lo hacen.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <CampaignIcon fontSize="large" className="color-secondary mr-4"></CampaignIcon>
                                    <div className="icon-text">
                                        <h5 className="mb-2">Monitorear tus campañas en tiempo real</h5>
                                        <p>Adme te brinda una seccion donde podras ver absolutamente todo sobre tus campañas.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <CreditScoreIcon fontSize="large" className="color-secondary mr-4" />
                                    
                                    <div className="icon-text">
                                        <h5 className="mb-2">Control total sobre el pago a influencers</h5>
                                        <p><CardGiftcardIcon fontSize="large" className="color-primary mr-4" />
                                          <MonetizationOnIcon fontSize="large" className="color-primary mr-4" /></p>
                                        <p>Decide qué, cómo y cuánto quieres pagar a tus influencers, ya sea dinero, producto/descuento.</p>
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

export default connect(mapStateToProps)(withRouter(AdmeValueProposition));
