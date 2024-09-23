import React, { Component } from "react";

// import Header from "../components/Header/header";
import Header from "../components/Header/headerInvestors";
import Hero from "../components/HeroSection/HeroSectionTeam";
import Breadcrumb from "../components/Breadcrumb";
import TeamMember from "../components/TeamMember";
import FooterSection from "../components/Footer/FooterAdmeInvestors";

class Theme extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <Hero pageTitle={"Our Team"} />
          <Breadcrumb name={"Our Team"} />
          <TeamMember item={6} hideTitle={true} />
        </div>
        <FooterSection withNewsletter={false} isWhite={true} />
      </React.Fragment>
    );
  }
}

export default Theme;
