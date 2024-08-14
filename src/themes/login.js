import React, { Component } from "react";

import HeroSection from "../components/HeroSection/HeroSectionLogin";
import HeaderTeam from "../components/Header/headerTeam";

class Login extends Component {
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

export default Login;
