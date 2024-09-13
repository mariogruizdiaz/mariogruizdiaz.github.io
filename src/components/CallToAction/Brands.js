import React from "react";
import { connect } from "react-redux";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { withRouter } from "react-router-dom";

class Brands extends React.Component {

  render() {
    return (
      <React.Fragment>
        <section className="position-relative overflow-hidden ptb-100">
            <div className="mask-65"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-8">
                        <div className="section-heading text-center text-white">
                          <h2 className="text-white">Adme</h2>
                          <h3 className="text-white">Revolucionando el marketing de influencia.</h3>
                            <p>En Adme, simplificamos el marketing de influencia, haciéndolo accesible, eficiente y, sobre todo, efectivo para tu marca. No dudes en alcanzarnos. Adme es fácil, y estamos acá para demostrártelo.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center justify-content-sm-center">
                    <div className="col-sm-6 col-md-6 col-lg-4">
                      {
                        !this.props.security.authenticated ?
                        <div className="bg-white p-5 rounded text-center shadow mt-lg-0 mt-4">
                            <div className="icon-text-wrap">
                                <img width={50} src="assets/img/admeLogoLogin.png" className="img-fluid mb-3" alt="Adme" />
                                <h5>Sumate a Adme</h5>
                            </div>
                            <div className="p-20px">
                                 <p className="m-0px">Si aun no sos parte, registrate en tan solo 30 segundos</p> 
                                <a className="btn btn-brand-02 btn-sm btn-rounded" rel="noopener noreferrer" href="/#/signUp" >Registrarme</a>
                            </div>
                        </div>
                        :
                        !this.props.security.company.id ?
                        <div className="bg-white p-5 rounded text-center shadow mt-lg-0 mt-4">
                            <div className="icon-text-wrap">
                                <img width={50} src="assets/img/admeLogoLogin.png" className="img-fluid mb-3" alt="Adme" />
                                <h5>Agrega tu marca a Adme</h5>
                            </div>
                            <div className="p-20px">
                                 <p className="m-0px">Estas a 1 pasito, solo te resta sumar tu marca a Adme.</p> 
                                <a className="btn btn-brand-02 btn-sm btn-rounded" rel="noopener noreferrer" href="/#/signUp" >Agregar mi Marca</a>
                            </div>
                        </div>
                        : null
                      }
                    </div>
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
    security: state.security
  };
}

export default connect(mapStateToProps)(withRouter(Brands));
