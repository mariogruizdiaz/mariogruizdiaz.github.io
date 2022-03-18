import React, { Component } from "react";
import { connect } from "react-redux";
import { genericAction } from "../state/actions";
import { bindActionCreators } from "redux";
import Header from "../components/Header/header";
import Hero from "../components/HeroSection/HeroSection1";
import AboutAdme from "../components/AboutAdme/About";
import Feature from "../components/Features/FeaturesAdmeMobile";
import WorkProcess from "../components/WorkProcess";
import Counter from "../components/CallToAction/CounterAdmeMobile";
import Faq from "../components/Faq/FaqAdmeMobile";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer/FooterAdmeMobile";
import PassiveIncomesAdmeMobile from "../components/PassiveIncomes/PassiveIncomesAdmeMobile";
import { actionTypes } from "../state/actionTypes";

class Theme extends Component {
    componentDidMount() {
        this.props.genericAction(actionTypes.FETCH_API_REFERENCES, {});
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="main">
                    <Hero />
                    <AboutAdme />
                    <Counter />
                    <WorkProcess />
                    <PassiveIncomesAdmeMobile />
                    {/* <AboutUsExt /> */}
                    {/* <Download /> */}
                    <Feature />
                    {/* <Screenshots /> */}
                    {/* <Pricing /> */}
                    <Testimonial />
                    <Faq />
                    {/* <TeamMember /> */}
                    {/* <Contact /> */}
                    {/* <Blog /> */}
                    {/* <TrustedCompany /> */}
                </div>
                <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(Theme);
