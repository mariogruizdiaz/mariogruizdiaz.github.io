import React, { Component } from "react";

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
          <HeroSection pageTitle={"Get ready to earn money with Adme"} />
          <Breadcrumb name={"User Guides"} />
          <DefaultGiudeGrid />
        </div>
        <Footer withoutNewsletter={true} />
      </React.Fragment>
    );
  }
}

export default Theme;
