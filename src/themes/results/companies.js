import React, { Component } from "react";
import { connect } from "react-redux";
import { genericAction } from "../../state/actions";
import { bindActionCreators } from "redux";

import HeaderTeam from "../../components/Header/headerTeam";
import HeroSection from "../../components/Results/HeroSectionCompaniesPage";
import Breadcrumb from "../../components/GuidesGridBreadcrumb";
import DefaultGiudeGrid from "../../components/Guides/defaultGiudeGrid";
import Footer from "../../components/Footer";
import { actionTypes } from "../../state/actionTypes";
import * as globalModels from "influencers-models";


class Companies extends Component {
    componentDidMount() {
        this.props.genericAction(actionTypes.FETCH_COMPANY, {[globalModels.companyFields._id]: "622cd9a8f6bde20038b43316"});
    }
    render() {
        return (
            <React.Fragment>
                <HeaderTeam />
                <div className="main">
                    <HeroSection pageTitle={this.props.selectedComany.name} />
                    <Breadcrumb name={this.props.selectedComany.name} />
                    <DefaultGiudeGrid />
                </div>
                <Footer withoutNewsletter={true} />
            </React.Fragment>
        );
    }
}
function mapStateToProps(state) {
    return {
        dictionary: state.i18n.dictionary,
        selectedComany: state.companies.selectedCompany
    };
}

function mapDispatchToProps(dispatch) {
    return {
        genericAction: bindActionCreators(genericAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Companies);
