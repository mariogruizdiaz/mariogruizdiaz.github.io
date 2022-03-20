import React, { Component } from "react";
import { connect } from "react-redux";
import { genericAction } from "../../state/actions";
import { bindActionCreators } from "redux";

import HeaderTeam from "../../components/Header/headerTeam";
import Hero from "../../components/Results/HeroSectionCompanyPage";
import Breadcrumb from "../../components/Results/CompanyGridBreadcrumb";

import CampaignsGrid from "../../components/Results/CampaignsGrid";
import Footer from "../../components/Footer/FooterAdmeMobile";
import { actionTypes } from "../../state/actionTypes";
import * as globalModels from "influencers-models";
import { withRouter } from "react-router";

class company extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.match.params.companyId !== nextProps.match.params.companyId) {
            this.props.genericAction(actionTypes.FETCH_COMPANY, { [globalModels.companyFields._id]: nextProps.match.params.companyId });
            return false;
        }

        if (this.props.selectedCompany && this.props.selectedCompany[globalModels.companyFields._id] !== nextProps.selectedCompany[globalModels.companyFields._id]) {
            return true;
        }

        return false;

    }

    componentDidMount() {
        this.props.genericAction(actionTypes.FETCH_COMPANY, { [globalModels.companyFields._id]: this.props.match.params.companyId });
    }
    render() {
        return (
            <React.Fragment>
                <HeaderTeam />
                <div className="main">
                    <Hero />
                    <Breadcrumb />
                    <CampaignsGrid />
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(company));
