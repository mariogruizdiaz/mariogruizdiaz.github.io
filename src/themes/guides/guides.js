import React, { Component } from "react";
import { connect } from "react-redux";

import HeaderTeam from "../../components/Header/headerTeam";
import HeroSection from "../../components/HeroSection/HeroSectionInnerPageGuides";
import Breadcrumb from "../../components/GuidesGridBreadcrumb";
import DefaultGiudeGrid from "../../components/Guides/defaultGiudeGrid";
import Footer from "../../components/Footer";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderTeam />
        <div className="main">
          <HeroSection pageTitle={this.props.dictionary.guides.title} />
          <Breadcrumb name={this.props.dictionary.guides.breadcrumbTitle} />
          <DefaultGiudeGrid />
        </div>
        <Footer withoutNewsletter={true} />
      </React.Fragment>
    );
  }
}

export default connect(state => ({
    dictionary: state.i18n.dictionary
}))(Theme);
