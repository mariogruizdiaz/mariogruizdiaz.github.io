import React from "react";
import { Button, Modal, IconButton } from "@mui/material";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CloseIcon from '@mui/icons-material/Close';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Bullets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  handleOpenModal = () => {
      this.setState({ modalOpen: true });
  };

  handleCloseModal = () => {
      this.setState({ modalOpen: false });
  };

  render() {
    const { modalOpen } = this.state;
    return (
      <React.Fragment>
        <section id="about" className="ptb-0-100 gray-light-bg ">
          <div className="mask-topp"></div>
            <div className="container">
              <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="section-heading text-center mb-5">
                          <br />
                                    
                            <h2>{this.props.dictionary.brands.whatIsAdme.whatIsAdme}</h2>
                            <p>{this.props.dictionary.brands.whatIsAdme.description}</p>

                        </div>
                    </div>
                    
                </div>
                <div className="row justify-content-center">
                                <div className="col-4 col-lg-3 border-right">
                                    <div className="count-data text-center">
                                        <h4 className="mb-0 color-primary font-weight-bold">+20</h4>
                                        <span>{this.props.dictionary.brands.whatIsAdme.brands}</span>
                                    </div>
                                </div>
                                <div className="col-4 col-lg-3 border-right">
                                    <div className="count-data text-center">
                                      <h4 className="mb-0 color-primary font-weight-bold">+5.000</h4>
                                        <span>{this.props.dictionary.brands.whatIsAdme.downloads}</span>
                                    </div>
                                </div>
                                <div className="col-4 col-lg-3 border-right">
                                    <div className="count-data text-center">
                                        <a href="#howToStart" className="page-scroll btn btn-brand-02 mr-3">{this.props.dictionary.brands.whatIsAdme.startNow}</a>
                                    </div>
                                </div>
                                <div className="col-4 col-lg-3">
                                  <div className="count-data text-center">
                                    <Button className="btn color-primary btn-rounded mb-3" variant="text" onClick={this.handleOpenModal} startIcon={<PlayCircleIcon />}>
                                        {this.props.dictionary.brands.whatIsAdme.viewConcept}
                                    </Button>
                                  </div>
                                </div>
                                 
                            </div>
                            <br />
                <div className="row justify-content-md-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="promo-one-single rounded p-5 my-3 my-md-3 my-lg-0 shadow-lg text-center">
                            <h5>{this.props.dictionary.brands.whatIsAdme.bullet1Title}</h5>
                            <p className="mb-0">{this.props.dictionary.brands.whatIsAdme.bullet1}</p>
                           
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-8">
                        <div className="promo-one-single rounded p-5 my-3 my-md-3 my-lg-0 shadow-lg text-center">
                            
                            <h5>{this.props.dictionary.brands.whatIsAdme.bullet2Title}</h5>
                            <p className="mb-0">{this.props.dictionary.brands.whatIsAdme.bullet2}</p>
                            
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-8">
                        <div className="promo-one-single rounded p-5 my-3 my-md-3 my-lg-0 shadow-lg text-center">
                             <h5>{this.props.dictionary.brands.whatIsAdme.bullet3Title}</h5>
                            <p className="mb-0">{this.props.dictionary.brands.whatIsAdme.bullet3}</p>
                        </div>
                    </div>
                </div>
                
                      
            </div>
        </section>
        <Modal open={modalOpen} onClose={this.handleCloseModal}>
                      <div className="row align-items-center justify-content-md-center justify-content-center" style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100vh",
                        }}>
                      <div className="col-lg-4 col-md-6 col-sm-8" style={{
                                backgroundColor: "white",
                                borderRadius: "8px",
                                maxWidth: "500px",
                                width: "100%",
                                maxHeight: "90vh", // Limitar la altura al 90% del viewport
                                overflowY: "auto", // Habilitar desplazamiento vertical si el contenido es muy largo
                                padding: "16px",
                                position: "relative",
                            }}>
                              <div className="popular-price bg-white text-center">
                                <IconButton
                                aria-label="close"
                                onClick={this.handleCloseModal}
                                sx={{ position: 'absolute', right: 8, top: 8 }}
                            >
                                <CloseIcon />
                            </IconButton>
                               <video src="assets/img/queesAdme1.mp4" controls width="300" height="auto">
                                <source src="assets/img/queesAdme1.mp4" type="video/mp4" />
                              </video>
                              </div>
                            </div>
                          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    dictionary: state.i18n.dictionary,
    language: state.i18n.language,
  }
}

export default connect(mapStateToProps)(withRouter(Bullets));
