import React from "react";
import { connect } from "react-redux";
import LanguageToggle from "../Language/LanguageToggle";
import AvatarToggle from "../Avatar/AvatarToggle";
import GoogleCalendarButton from './GoogleCalendarButton';

class HeaderTeam extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="header">
            <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={this.props.isColorLogo && this.props.isColorLogo === true ? "assets/img/adme-logo-name.png" : "assets/img/adme-logo-name.png"}
                        alt="logo" className="img-fluid" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="ti-menu"></span>
                    </button>
                    

                    <div className="collapse navbar-collapse h-auto" id="navbarSupportedContent">
                      <GoogleCalendarButton />
                        <ul className="navbar-nav ml-auto menu spanBold">
                            {
                              this.props.security.authenticated && this.props.security.permissions.find(item => item === 'readCampaings') ?
                              <li><a href={`${process.env.PUBLIC_URL}/#brands`} className="page-scroll"><span>{this.props.dictionary.header.menu.myPortal}</span></a>
                              {
                                  this.props.security.authenticated && this.props.security.permissions.find(item => item === 'readCampaings') &&
                                  (this.props.security.authenticated && this.props.security.permissions.find(item => item === 'readCompanies') ?
                                  <ul className="sub-menu">
                                    <li><a href={`${process.env.PUBLIC_URL}/#brands`} className="page-scroll">{this.props.dictionary.header.menu.myPortalHome}</a></li>
                                    <li><a href={`${process.env.PUBLIC_URL}/#/Companies`} className="page-scroll">{this.props.dictionary.header.menu.companies}</a></li>
                                  </ul>
                                  
                                  :
                                  <ul className="sub-menu">
                                    <li><a href={`${process.env.PUBLIC_URL}/#brands`} className="page-scroll">{this.props.dictionary.header.menu.myPortalHome}</a></li>
                                    <li><a href={`${process.env.PUBLIC_URL}/#/Companies/${this.props.security.company.id}`} className="page-scroll">{this.props.dictionary.header.menu.campaigns}</a></li>
                                  </ul>
                                  )
                              }
                              </li>
                              :
                              <li><a href={`${process.env.PUBLIC_URL}/#brands`} className="page-scroll"><span>{this.props.dictionary.header.menu.registerMyBusiness}</span></a></li>
                            }
                            {/* {
                              this.props.security.authenticated && this.props.security.permissions.find(item => item === 'readCampaings') &&
                              (this.props.security.authenticated && this.props.security.permissions.find(item => item === 'readCompanies') ?
                              <li><a href={`${process.env.PUBLIC_URL}/#/Companies`} className="page-scroll">{this.props.dictionary.header.menu.companies}</a></li>
                                :
                               <li><a href={`${process.env.PUBLIC_URL}/#/Companies/${this.props.security.company.id}`} className="page-scroll">{this.props.dictionary.header.menu.campaigns}</a></li>)
                            } */}
                        </ul>
                        <LanguageToggle/>
                        <AvatarToggle />
                    </div>
                    
                </div>
            </nav>
        
        </header>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
    dictionary: state.i18n.dictionary,
    security: state.security
}))(HeaderTeam);
