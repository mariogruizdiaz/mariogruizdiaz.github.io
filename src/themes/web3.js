import React, { Component } from "react";

import Header from "../components/Header/headerWeb3";
import Hero from "../components/HeroSection/HeroWeb3";
import Promo from "../components/PromoSection/PromoWeb3";
import FooterSection from "../components/Footer/FooterAdmeInvestors";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header isColorLogo={true} />
        <div className="main">
          <Hero />
          <Promo />
        </div>
        <FooterSection withNewsletter={true} isWhite={true} />
      </React.Fragment>
    );
  }
}

export default Theme;
