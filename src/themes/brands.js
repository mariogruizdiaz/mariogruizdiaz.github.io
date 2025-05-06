import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { genericAction } from "../state/actions";
import { actionTypes } from "../state/actionTypes";
import HeaderTeam from "../components/Header/headerTeam";
import HeroSection from "../components/CallToAction/Brands";
import HeroSectionValueOfService from "../components/HeroSection/HeroSectionValueOfService";
import AdmeValueProposition from "../components/Features/AdmeValueProposition";
import WorkProcess from "../components/WorkProcess/toBrands";
import FooterPortal from "../components/Footer/FooterAdmePortal";
import Bullets from "../components/AboutAdme/Bullets";
import { fetchGeoData } from "../state/helpers/geo";

class Theme extends Component {
  async componentDidMount() {
    window.scrollTo(0, 0);

        const searchParams = new URLSearchParams(this.props.location.search);
        if (searchParams.get("source")) {
          const companyCode = null;
          const source = searchParams.get("source") || "unknown";
          const userAgent = navigator.userAgent;
          const language = navigator.language;
          const targetStore = null;
          const { ip, geoCountry, geoCity } = await fetchGeoData();
          this.props.genericAction(actionTypes.TRACK_APP_DOWNLOAD, {
              event: "GOOGLE_ADS",
              source,
              userAgent,
              language,
              ip,
              geoCountry,
              geoCity,
              companyCode,
              store: targetStore
          });
        }
  }
  render() {
    return (
      <React.Fragment>
        <HeaderTeam />
        <div className="main">
          <Bullets />
          <HeroSection />
          <WorkProcess removeTop={true} />
          <HeroSectionValueOfService />
          <AdmeValueProposition />
        </div>
        <FooterPortal withoutNewsletter={true} />
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
    return {
        dictionary: state.i18n.dictionary,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        genericAction: bindActionCreators(genericAction, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Theme));
