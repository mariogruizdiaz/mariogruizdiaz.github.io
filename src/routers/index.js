import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
import ResetPassword from "../themes/resetPassword";
import Faq from "../themes/faq";
import NotFound from "../themes/404";
import ComingSoon from "../themes/comingSoon";
import ComingSoonBrands from "../themes/comingSoonBrands";
import ComingSoonInvestors from "../themes/comingSoonInvestors";
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

export default class Routes extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch basename>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Theme1} />
            <Route exact path={`${process.env.PUBLIC_URL}/theme1`} component={Theme1} />
            <Route exact path={`${process.env.PUBLIC_URL}/theme2`} component={Theme2} />
            <Route exact path={`${process.env.PUBLIC_URL}/theme3`} component={Theme3} />
            <Route exact path={`${process.env.PUBLIC_URL}/theme4`} component={Theme4} />
            <Route exact path={`${process.env.PUBLIC_URL}/theme5`} component={Theme5} />
            <Route exact path={`${process.env.PUBLIC_URL}/theme6`} component={Theme6} />
            <Route exact path={`${process.env.PUBLIC_URL}/theme7`} component={Theme7} />
            <Route exact path={`${process.env.PUBLIC_URL}/theme8`} component={Theme8} />
            <Route exact path={`${process.env.PUBLIC_URL}/theme9`} component={Theme9} />
            <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
            <Route exact path={`${process.env.PUBLIC_URL}/signup`} component={SignUp} />
            <Route exact path={`${process.env.PUBLIC_URL}/resetPassword`} component={ResetPassword} />
            <Route exact path={`${process.env.PUBLIC_URL}/faq`} component={Faq} />
            <Route exact path={`${process.env.PUBLIC_URL}/404`} component={NotFound} />
            <Route exact path={`${process.env.PUBLIC_URL}/comingSoon`} component={ComingSoon} />
            <Route exact path={`${process.env.PUBLIC_URL}/comingSoonBrands`} component={ComingSoonBrands} />
            <Route exact path={`${process.env.PUBLIC_URL}/comingSoonInvestors`} component={ComingSoonInvestors} />
            <Route exact path={`${process.env.PUBLIC_URL}/thankYou`} component={ThankYou} />
            <Route exact path={`${process.env.PUBLIC_URL}/team`} component={Team} />
            <Route exact path={`${process.env.PUBLIC_URL}/singleTeam`} component={SingleTeam} />
            <Route exact path={`${process.env.PUBLIC_URL}/blogDefault`} component={BlogDefault} />
            <Route exact path={`${process.env.PUBLIC_URL}/blogNoSidebar`} component={BlogNoSidebar} />
            <Route exact path={`${process.env.PUBLIC_URL}/blogLeftSidebar`} component={BlogLeftSidebar} />
            <Route exact path={`${process.env.PUBLIC_URL}/blogRightSidebar`} component={BlogRightSidebar} />
            <Route exact path={`${process.env.PUBLIC_URL}/blogSingleLeftSidebar`} component={BlogSingleLeftSidebar} />
            <Route exact path={`${process.env.PUBLIC_URL}/blogSingleRightSidebar`} component={BlogSingleRightSidebar} />
            <Route exact path={`${process.env.PUBLIC_URL}/aboutUs`} component={AboutUs} />
            <Route exact path={`${process.env.PUBLIC_URL}/contactUs`} component={ContactUs} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
