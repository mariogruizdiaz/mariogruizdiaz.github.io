import React, { Component } from "react";

import Header from "../components/Header/header";
import Hero from "../components/HeroSection/HeroSection6";
import Promo from "../components/PromoSection/Promo6";
import AboutUs from "../components/AboutUs/AboutUs3";
import Feature from "../components/Features/Features5";
import Download from "../components/CallToAction/DownloadExt";
import Screenshots from "../components/Screenshots";
import WorkProcess from "../components/WorkProcess";
import Pricing from "../components/Pricing";
import TeamMember from "../components/TeamMember";
import Faq from "../components/Faq";
import Testimonial from "../components/Testimonial";
import Counter from "../components/CallToAction/Counter";
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
          <Promo hideShape={true} />
          <AboutUs />
          <Feature />
          <Download />
          <Screenshots isWhite={true} removeTop={true} />
          <WorkProcess isGray={true} />
          <Pricing isWhite={true} />
          <Counter />
          <TeamMember isWhite={true} />
          <Faq isGray={true} />
          <Testimonial />
          <Blog />
          <ContactSection />
        </div>
        <FooterSection />
      </React.Fragment>
    );
  }
}

export default Theme;
