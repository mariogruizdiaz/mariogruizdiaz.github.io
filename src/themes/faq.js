import React, { Component } from "react";

import Header from "../components/Header/header";
import Hero from "../components/HeroSection/HeroSectionInnerPage";
import Breadcrumb from "../components/Breadcrumb";
import Faq from "../components/Faq";
import FaqExt from "../components/Faq/FaqExt";
import TrustedCompany from "../components/TrustedCompany/TrustedCompany";
import Footer from "../components/Footer";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <Hero pageTitle={"FAQ"} />
          <Breadcrumb name={"Faq"} />
          <Faq />
          <FaqExt />
          <TrustedCompany />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Theme;
