import React, { Component } from "react";
import { connect } from "react-redux";
import { genericAction } from "../state/actions";
import { bindActionCreators } from "redux";
import Header from "../components/Header/headerInvestors";
import Hero from "../components/HeroSection/HeroSectionInnerPage";
import OpenPostions from "../components/Blog/openPostions";
// import Footer from "../components/Footer";
import Footer from "../components/Footer/FooterAdmeMobile";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header isColorLogo={true}/>
        <div className="main">
          <Hero pageTitle={this.props.dictionary.joinUs.heroTitle} roleDescription={this.props.dictionary.joinUs.heroSubtitle} />
          <OpenPostions />
        </div>
        <Footer withoutNewsletter={true} />
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
        genericAction: bindActionCreators(genericAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Theme);
