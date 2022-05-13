import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../components/Header/headerInvestors";
import Hero from "../components/HeroSection/HeroSection4";
import Promo from "../components/PromoSection/PromoInvestors";
import TeamMember from "../components/TeamMember/coFounders";
import Faq from "../components/Faq/FaqAdmeInvestors";
import PrivateDocuments from "../components/Investors/PrivateDocuments";
import FooterSection from "../components/Footer/FooterAdmeInvestors";

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
                    {/* {
                        !this.props.security.authenticated &&
                        <div className="row justify-content-around">
                            <AccessByToken />
                        </div>
                    } */}
                    <PrivateDocuments isWhite={false} />
                    {
                        (this.props.security.authenticated || this.props.security.guestToken) && <Faq isWhite={true} />
                    }
                    {
                        <TeamMember isWhite={(!this.props.security.authenticated && !this.props.security.guestToken)} />
                    }
                    {/* <Testimonial /> */}
                    {/* <ContactSection /> */}
                    {/* <Blog /> */}
                    {/* <TrustedCompany /> */}
                </div>
                <FooterSection withNewsletter={false} isWhite={true} />
            </React.Fragment>
        );
    }
}

export default connect(state => ({
    dictionary: state.i18n.dictionary,
    security: state.security
}))(investors);
