import React, { Component } from "react";

import HeroSection from "../components/HeroSection/HeroSectionLogin";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main">
          <HeroSection />
        </div>  
      </React.Fragment>
    );
  }
}

export default Login;
