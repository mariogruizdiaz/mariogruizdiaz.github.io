import React, { Component } from "react";

import Header from "../components/Header/header";
import Hero from "../components/HeroSection/HeroSection3";
import Promo from "../components/PromoSection/Promo3";
import AboutUs from "../components/AboutUs/AboutUs3";
import AboutUsExt from "../components/AboutUs/AboutUs3Ext";
import Feature from "../components/Features/Features3";
import Download from "../components/CallToAction/DownloadExt";
import Screenshots from "../components/Screenshots";
import WorkProcess from "../components/WorkProcess";
import Pricing from "../components/Pricing";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";
import Blog from "../components/Blog";
import ContactSection from "../components/Contact";
import FooterSection from "../components/Footer";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <Hero />
          <Promo />
          <AboutUs />
          <AboutUsExt />
          <Feature />
          <Download />
          <Screenshots isWhite={true} removeTop={true} />
          <WorkProcess isGray={true}  />
          <Pricing isWhite={true}  />
          <Testimonial />
          <Faq />
          <Blog />
          <ContactSection />
        </div>
        <FooterSection />
      </React.Fragment>
    );
  }
}

export default Theme;
