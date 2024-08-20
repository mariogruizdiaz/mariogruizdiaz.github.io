import React from "react";
import { connect } from "react-redux";
import { Button, CardActions } from '@mui/material';
import Lightbox from 'react-image-lightbox';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import 'react-image-lightbox/style.css';

class HeroSectionCompanyPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hero: {},
            isOpen: false,
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
      const image = document.querySelector('.image-container img');
      image.onload = () => {
        if (image.naturalWidth < image.naturalHeight) {
          image.classList.add('portrait');
        }
      };
    }

    render() {
      const { isOpen } = this.state;
      return (
        <React.Fragment>
          <section className="page-header-section ptb-100 bg-image" image-overlay="8">
                     <div className="background-image-wraper" style={{ backgroundImage: "url(assets/img/cta-bg.jpg)", opacity: 1 }}></div>
                      <div className="container">
                          <div className="row justify-content-center">
                              <div className="col-md-9 col-lg-8">
                                  <div className="section-heading text-center text-white mb-4">
                                      <h2 className="text-white mb-0">Nombre de campaña</h2>
                                      <p>
                                          brief en caso de que sea de tipo advertising la campaña.
                                          En caso de que sea de tipo Spot. decir que es de tipo spot, y tal vez cambiar el boton de aprobar desaprobar por 1 solo boton que diga canjear.
                                          En caso de que sea de tipo sponsorship, lo mismo.
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div className="row align-items-center justify-content-md-center justify-content-center">
                              <div className="col-lg-8 col-md-6 col-sm-8">
                                  <div className="popular-price bg-white text-center single-pricing-pack mt-4">
                                      <div className="pricing-content">
                                        <CardActions>
                                          <Button fullWidth className="btn btn-brand-02 btn-rounded mb-3" color="primary" variant="contained" onClick={this.handleEditPhoto} >Aprobar</Button>
                                          <Button fullWidth className="btn btn-outline-brand-02 btn-rounded mb-3" color="error" variant="contained" onClick={this.handleDeletePhoto} >Desaprobar</Button>
                                        </CardActions>
                                      </div>
                                      <div className="image-container" onClick={this.handleImageClick}>
                                          <img src="https://firebasestorage.googleapis.com/v0/b/influencers-14b0c.appspot.com/o/company%2Fimages%2Fbd53e76f-b000-48ca-8873-1453d69767f5_logo?alt=media&token=2d2c6635-2ef0-429a-87f3-422fbdd6b9d6" alt="price" />
                                          {/* <img src="https://firebasestorage.googleapis.com/v0/b/influencers-14b0c.appspot.com/o/company%2Fimages%2F7150d531-01d9-48a3-8dcb-cd453ead4ee5_logo?alt=media&token=0d063237-4ec7-4b6b-8fb0-03e97e04fd6a" alt="price" /> */}
                                      </div>
                                      <div className="py-4 border-0 pricing-header">
                                          <div className="price text-center mb-0 monthly-price color-secondary" style={{display: "block"}}>$49<span>.99</span></div>
                                          <div className="price text-center mb-0 yearly-price color-secondary" style={{display: "none"}}>$159<span>.99</span></div>
                                      </div>
                                      <div className="price-name">
                                          <h5 className="mb-0">Premium</h5>
                                      </div>
                                      <div className="pricing-content">
                                          <ul className="list-unstyled mb-4 pricing-feature-list">
                                              <li><span>Unlimited</span> access for a month</li>
                                              <li><span>25</span> customize sub page</li>
                                              <li><span>150</span> disk space</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-12">
                                  <div className="support-cta text-center  text-white mt-5">
                                      <h5 className="mb-1"><span className="ti-headphone-alt color-primary mr-3"></span>We're Here to Help You
                                      </h5>
                                      <p>Have some questions? <a href="/#">Chat with us now</a>, or <a href="/#">send us an email</a> to
                                          get in touch.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
          </section>
          {isOpen && (
                    <Lightbox
                        mainSrc="https://firebasestorage.googleapis.com/v0/b/influencers-14b0c.appspot.com/o/company%2Fimages%2F7150d531-01d9-48a3-8dcb-cd453ead4ee5_logo?alt=media&token=0d063237-4ec7-4b6b-8fb0-03e97e04fd6a"
                        onCloseRequest={() => this.closeLightbox()}
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

export default connect(state => ({
    dictionary: state.i18n.dictionary,
    selectedCompany: state.companies.selectedCompany,
    company: state.security.company,
}))(HeroSectionCompanyPage);
