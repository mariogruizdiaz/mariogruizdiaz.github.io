import React from "react";
import { connect } from "react-redux";
import LanguageToggle from "../Language/LanguageToggle";

class HeaderAudit extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="header">
            <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
                <div className="container">
                    <img src={this.props.isColorLogo && this.props.isColorLogo === true ? "assets/img/adme-logo-name.png" : "assets/img/adme-logo-name.png"}
                        className="img-fluid" />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="ti-menu"></span>
                    </button>
                    

                    <div className="collapse navbar-collapse h-auto" id="navbarSupportedContent">
                        <LanguageToggle/>
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
}))(HeaderAudit);
