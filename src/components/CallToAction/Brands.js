import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PromoSection from "../PromoSection";

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
                          <h3 className="text-white">¿Cómo comenzar?</h3>
                            <p>Para unirte vos con tu marca a Adme y comenzar a revolucionar tus estrategias de marketing de influencia, sólo sigue estos pasos:</p>
                        </div>
                    </div>
                     <PromoSection />
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
