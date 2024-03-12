import React, { Component } from "react";

import Hero from "../components/HeroSection/HeroSectionComingSoonBrands";
// import Header from "../components/Header/header";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Header /> */}
        <div className="main">
          <Hero />
        </div>
      </React.Fragment>
    );
  }
}

export default Theme;
