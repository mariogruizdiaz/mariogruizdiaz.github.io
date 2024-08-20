import React, { Component } from "react";

import EditCompany from "../components/HeroSection/HeroSectionEditCompany";
import HeaderTeam from "../components/Header/headerTeam";

class EditCompanyPage extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderTeam />
        <div className="main">
          <EditCompany />
        </div>
      </React.Fragment>
    );
  }
}

export default EditCompanyPage;
