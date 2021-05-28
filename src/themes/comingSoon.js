import React, { Component } from "react";

import Hero from "../components/HeroSection/HeroSectionComingSoon";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main">
          <Hero />
        </div>
      </React.Fragment>
    );
  }
}

export default Theme;
