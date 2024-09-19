import React, { Component } from "react";

import HeroSection from "../components/CallToAction/DownloadExt";
import Index from "../components/Features";
import HeaderAudit from "../components/Header/headerAudit";
import FooterDownload from "../components/Footer/FooterDownload";

class Login extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <div className="main">
          <HeaderAudit />
          <HeroSection />
          <Index />
        </div> 
         <FooterDownload withoutNewsletter={true} /> 
      </React.Fragment>
    );
  }
}

export default Login;
