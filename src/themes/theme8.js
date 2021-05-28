import React, { Component } from "react";

import Header from "../components/Header/header";
import Hero from "../components/HeroSection/HeroSection8";
import Promo from "../components/PromoSection/Promo2";
import AboutUs from "../components/AboutUs/AboutUs8";
import Feature from "../components/Features";
import Download from "../components/CallToAction/Download";
import Screenshots from "../components/Screenshots";
import WorkProcess from "../components/WorkProcess";
import Pricing from "../components/Pricing";
import Counter from "../components/CallToAction/Counter";
import TeamMember from "../components/TeamMember";
import Faq from "../components/Faq";
import Testimonial from "../components/Testimonial";
import ContactSection from "../components/Contact";
import Blog from "../components/Blog";
import TrustedCompany from "../components/TrustedCompany/TrustedCompany";
import FooterSection from "../components/Footer";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <Hero />
          <Promo hideShape={true} />
          <AboutUs />
          <Feature />
          <Download />
          <Screenshots />
          <WorkProcess />
          <Pricing />
          <Counter />
          <Faq isGray={true} />
          <TeamMember isWhite={true} />
          <Testimonial />
          <ContactSection />
          <Blog />
          <TrustedCompany />
        </div>
        <FooterSection />
      </React.Fragment>
    );
  }
}

export default Theme;
