import React, { Component } from "react";
import { connect } from "react-redux";

import HeaderTeam from "../../components/Header/headerTeam";
import Hero from "../../components/HeroSection/HeroSectionInnerPage";
import Breadcrumb from "../../components/Breadcrumb";

import AndroidInstallGuide from "../../components/Guides/androidInstallGuide";
import Footer from "../../components/Footer/FooterAdmeMobile";

class androidInstallGuideTheme extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderTeam />
        <div className="main">
          <Hero pageTitle={this.props.dictionary.guides.android.install.title} roleDescription={this.props.dictionary.guides.android.install.subTitle} />
          <Breadcrumb name={"Install in Android"} />
          <AndroidInstallGuide />
        </div>
        <Footer withoutNewsletter={true} />
      </React.Fragment>
    );
  }
}

// export default GastonTheme;


export default connect(state => ({
    dictionary: state.i18n.dictionary
}))(androidInstallGuideTheme);
