import React, { Component } from "react";

import Header from "../components/Header/header";
import Hero from "../components/HeroSection/HeroSectionInnerPage";
import Breadcrumb from "../components/Breadcrumb";
import Promo from "../components/PromoSection/PromoContact";
import ContactSection from "../components/Contact";
import Map from "../components/Map";
import FooterSection from "../components/Footer";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <Hero pageTitle={"Contact Us"} />
          <Breadcrumb name={"Contact Us"} />
          <Promo />
          <ContactSection />
          <Map />
        </div>
        <FooterSection withoutNewsletter={true} />
      </React.Fragment>
    );
  }
}

export default Theme;
