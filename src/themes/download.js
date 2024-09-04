import React, { Component } from "react";

import HeroSection from "../components/CallToAction/DownloadExt";
import Index from "../components/Features";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main">
          <HeroSection />
          <Index />
        </div>  
      </React.Fragment>
    );
  }
}

export default Login;
