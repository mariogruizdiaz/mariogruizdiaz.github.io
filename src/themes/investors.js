import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../components/Header/headerInvestors";
import Hero from "../components/HeroSection/HeroSection4";
import Promo from "../components/PromoSection/PromoInvestors";
// import AboutUs from "../components/AboutUs/AboutUs4";
// import Feature from "../components/Features/Features4";
// import Download from "../components/CallToAction/DownloadExt";
// import Screenshots from "../components/Screenshots";
// import WorkProcess from "../components/WorkProcess";
// import Pricing from "../components/Pricing";
// import Counter from "../components/CallToAction/Counter";
import TeamMember from "../components/TeamMember/coFounders";
import Faq from "../components/Faq/FaqAdmeInvestors";
// import Testimonial from "../components/Testimonial";
// import ContactSection from "../components/Contact";
import PrivateDocuments from "../components/Investors/PrivateDocuments";
// import Blog from "../components/Blog";
// import TrustedCompany from "../components/TrustedCompany/TrustedCompany";
import FooterSection from "../components/Footer";

class investors extends Component {
    render() {
        return (
            <React.Fragment>
                <Header isColorLogo={true} />
                <div className="main">
                    <Hero />
                    <Promo />
                    {/* <AboutUs /> */}
                    {/* <Feature /> */}
                    {/* <Download /> */}
                    {/* <Screenshots isWhite={false} removeTop={true} /> */}
                    {/* <WorkProcess isGray={true}  /> */}
                    {/* <Pricing isWhite={true}  /> */}
                    {/* <Counter /> */}
                    <PrivateDocuments  isWhite={false} />
                    {
                        this.props.security.authenticated && <Faq isGray={true} />
                    }
                    <TeamMember isWhite={true} />
                    {/* <Testimonial /> */}
                    {/* <ContactSection /> */}
                    {/* <Blog /> */}
                    {/* <TrustedCompany /> */}
                </div>
                <FooterSection />
            </React.Fragment>
        );
    }
}

export default connect(state => ({
    dictionary: state.i18n.dictionary,
    security: state.security
}))(investors);
