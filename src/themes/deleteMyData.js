import React, { Component } from "react";

import Hero from "../components/HeroSection/HeroSectionDeleteMyData";
import Header from "../components/Header/headerDeleteMyData";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header isColorLogo={true} />
        <div className="main">
          <Hero />
        </div>
      </React.Fragment>
    );
  }
}

export default Theme;
