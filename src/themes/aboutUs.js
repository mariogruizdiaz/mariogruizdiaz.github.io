import React, { Component } from "react";

import Header from "../components/Header/header";
import Hero from "../components/HeroSection/HeroSectionInnerPage";
import Breadcrumb from "../components/Breadcrumb";
import AboutUs from "../components/AboutUs/AboutUs2";
import Download from "../components/CallToAction/DownloadExt";
import WorkProcess from "../components/WorkProcess";
import TeamMember from "../components/TeamMember";
import TrustedCompany from "../components/TrustedCompany/TrustedCompany";
import FooterSection from "../components/Footer";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <Hero pageTitle={"About Us"} />
          <Breadcrumb name={"About Us"} />
          <AboutUs isWhite={true} />
          <Download />
          <WorkProcess removeTop={true} />
          <TeamMember />
          <TrustedCompany />
        </div>
        <FooterSection />
      </React.Fragment>
    );
  }
}

export default Theme;
