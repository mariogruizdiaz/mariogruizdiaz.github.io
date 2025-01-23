import React, { Component } from "react";

import HeroSection from "../components/CallToAction/Childsafetystandards";
import Header from "../components/Header/header";
import FooterDownload from "../components/Footer/FooterDownload";

class Childsafetystandards extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <div className="main">
          <Header />
          <HeroSection />
        </div> 
         <FooterDownload withoutNewsletter={true} /> 
      </React.Fragment>
    );
  }
}

export default Childsafetystandards;