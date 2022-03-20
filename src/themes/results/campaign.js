import React, { Component } from "react";

import HeaderTeam from "../../components/Header/headerTeam";
import Hero from "../../components/Results/HeroSectionCampaignPage";
import Breadcrumb from "../../components/Results/CampaignDetailsBreadcrumb";
import AdvertisementsGrid from "../../components/Results/AdvertisementsGrid";
import Footer from "../../components/Footer";

class campaign extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderTeam />
        <div className="main">
          <Hero pageTitle={"Blog No Sidebar"} />
          <Breadcrumb name={"Blog No Sidebar"} />
          <AdvertisementsGrid />
        </div>
        <Footer withoutNewsletter={true} />
      </React.Fragment>
    );
  }
}

export default campaign;
