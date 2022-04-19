import React from "react";
import { connect } from "react-redux";
import LanguageToggle from "../Language/LanguageToggle";

class headerInvestors extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="header">
            <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        <img src={this.props.isColorLogo && this.props.isColorLogo === true ? "assets/img/adme-logo-name.png" : "assets/img/adme-logo-name.png"}
                        alt="logo" className="img-fluid" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="ti-menu"></span>
                    </button>
                    

                    <div className="collapse navbar-collapse h-auto" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto menu">
                            <li><a href={`${process.env.PUBLIC_URL}/`} className="page-scroll">{this.props.dictionary.header.menu.about}</a></li>
                            {/* <li><a href="#process" className="page-scroll">{this.props.dictionary.header.menu.process}</a></li>
                            <li><a href="#features" className="page-scroll">{this.props.dictionary.header.menu.features}</a></li>
                            <li><a href={`${process.env.PUBLIC_URL}/#comingSoonBrands`} className="page-scroll">{this.props.dictionary.header.menu.brands}</a></li>
                            <li><a href={`${process.env.PUBLIC_URL}/#comingSoonBrands`} className="page-scroll">{this.props.dictionary.header.menu.agencies}</a></li>
                            <li><a href={`${process.env.PUBLIC_URL}/#comingSoonInvestors`} className="page-scroll">{this.props.dictionary.header.menu.investors}</a></li> */}
                        </ul>
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
    dictionary: state.i18n.dictionary
}))(headerInvestors);
