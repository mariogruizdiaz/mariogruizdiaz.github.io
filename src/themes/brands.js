import React, { Component } from "react";

import Hero from "../components/HeroSection/HeroSectionComingSoonBrands";
import HeaderTeam from "../components/Header/headerTeam";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderTeam />
        <div className="main">
          <Hero />
        </div>
      </React.Fragment>
    );
  }
}

export default Theme;
