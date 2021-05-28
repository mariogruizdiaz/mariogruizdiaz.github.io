import React, { Component } from "react";

import Header from "../components/Header/header";
import Hero from "../components/HeroSection/HeroSection9";
import TrustedCompanyMin from "../components/TrustedCompany/TrustedCompanyMin";
import Promo from "../components/PromoSection/Promo2";
import AboutUs from "../components/AboutUs/AboutUs4";
import AboutUsExt from "../components/AboutUs/AboutUs1Ext";
import Feature from "../components/Features";
import Download from "../components/CallToAction/Download";
import Screenshots from "../components/Screenshots";
import WorkProcess from "../components/WorkProcess";
import Pricing from "../components/Pricing";
import TeamMember from "../components/TeamMember";
import Faq from "../components/Faq";
import Testimonial from "../components/Testimonial";
import ContactSection from "../components/Contact";
import Blog from "../components/Blog";
import FooterSection from "../components/Footer";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <Hero />
          <TrustedCompanyMin />
          <Promo hideShape={true} />
          <AboutUs />
          <AboutUsExt isWhite={true} />
          <Feature isGray={true} />
          <Download />
          <Screenshots />
          <WorkProcess />
          <Pricing />
          <Testimonial />
          <TeamMember />
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
