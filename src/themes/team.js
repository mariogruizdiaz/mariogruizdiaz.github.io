import React, { Component } from "react";

import Header from "../components/Header/header";
import Hero from "../components/HeroSection/HeroSectionInnerPage";
import Breadcrumb from "../components/Breadcrumb";
import TeamMember from "../components/TeamMember";
import TrustedCompany from "../components/TrustedCompany/TrustedCompany";
import Footer from "../components/Footer";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <Hero pageTitle={"Our Team"} />
          <Breadcrumb name={"Our Team"} />
          <TeamMember item={6} hideTitle={true} />
          <TrustedCompany />
        </div>
        <Footer withoutNewsletter={true} />
      </React.Fragment>
    );
  }
}

export default Theme;
