import React, { Component } from "react";

import HeaderTeam from "../components/Header/headerTeam";
import HeroSection from "../components/CallToAction/Brands";
import HeroSectionValueOfService from "../components/HeroSection/HeroSectionValueOfService";
import AdmeValueProposition from "../components/Features/AdmeValueProposition";
import WorkProcess from "../components/WorkProcess/toBrands";
import FooterPortal from "../components/Footer/FooterAdmePortal";

class Theme extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <HeaderTeam />
        <div className="main">
          <HeroSection />
          <WorkProcess removeTop={true} />
          <HeroSectionValueOfService />
          <AdmeValueProposition />
        </div>
        <FooterPortal withoutNewsletter={true} />
      </React.Fragment>
    );
  }
}

export default Theme;
