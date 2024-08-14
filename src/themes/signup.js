import React, { Component } from "react";

import HeroSection from "../components/HeroSection/HeroSectionSignUp";
import HeaderTeam from "../components/Header/headerTeam";

class SignUp extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderTeam />
        <div className="main">
          <HeroSection />
        </div>
      </React.Fragment>
    );
  }
}

export default SignUp;
