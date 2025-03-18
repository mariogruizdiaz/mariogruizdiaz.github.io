import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PromoSection from "../PromoSection";
import { openWhatsAppLink } from '../../state/helpers/openWhatsAppLink';

class Brands extends React.Component {

  handleSubmit = (event) => {
    const { authenticated, email, firstName, lastName, company } = this.props.security;
    if (authenticated) {
      let fullName = `Mi mail es: ${email} ${firstName ? `Mi nombre es: ${firstName}` : ''} ${lastName ? `${lastName}.` : ''}`;

      if (company && company.id) {
        fullName += ` El comercio que agregué es: ${company.name}. Y el celular que agregué de contacto es: ${company.cellPhone}`;
        let message = this.props.companies.selectedCompany.campaigns.items.length > 0
          ? `Hola, ya cree alguna campaña junto a Adme, me gustaría crear otra. Muchas gracias. ${fullName}`
          : `Hola, ya agregué mi comercio, estoy listo para que creemos juntos mi primer campaña. Quedo a la espera. ${fullName}`;
        openWhatsAppLink('/5491170677519', message);
      } else {
        let message = `Hola, ya tengo mi usuario pero aún no agregué mi comercio, me podrían dar soporte. Quedo a la espera. ${fullName}`;
        openWhatsAppLink('/5491170677519', message);
      }
    } else {
      let message = `Hola, no creé aún mi usuario ni agregué mi comercio, ¿podrían darme soporte?. Quedo a la espera.`;
      openWhatsAppLink('/5491170677519', message);
    }
  }

  render() {
    return (
      <React.Fragment>
        <section className="position-relative overflow-hidden ptb-100">
            <div className="mask-65"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-8">
                        <div className="section-heading text-center text-white">
                          {/* <h2 className="text-white">Adme</h2> */}
                          <h3 className="text-white">{this.props.dictionary.brands.howTostart.title}</h3>
                           <p>{this.props.dictionary.brands.howTostart.stepsDescriptions}</p>
                           <div style={{ display: "inline-flex"}}> {/* Ajusta aquí para centrar verticalmente los elementos */}
                              <p style={{ marginRight: 20, marginTop: 12 }}>{`¿Tenes algunas preguntas antes de comenzar? `}</p>
                              <button type="submit" className="btn btn-brand-04" id="btnContactUs" onClick={() => this.handleSubmit()}>
                                <span className="ti-headphone-alt color-security mr-3"></span>
                                {this.props.dictionary.brands.howTostart.chatWhitUs}
                              </button>
                            </div>

                         
                        </div>
                    </div>
                     <PromoSection  />
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
    security: state.security,
    companies: state.companies,
    selectedCompany: state.companies.selectedCompany
  };
}

export default connect(mapStateToProps)(withRouter(Brands));
