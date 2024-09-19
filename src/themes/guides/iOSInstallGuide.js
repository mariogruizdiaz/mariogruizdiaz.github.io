import React, { Component } from "react";
import { connect } from "react-redux";

import HeaderTeam from "../../components/Header/headerTeam";
import Hero from "../../components/HeroSection/HeroSectionInnerPageIOSGuide";
import Breadcrumb from "../../components/GuideIOSBreadcrumb";
import IOSInstallGuide from "../../components/Guides/iOSInstallGuide";
import Footer from "../../components/Footer/FooterAdmeMobile";

class iOSInstallGuideTheme extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderTeam />
        <div className="main">
          <Hero pageTitle={this.props.dictionary.guides.ios.install.title} roleDescription={this.props.dictionary.guides.ios.install.subTitle} />
          <Breadcrumb name={"Install in IPhone"} />
          <IOSInstallGuide />
        </div>
        <Footer withoutNewsletter={false} />
      </React.Fragment>
    );
  }
}


export default connect(state => ({
    dictionary: state.i18n.dictionary
}))(iOSInstallGuideTheme);
