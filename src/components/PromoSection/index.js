import React from "react";
import { connect } from "react-redux";
import _data from "../../state/data";
import { bindActionCreators } from "redux";
import { actionTypes } from "../../state/actionTypes";
import * as globalModels from "influencers-models";
import { genericAction } from "../../state/actions";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { withRouter } from "react-router-dom";
import ChecklistIcon from '@mui/icons-material/Checklist';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import CampaignSharpIcon from '@mui/icons-material/CampaignSharp';

class PromoSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promo: {}
    };

    this.props.security.company?.id && this.props.genericAction(actionTypes.FETCH_CAMPAIGNS, { [globalModels.advertisementFields.companyId]: this.props.security.company.id });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.security !== this.props.security) {
      this.props.security.company?.id && this.props.genericAction(actionTypes.FETCH_CAMPAIGNS, { [globalModels.advertisementFields.companyId]: this.props.security.company.id });
    }
  }
  

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */

    this.setState({
      promo: _data.promo
    });
  }

  handleSubmit(event) {
    if (this.props.security.authenticated){
      let mail = this.props.security.email;
      let name = this.props.security.firstName? this.props.security.firstName: null;
      let lastName = this.props.security.lastName? this.props.security.lastName : null;
      let fullName = ` Mi mail es: ${mail} ${name ? ` Mi nombre es: ${name} `: ``} ${lastName ? `${lastName}.`: ``}`;

      if (this.props.security.company.id){
        let companyName = this.props.security.company?.name;
        let cellPhone = this.props.security.company?.cellPhone;
        fullName += `El comercio que agregue es: ${companyName}. Y el celular que agregue de contacto es: ${cellPhone}`;
        if (this.props.companies.selectedCompany.campaigns.items.length) window.open(`https://api.whatsapp.com/send?phone=5491135795588&text=Hola%2C%20ya%20cree%20alguna%20campa%C3%B1a%20junto%20a%20Adme%2C%20me%20gustar%C3%ADa%20crear%20otra.%20Muchas%20gracias.${fullName}`, "_blank");
        else window.open(`https://api.whatsapp.com/send?phone=5491135795588&text=Hola%2C%20ya%20agregue%20mi%20comercio%2C%20estoy%20listo%20para%20que%20creemos%20juntos%20mi%20primer%20campa%C3%B1a.%20Quedo%20a%20la%20espera.${fullName}`, "_blank");
      } else window.open(`https://api.whatsapp.com/send?phone=5491135795588&text=Hola%2C%20ya%20tengo%20mi%20usuario%20pero%20aun%20no%20agregue%20mi%20comercio%2C%20me%20podr%C3%ADan%20dar%20soporte.%20Quedo%20a%20la%20espera.${fullName}`, "_blank");
    } else window.open(`https://api.whatsapp.com/send?phone=5491135795588&text=Hola%2C%20no%20cree%20aun%20mi%20usuario%20ni%20agregue%20mi%20comercio%2C%20podr%C3%ADan%20darme%20soporte.%20Quedo%20a%20la%20espera.`, "_blank");

  }

  getName () {
    let mail = this.props.security.email;
    let name = this.props.security.firstName? this.props.security.firstName: null;
    let lastName = this.props.security.lastName? this.props.security.lastName : null;

    return (name && lastName) ? `${name} ${lastName} ` : mail; 
  }

  getCompanyName() {
    return this.props.security.company?.name;
  }

  shouldCompleteProfile() {
    let name = this.props.security.firstName? this.props.security.firstName: null;
    let lastName = this.props.security.lastName? this.props.security.lastName : null;

    return !(name && lastName);
  }

  shouldCompleteLogo () {
    return this.props.security.company?.logo.length === 0;
  }

  render() {
    return (
      <React.Fragment>
        <section className="promo-section ptb-0">
            <div className="container">
              <div className="row justify-content-md-center">
                { this.props.security.authenticated && this.props.security.company.id ?
                  <div className={`message-box d-block alert-success alert`}>
                    <p className="h5 mb-0">{this.props.dictionary.brands.howTostart.promoOkPart1}<span>{this.props.dictionary.brands.howTostart.promoOkPart2}</span>{this.props.dictionary.brands.howTostart.promoOkPart3}</p>
                  </div>
                  :
                  <div className={`message-box d-block alert-warning alert`}>
                    <p className="h5 mb-0">{this.props.dictionary.brands.howTostart.promoPart1}<span>{this.props.dictionary.brands.howTostart.promoPart2}</span>{this.props.dictionary.brands.howTostart.promoPart3}</p>
                  </div>
                }
                </div>
                <div className="row justify-content-md-center">
                  {
                    this.props.security.authenticated ? 
                    <div className="col-md-6 col-lg-3">
                        <div className="card border-0 single-promo-card-ok single-promo-hover p-2 mt-4 shadow">
                            <div className="card-body-270">
                                <div className="pb-2">
                                    <LooksOneIcon color="info" fontSize="large" className="fas fa-concierge-bell icon-size-md color-secondary" />
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>{this.props.dictionary.brands.howTostart.registerOKTitle}</h5>
                                    <HowToRegIcon color="info" fontSize="large" className="fas fa-concierge-bell icon-size-md color-secondary" />
                                    <p className="text-left"><span>{this.getName()}</span>{this.props.dictionary.brands.howTostart.registerOKTitle}</p>
                                      <p className="text-left"><a href="/#/editProfile?from=brands"> {this.shouldCompleteProfile() ? this.props.dictionary.brands.howTostart.registerOkProfileComplete : this.props.dictionary.brands.howTostart.registerOkProfile}</a></p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="col-md-6 col-lg-3">
                        <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4 shadow">
                            
                            <div className="card-body-270">
                                <div className="pb-2">
                                    <LooksOneIcon color="info" fontSize="large" className="fas fa-concierge-bell icon-size-md color-secondary" />
                                </div>
                                <div className="pt-2 pb-3">
                                    <a href="/#/signUp?from=brands"><h5>{this.props.dictionary.brands.howTostart.registerTitle}</h5></a>
                                    <PersonAddIcon color="info" fontSize="large" className="fas fa-concierge-bell icon-size-md color-secondary" />
                                    <p className="text-left">{this.props.dictionary.brands.howTostart.registerSubtitle}</p>
                                    <p className="text-left">{this.props.dictionary.signUp.alreadyHaveAccount}<a href="/#/login?from=brands">{this.props.dictionary.login.login}</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                  }
                   {
                    this.props.security.authenticated && this.props.security.company.id ?
                    <div className="col-md-6 col-lg-3">
                        <div className="card border-0 single-promo-card-ok single-promo-hover p-2 mt-4 shadow">
                            <div className="card-body-270">
                                <div className="pb-2">
                                  <LooksTwoIcon color="info" fontSize="large" className="fas fa-concierge-bell icon-size-md color-secondary" />
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>{this.props.dictionary.brands.howTostart.addCompanyOkTitle}</h5>
                                    <ChecklistIcon color="info" fontSize="large" className="fas fa-concierge-bell icon-size-md color-secondary" />
                                    <p className="text-left"><span>{this.getCompanyName()}</span>{this.props.dictionary.brands.howTostart.addCompanyOkSubtitle}</p>
                                    <p className="text"><a href="/#/editCompany?from=brands"> {this.shouldCompleteLogo() ? this.props.dictionary.brands.howTostart.addCompanyOkUploadLogo : this.props.dictionary.brands.howTostart.addCompanyOkProfile }</a></p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="col-md-6 col-lg-3">
                        <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4 shadow">
                            
                            <div className="card-body-270">
                                <div className="pb-2">
                                  <LooksTwoIcon color="info" fontSize="large" className="fas fa-concierge-bell icon-size-md color-secondary" />
                                    
                                </div>
                                <div className="pt-2 pb-3">
                                    <a href="/#/signUp?from=brands"><h5>{this.props.dictionary.brands.howTostart.addCompanyTitle}</h5></a>
                                    <AddBusinessIcon color="info" fontSize="large" className="fas fa-concierge-bell icon-size-md color-secondary" />
                                    <p className="mb-0">{this.props.dictionary.brands.howTostart.addCompanySubtitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                   } 
                   {
                    this.props.security.authenticated && this.props.security.company.id && this.props.companies.selectedCompany.campaigns.items.length > 0 ?
                    <div className="col-md-6 col-lg-3">
                        <div className="card border-0 single-promo-card-ok single-promo-hover p-2 mt-4 shadow">
                            <div className="card-body-270">
                                <div className="pb-2">
                                  <Looks3Icon fontSize="large" className="fas fa-concierge-bell icon-size-md color-secondary" />
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>{this.props.dictionary.brands.howTostart.createCampaignO3Title}</h5>
                                    <p className="mb-0">{this.props.dictionary.brands.howTostart.createCampaignOk3Subtitle}</p>
                                     <button type="submit" className="btn btn-brand-02" id="btnContactUs" onClick={() => this.handleSubmit()}>
                                      {this.props.dictionary.brands.howTostart.chatWhitUs}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    this.props.security.authenticated && this.props.security.company.id ?
                      <div className="col-md-6 col-lg-3">
                        <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4 shadow">
                            <div className="card-body-270">
                                <div className="pb-2">
                                  
                                  <Looks3Icon fontSize="large" className="fas fa-concierge-bell icon-size-md color-secondary" />
                                    
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>{this.props.dictionary.brands.howTostart.createCampaignTitle}</h5>
                                    <p className="mb-0">{this.props.dictionary.brands.howTostart.createCampaignOk1Subtitle}</p>
                                        <button type="submit" className="btn btn-brand-02" id="btnContactUs" onClick={() => this.handleSubmit()}>
                                        {this.props.dictionary.brands.howTostart.chatWhitUs}
                                        </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    :

                    <div className="col-md-6 col-lg-3">
                        <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4 shadow">
                            <div className="card-body-270">
                                <div className="pb-2">
                                  
                                  <Looks3Icon fontSize="large" className="fas fa-concierge-bell icon-size-md color-secondary" />
                                    
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>{this.props.dictionary.brands.howTostart.createCampaignTitle}</h5>
                                    <p className="mb-0">{this.props.dictionary.brands.howTostart.createCampaignOk2Subtitle}</p>
                                    <br/>
                                    <button type="submit" className="btn btn-brand-02" id="btnContactUs" onClick={() => this.handleSubmit()}>
                                        {this.props.dictionary.brands.howTostart.chatWhitUs}
                                      </button>
                                </div>
                            </div>
                        </div>
                    </div>
                   }
                </div>       
            </div>
            {
              this.props.security.authenticated && this.props.security.company.id && this.props.companies.selectedCompany.campaigns.items.length > 0 &&
              <div className="container">
                
                  <div className="row justify-content-md-center">
                      <div className="col-md-6 col-lg-3">
                          <div className="card border-0 single-promo-card-silver single-promo-hover p-2 mt-4 shadow">
                              <a href={`${process.env.PUBLIC_URL}/#/Companies/${this.props.security.company.id}`} className="page-scroll">
                              <div className="card-body">
                                  <div className="pb-2">
                                      <CampaignSharpIcon color="info" fontSize="large" className="fas fa-concierge-bell icon-size-md color-secondary" />
                                  </div>
                                  <div className="pt-2 pb-3">
                                      <h5>{this.props.dictionary.brands.howTostart.goToMyCampaigns}</h5>
                                  </div>
                              </div>
                              </a>
                          </div>
                      </div>
                  </div>       
              </div>
            }
        </section>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
    return {
        dictionary: state.i18n.dictionary,
        security: state.security,
        advertisement: state.advertisement,
        companies: state.companies,
        selectedCompany: state.companies.selectedCompany
    };
}

function mapDispatchToProps(dispatch) {
    return {
        genericAction: bindActionCreators(genericAction, dispatch)
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PromoSection));
