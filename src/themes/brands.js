import React, { Component } from "react";

import HeaderTeam from "../components/Header/headerTeam";
import HeroSection from "../components/CallToAction/Brands";
import HeroSectionValueOfService from "../components/HeroSection/HeroSectionValueOfService";
import AdmeValueProposition from "../components/Features/AdmeValueProposition";
import WorkProcess from "../components/WorkProcess/toBrands";

class Theme extends Component {
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
      </React.Fragment>
    );
  }
}

export default Theme;
