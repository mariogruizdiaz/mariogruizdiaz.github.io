import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import { genericAction } from "../state/actions";
import { bindActionCreators } from "redux";
import { actionTypes } from "../state/actionTypes";

// importing all the themes
import Theme1 from "../themes/theme1";
import Theme2 from "../themes/theme2";
import Theme3 from "../themes/theme3";
import Theme4 from "../themes/theme4";
import Theme5 from "../themes/theme5";
import Theme6 from "../themes/theme6";
import Theme7 from "../themes/theme7";
import Theme8 from "../themes/theme8";
import Theme9 from "../themes/theme9";
import Login from "../themes/login";
import SignUp from "../themes/signup";
import EditProfile from "../themes/editProfile";
import EditCompany from "../themes/editCompany";
import ResetPassword from "../themes/resetPassword";
// import Faq from "../themes/faq";
import NotFound from "../themes/404";
import ComingSoon from "../themes/comingSoon";
import Brands from "../themes/brands";
import GastonRuizDiaz from "../themes/gastonruizdiaz";
import JulioAranda from "../themes/julioaranda";
import TeamMember from "../themes/teamMember";
import Guides from "../themes/guides/guides";
import iOSInstallGuide from "../themes/guides/iOSInstallGuide";
import androidInstallGuide from "../themes/guides/androidInstallGuide";
import Companies from "../themes/results/companies";
import DeleteMyData from "../themes/deleteMyData";
import Company from "../themes/results/company";
import Campaign from "../themes/results/campaign";
import ComingSoonInvestors from "../themes/comingSoonInvestors";
import Investors from "../themes/investors";
import Web3 from "../themes/web3";
import ThankYou from "../themes/thankYou";
import Team from "../themes/team";
import SingleTeam from "../themes/singleTeam";
import BlogDefault from "../themes/blogDefault";
import BlogNoSidebar from "../themes/blogNoSidebar";
import BlogLeftSidebar from "../themes/blogLeftSidebar";
import BlogRightSidebar from "../themes/blogRightSidebar";
import BlogSingleLeftSidebar from "../themes/blogSingleLeftSidebar";
import BlogSingleRightSidebar from "../themes/blogSingleRightSidebar";
import AboutUs from "../themes/aboutUs";
import ContactUs from "../themes/contactUs";


class Routes extends React.PureComponent {
    componentDidMount() {
        this.props.genericAction(actionTypes.FETCH_API_REFERENCES, {});
    }
  render() {
    return (
      <React.Fragment>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={Theme1} />
            <Route exact path="/gastonruizdiaz" component={GastonRuizDiaz} />
            <Route exact path="/julioaranda" component={JulioAranda} />
            <Route exact path="/teamMember/:memberKey" component={TeamMember} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/guides" component={Guides} />
            <Route exact path="/iOSInstallGuide" component={iOSInstallGuide} />
            <Route exact path="/androidInstallGuide" component={androidInstallGuide} />
            <Route exact path="/companies" component={Companies} />
            <Route exact path="/deletemydata" component={DeleteMyData} />
            <Route exact path="/companies/:companyId" component={Company} />
            <Route exact path="/companies/:companyId/:campaignId" component={Campaign} />
            <Route exact path="/theme1" component={Theme1} />
            <Route exact path="/theme2" component={Theme2} />
            <Route exact path="/theme3" component={Theme3} />
            <Route exact path="/theme4" component={Theme4} />
            <Route exact path="/theme5" component={Theme5} />
            <Route exact path="/theme6" component={Theme6} />
            <Route exact path="/theme7" component={Theme7} />
            <Route exact path="/theme8" component={Theme8} />
            <Route exact path="/theme9" component={Theme9} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/editProfile" component={EditProfile} />
            <Route exact path="/editCompany" component={EditCompany} />
            <Route exact path="/resetPassword" component={ResetPassword} />
            {/* <Route exact path="/faq" component={Faq} /> */}
            <Route exact path="/404" component={NotFound} />
            <Route exact path="/comingSoon" component={ComingSoon} />
            <Route exact path="/brands" component={Brands} />
            <Route exact path="/comingSoonInvestors" component={ComingSoonInvestors} />
            <Route exact path="/investors" component={Investors} />
            <Route exact path="/web3" component={Web3} />
            <Route exact path="/thankYou" component={ThankYou} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/singleTeam" component={SingleTeam} />
            <Route exact path="/blogDefault" component={BlogDefault} />
            <Route exact path="/blogNoSidebar" component={BlogNoSidebar} />
            <Route exact path="/blogLeftSidebar" component={BlogLeftSidebar} />
            <Route exact path="/blogRightSidebar" component={BlogRightSidebar} />
            <Route exact path="/blogSingleLeftSidebar" component={BlogSingleLeftSidebar} />
            <Route exact path="/blogSingleRightSidebar" component={BlogSingleRightSidebar} />
            <Route exact path="/aboutUs" component={AboutUs} />
            <Route exact path="/contactUs" component={ContactUs} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        genericAction: bindActionCreators(genericAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
