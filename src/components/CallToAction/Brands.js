import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PromoSection from "../PromoSection";

class Brands extends React.Component {

  handleSubmit = (event) => {
    if (this.props.security.authenticated){
      let mail = this.props.security.email;
      let name = this.props.security.firstName? this.props.security.firstName: null;
      let lastName = this.props.security.lastName? this.props.security.lastName : null;
      let fullName = ` Mi mail es: ${mail} ${name ? ` Mi nombre es: ${name} `: ``} ${lastName ? `${lastName}.`: ``}`;

      if (this.props.security.company.id){
        let companyName = this.props.security.company?.name;
        let cellPhone = this.props.security.company?.cellPhone;
        fullName += `El comercio que agregue es: ${companyName}. Y el celular que agregue de contacto es: ${cellPhone}`;
        if (this.props.companies.selectedCompany.campaigns.items.length) window.open(`https://web.whatsapp.com/send?phone=/5491170677519&text=Hola%2C%20ya%20cree%20alguna%20campa%C3%B1a%20junto%20a%20Adme%2C%20me%20gustar%C3%ADa%20crear%20otra.%20Muchas%20gracias.${fullName}`, "_blank");
        else window.open(`https://web.whatsapp.com/send?phone=/5491170677519&text=Hola%2C%20ya%20agregue%20mi%20comercio%2C%20estoy%20listo%20para%20que%20creemos%20juntos%20mi%20primer%20campa%C3%B1a.%20Quedo%20a%20la%20espera.${fullName}`, "_blank");
      } else window.open(`https://web.whatsapp.com/send?phone=/5491170677519&text=Hola%2C%20ya%20tengo%20mi%20usuario%20pero%20aun%20no%20agregue%20mi%20comercio%2C%20me%20podr%C3%ADan%20dar%20soporte.%20Quedo%20a%20la%20espera.${fullName}`, "_blank");
    } else window.open(`https://web.whatsapp.com/send?phone=/5491170677519&text=Hola%2C%20no%20cree%20aun%20mi%20usuario%20ni%20agregue%20mi%20comercio%2C%20podr%C3%ADan%20darme%20soporte.%20Quedo%20a%20la%20espera.`, "_blank");
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
