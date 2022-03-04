import React, { Component } from "react";
import { connect } from "react-redux";

import HeaderTeam from "../components/Header/headerTeam";
import Hero from "../components/HeroSection/HeroSectionInnerPage";
import Breadcrumb from "../components/Breadcrumb";
import SingleTeamMember from "../components/TeamMember/teamMember";
import Footer from "../components/Footer/FooterAdmeMobile";

class GastonTheme extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderTeam />
        <div className="main">
          <Hero pageTitle={"Julio Aranda"} roleDescription={this.props.dictionary.team.yulian.roleDescription} />
          <Breadcrumb name={"Julio Aranda"} />
          <SingleTeamMember
            email={this.props.dictionary.team.yulian.email}
            phone={this.props.dictionary.team.yulian.phone}
            firstName={"Julio"}
            lastName={"Aranda"}
            role={this.props.dictionary.team.yulian.role}
            picturePath={this.props.dictionary.team.yulian.picturePath}/>
        </div>
        <Footer withoutNewsletter={true} />
      </React.Fragment>
    );
  }
}

// export default GastonTheme;


export default connect(state => ({
    dictionary: state.i18n.dictionary
}))(GastonTheme);
