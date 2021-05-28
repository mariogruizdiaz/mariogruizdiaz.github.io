import React, { Component } from "react";

import Header from "../components/Header/header";
import Hero from "../components/HeroSection/HeroSection1";
import AboutAdme from "../components/AboutAdme/About";
import Feature from "../components/Features/FeaturesAdmeMobile";
import WorkProcess from "../components/WorkProcess";
import Counter from "../components/CallToAction/CounterAdmeMobile";
import Faq from "../components/Faq/FaqAdmeMobile";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer/FooterAdmeMobile";
import PassiveIncomesAdmeMobile from "../components/PassiveIncomes/PassiveIncomesAdmeMobile";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <Hero />
          <AboutAdme />
          <Counter />
          <WorkProcess />
          <PassiveIncomesAdmeMobile />
          {/* <AboutUsExt /> */}
          {/* <Download /> */}
          <Feature />
          {/* <Screenshots /> */}
          {/* <Pricing /> */}
          <Testimonial />
          <Faq />
          {/* <TeamMember /> */}
          {/* <Contact /> */}
          {/* <Blog /> */}
          {/* <TrustedCompany /> */}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Theme;
