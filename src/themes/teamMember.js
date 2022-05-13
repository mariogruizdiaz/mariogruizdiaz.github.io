import React, { Component } from "react";
import { connect } from "react-redux";

import HeaderTeam from "../components/Header/headerTeam";
import Hero from "../components/HeroSection/HeroSectionInnerPage";
import Breadcrumb from "../components/Breadcrumb";
import SingleTeamMember from "../components/TeamMember/teamMemberBasic";
import FooterSection from "../components/Footer/FooterAdmeInvestors";

class teamMember extends Component {
    constructor(props) {
        super(props);

        this.state = {
            memberKey: this.props.match.params.memberKey
        };
    }
  render() {
    return (
      <React.Fragment>
        <HeaderTeam />
        <div className="main">
          <Hero pageTitle={this.props.dictionary.team[this.state.memberKey].fullName} roleDescription={this.props.dictionary.team[this.state.memberKey].roleDescription} />
          <Breadcrumb name={this.props.dictionary.team[this.state.memberKey].fullName} />
          <SingleTeamMember
            email={this.props.dictionary.team[this.state.memberKey].email}
            phone={this.props.dictionary.team[this.state.memberKey].phone}
            fullName={this.props.dictionary.team[this.state.memberKey].fullName}
            role={this.props.dictionary.team[this.state.memberKey].role}
            picturePath={this.props.dictionary.team[this.state.memberKey].picturePath}/>
        </div>
        <FooterSection withNewsletter={false} isWhite={true} />
      </React.Fragment>
    );
  }
}



export default connect(state => ({
    dictionary: state.i18n.dictionary
}))(teamMember);
