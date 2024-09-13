import React, { Component } from "react";

import HeaderTeam from "../components/Header/headerTeam";
import HeroSection from "../components/CallToAction/Brands";
import AdmeValueProposition from "../components/Features/AdmeValueProposition";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderTeam />
        <div className="main">
          <HeroSection />
          <AdmeValueProposition />
        </div>
      </React.Fragment>
    );
  }
}

export default Theme;
