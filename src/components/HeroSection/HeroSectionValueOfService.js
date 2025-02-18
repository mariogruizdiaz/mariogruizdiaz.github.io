import React from "react";
import { connect } from "react-redux";
import { subscribe } from "../../actions/index";
import _data from "../../state/data";

class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: {},
      email: "",
      disableBtn: false,
      btnText: "Subscribe"
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */

    this.setState({
      hero: _data.hero
    });
  }

    handleSubmit = (event) => {
    if (this.props.security.authenticated){
      let mail = this.props.security.email;
      let name = this.props.security.firstName? this.props.security.firstName: null;
      let lastName = this.props.security.lastName? this.props.security.lastName : null;
      let fullName = ` Mi mail es: ${mail} ${name ? ` Mi nombre es: ${name} `: ``} ${lastName ? `${lastName}. `: ``}`;

      if (this.props.security.company.id){
        let companyName = this.props.security.company?.name;
        let cellPhone = this.props.security.company?.cellPhone;
        fullName += `El comercio que agregue es: ${companyName}. Y el celular que agregue de contacto es: ${cellPhone}`;
        window.open(`https://web.whatsapp.com/send?phone=/5491170677519&text=Hola.%20Estoy%20interesado%20que%20saber%20mas%20acerca%20del%20Plan%20empresarial.${fullName}`, "_blank");
      } else window.open(`https://web.whatsapp.com/send?phone=/5491170677519&text=Hola.%20Estoy%20interesado%20que%20saber%20mas%20acerca%20del%20Plan%20empresarial.${fullName}`, "_blank");
    } else window.open(`https://web.whatsapp.com/send?phone=/5491170677519&text=Hola.%20Estoy%20interesado%20que%20saber%20mas%20acerca%20del%20Plan%20empresarial.`, "_blank");
  }

  render() {
    return (
      <React.Fragment>
        <section id="hero" className="ptb-100 bg-image overflow-hidden" image-overlay="10">
            <div className="hero-bottom-shape-two" style={{
              backgroundImage: "url(assets/img/hero-bottom-shape-2.svg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom center"
            }}></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-8">
                        <div className="section-heading text-center mb-5">
                            <h2 className="text-white">{this.props.dictionary.brands.plansAndPrices.title}</h2>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
                    <div className="col-md-12 col-lg-6">
                      <h3 className="text-white">{this.props.dictionary.brands.plansAndPrices.subtitle}</h3>
                        <div className="hero-slider-content text-white py-1">
                            <p className="text-left">{this.props.dictionary.brands.plansAndPrices.paragraph1}</p>
                            <p className="text-left">{this.props.dictionary.brands.plansAndPrices.paragraph21}<span>{this.props.dictionary.brands.plansAndPrices.paragraph22}</span>{this.props.dictionary.brands.plansAndPrices.paragraph23}</p>
                            <p className="text-left">{this.props.dictionary.brands.plansAndPrices.paragraph3}</p>
                            <p className="text-justify"><span>{this.props.dictionary.brands.plansAndPrices.paragraph4}</span></p>
                             <button type="submit" className="btn btn-brand-04" id="btnContactUs" onClick={() => this.handleSubmit()}>
                                <span className="ti-headphone-alt color-security mr-3"></span>
                                {this.props.dictionary.brands.howTostart.planEnterprise}
                              </button>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-5">
                        <div className="img-wrap">
                            <img width={450} src={this.props.dictionary.brands.howTostart.img} alt="app" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
    dictionary: state.i18n.dictionary,
    language: state.i18n.language,
    security: state.security,
    companies: state.companies,
    selectedCompany: state.companies.selectedCompany
}))(HeroSection);
