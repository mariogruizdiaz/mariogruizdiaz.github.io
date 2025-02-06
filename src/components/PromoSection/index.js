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
import { Button, Modal, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


class PromoSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      promo: {}
    };

    this.props.security.company?.id && this.props.genericAction(actionTypes.FETCH_CAMPAIGNS, { [globalModels.advertisementFields.companyId]: this.props.security.company.id });
  }

    handleCloseModal = () => {
          this.setState({ modalOpen: false});
      };

  handleOpenModal = () => {
    this.setState({ modalOpen: true });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.security !== this.props.security) {
      this.props.security.company?.id && this.props.genericAction(actionTypes.FETCH_CAMPAIGNS, { [globalModels.advertisementFields.companyId]: this.props.security.company.id });
    }
  }
  

  componentDidMount() {

    this.setState({
      promo: _data.promo
    });
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
                                <div className="pt-2 pb-3" style={{height: 230}}>
                                    <h5>{this.props.dictionary.brands.howTostart.registerOKTitle}</h5>
                                    <HowToRegIcon color="info" fontSize="large" className="fas fa-concierge-bell icon-size-md color-secondary" />
                                    <p className="text-left"><span>{this.getName()}</span></p>
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
                                <div className="pt-2 pb-3" style={{height: 230}}>
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
                                <div className="pt-2 pb-3" style={{height: 230}}>
                                    <h5>{this.props.dictionary.brands.howTostart.addCompanyOkTitle}</h5>
                                    <ChecklistIcon color="info" fontSize="large" className="fas fa-concierge-bell icon-size-md color-secondary" />
                                    <p className="text-left"><span>{this.getCompanyName().substring(0, 20)}</span>{this.props.dictionary.brands.howTostart.addCompanyOkSubtitle}</p>
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
                                <div className="pt-2 pb-3" style={{height: 230}}>
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
                                <div className="pt-2 pb-3" style={{height: 230}}>
                                    <h5>{this.props.dictionary.brands.howTostart.createCampaignO3Title}</h5>
                                    <p className="mb-0">{this.props.dictionary.brands.howTostart.createCampaignOk3Subtitle}</p>
                                    <br/>
                                      <Button className="btn text-white btn-rounded mb-3" variant="contained" onClick={this.handleOpenModal}>
                                          {this.props.dictionary.brands.howTostart.preDesign}
                                      </Button>
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
                                <div className="pt-2 pb-3" style={{height: 230}}>
                                    <h5>{this.props.dictionary.brands.howTostart.createCampaignTitle}</h5>
                                    <p className="mb-0">{this.props.dictionary.brands.howTostart.createCampaignOk1Subtitle}</p>
                                    <br/>
                                        <Button className="btn text-white btn-rounded mb-3" variant="contained" onClick={this.handleOpenModal}>
                                         {this.props.dictionary.brands.howTostart.preDesign}
                                      </Button>
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
                                <div className="pt-2 pb-3" style={{height: 230}}>
                                    <h5>{this.props.dictionary.brands.howTostart.createCampaignTitle}</h5>
                                    <p className="mb-0">{this.props.dictionary.brands.howTostart.createCampaignOk2Subtitle}</p>
                                    <br/>
                                    <Button disabled className="btn text-white btn-rounded mb-3" variant="contained" onClick={this.handleOpenModal}>
                                      {this.props.dictionary.brands.howTostart.preDesign}
                                  </Button>
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
                <Modal open={this.state.modalOpen} onClose={this.handleCloseModal}>
                      <div className="row align-items-center justify-content-md-center justify-content-center" style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100vh",
                        }}>
                      <div style={{
                                backgroundColor: "white",
                                borderRadius: "8px",
                                width: "100%",
                                maxHeight: "100vh", // Limitar la altura al 90% del viewport
                                maxWidth: "90vh",
                                overflowY: "auto", // Habilitar desplazamiento vertical si el contenido es muy largo
                                padding: "16px",
                                paddingTop: '45px',
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
                        <iframe title="form" src="https://docs.google.com/forms/d/e/1FAIpQLSdd-OrkWLhYsScGWYuTYgYVv8mcB3JavOd7DC1mNcEsFWyb3w/viewform?entry.631336208=Maritoooo&embedded=true" width="660" height="700" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
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
