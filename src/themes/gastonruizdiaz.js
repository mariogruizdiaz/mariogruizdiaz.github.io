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
          <Hero pageTitle={"Gaston Ruiz Diaz"} roleDescription={this.props.dictionary.team.gaston.roleDescription} />
          <Breadcrumb name={"Gaston Ruiz Diaz"} />
          <SingleTeamMember
            email={this.props.dictionary.team.gaston.email}
            phone={this.props.dictionary.team.gaston.phone}
            firstName={"Gastón"}
            lastName={"Ruiz Diaz"}
            role={this.props.dictionary.team.gaston.role}
            picturePath={this.props.dictionary.team.gaston.picturePath}/>
        </div>
        {/* <Footer withoutNewsletter={true} /> */}
      </React.Fragment>
    );
  }
}


export default connect(state => ({
    dictionary: state.i18n.dictionary
}))(GastonTheme);
