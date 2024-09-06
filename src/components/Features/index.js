import React from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

class Feature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Este es el texto a copiar',
      copied: false
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
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
                            <h2>Apdash Features</h2>
                            <p>Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented catalysts for change. Collaboratively.</p>

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
                                        <p>{`ASDFDSFDSF `}<ContentCopyIcon onClick={this.copyToClipboard} style={{ color: this.state.copied ? 'green' : 'black' }} /></p>
                                        <p>Podes copiar este codigo o bien usar el de un amig@ si ya se la descargo antes a la App.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <span className="ti-headphone-alt icon-size-md color-secondary mr-4"></span>
                                    <div className="icon-text">
                                        <h5 className="mb-2">Friendly online support</h5>
                                        <p>Monotonectally recaptiualize client the centric customize clicks niche markets for this meta-services via. </p>
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
                                        <h5 className="mb-2">Free updates forever</h5>
                                        <p>Compellingly formulate installed base imperatives high standards in benefits for highly efficient client.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <span className="ti-layout-cta-right icon-size-md color-secondary mr-4"></span>
                                    <div className="icon-text">
                                        <h5 className="mb-2">Built with Sass</h5>
                                        <p>Energistically initiate client-centric the maximize market positioning synergy rather client-based data. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                    <span className="ti-palette icon-size-md color-secondary mr-4"></span>
                                    <div className="icon-text">
                                        <h5 className="mb-2">Infinite colors</h5>
                                        <p>Energistically initiate client-centric e-tailers rather than-based data. Morph business technology before.</p>
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

export default Feature;
