import React, { Component } from "react";

import HeroSection from "../components/CallToAction/DownloadExt";
import Index from "../components/Features";
import HeaderAudit from "../components/Header/headerAudit";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main">
          <HeaderAudit />
          <HeroSection />
          <Index />
        </div>  
      </React.Fragment>
    );
  }
}

export default Login;
