import React, { Component } from "react";

import Hero from "../components/HeroSection/HeroSectionComingSoonBrands";
import HeaderTeam from "../components/Header/headerTeam";
import HeroSection from "../components/CallToAction/DownloadExt";
import Index from "../components/Features";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderTeam />
        <div className="main">
          <HeroSection />
          <Index />
        </div>
      </React.Fragment>
    );
  }
}

export default Theme;
