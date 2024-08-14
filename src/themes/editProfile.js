import React, { Component } from "react";

import EditProfile from "../components/HeroSection/HeroSectionEditProfile";
import HeaderTeam from "../components/Header/headerTeam";

class EditProfilePage extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderTeam />
        <div className="main">
          <EditProfile />
        </div>
      </React.Fragment>
    );
  }
}

export default EditProfilePage;
