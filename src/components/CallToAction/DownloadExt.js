import React from "react";
import { connect } from "react-redux";

class Download extends React.Component {
  getMobileOperatingSystem = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Detecta si es Android
    if (/android/i.test(userAgent)) {
      return 'Android';
    }

    // Detecta si es iOS
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return 'iOS';
    }

    // Retorna 'Otro' si no es ni Android ni iOS
    return 'Otro';
  };

  render() {
    const os = this.getMobileOperatingSystem();
    console.log('SISTEMA OPERATIVO', os);
    return (
      <React.Fragment>
        <section className="position-relative overflow-hidden ptb-100">
            <div className="mask-65"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-8">
                        <div className="section-heading text-center text-white">
                            <h2 className="text-white">¡Descarga y Descubre Adme!</h2>
                            <p>Start working with that can provide everything you need to generate awareness, drive traffic, connect. Efficiently transform granular value with client-focused content.</p>
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
                                <h5>Apple Store</h5>
                            </div>
                            <div className="p-20px">
                                <p className="m-0px">Descubrí Adme ahora mismo.</p>
                                <a className="btn btn-brand-02 btn-sm btn-rounded" href="/#">Descargar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4">
                        <div className="bg-white p-5 rounded text-center shadow mt-lg-0 mt-4">
                            <div className="icon-text-wrap">
                                <i className="fab fa-google-play icon-size-md color-primary mb-2"></i>
                                <h5>Google Play</h5>
                            </div>
                            <div className="p-20px">
                                <p className="m-0px">Descubrí Adme ahora mismo..</p>
                                <a className="btn btn-brand-02 btn-sm btn-rounded" href="/#">Descargar</a>
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
                                <h5>Apple Store</h5>
                            </div>
                            <div className="p-20px">
                                <p className="m-0px">Descubrí Adme ahora mismo.</p>
                                <a className="btn btn-brand-02 btn-sm btn-rounded" href="/#">Descargar</a>
                            </div>
                        </div>
                    </div>)}
                     {os === 'Android' && (
                    <div className="col-sm-6 col-md-6 col-lg-4">
                        <div className="bg-white p-5 rounded text-center shadow mt-lg-0 mt-4">
                            <div className="icon-text-wrap">
                                <i className="fab fa-google-play icon-size-md color-primary mb-2"></i>
                                <h5>Google Play</h5>
                            </div>
                            <div className="p-20px">
                                <p className="m-0px">Descubrí Adme ahora mismo.</p>
                                <a className="btn btn-brand-02 btn-sm btn-rounded" href="/#">Descargar</a>
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

export default connect(state => ({}))(Download);
