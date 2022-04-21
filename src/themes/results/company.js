import React, { Component } from "react";
import { connect } from "react-redux";
import { genericAction } from "../../state/actions";
import { bindActionCreators } from "redux";

import HeaderTeam from "../../components/Header/headerTeam";
import Hero from "../../components/Results/HeroSectionCompanyPage";
import Breadcrumb from "../../components/Results/CompanyGridBreadcrumb";

import CampaignsGrid from "../../components/Results/CampaignsGrid";
import FooterAdmeBrands from "../../components/Footer/FooterAdmeBrands";
import { actionTypes } from "../../state/actionTypes";
import * as globalModels from "influencers-models";
import { withRouter } from "react-router";
import Hero404 from "../../components/HeroSection/HeroSection404";
import PreLoader from "../../components/Loaders/PreLoaders";
import { commonStatuses } from "../../state/models/common";

class company extends Component {
    constructor(props) {
        super(props);

        this.state = {
            companyIdValid: true
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.match.params.companyId !== nextProps.match.params.companyId) {
            const companyId = this.props.match.params.companyId;
            if (companyId !== undefined && companyId !== "undefined") {
                this.props.genericAction(actionTypes.FETCH_COMPANY, { [globalModels.companyFields._id]: nextProps.match.params.companyId });
                return false;
            } else {
                return true;
            }

        }

        if (this.props.selectedCompany && this.props.selectedCompany[globalModels.companyFields._id] !== nextProps.selectedCompany[globalModels.companyFields._id]) {
            return true;
        }

        return true;

    }

    componentDidMount() {
        const companyId = this.props.match.params.companyId;
        console.log('componentDidMount', companyId);
        if (companyId !== undefined && companyId !== "undefined") {
            this.props.genericAction(actionTypes.FETCH_COMPANY, { [globalModels.companyFields._id]: companyId });

            if (!this.state.companyIdValid) this.setState({ companyIdValid: true });
        } else {
            if (this.state.companyIdValid) this.setState({ companyIdValid: false });
        }
    }
    render() {
        return (

            <React.Fragment>
                <HeaderTeam />
                {
                    this.state.companyIdValid &&
                    (
                        this.props.selectedCompany && this.props.selectedCompany.fetchStatus === commonStatuses.loaded &&
                        <div>
                            <div className="main">
                                <Hero />
                                <Breadcrumb />
                                <CampaignsGrid />
                            </div>
                            <FooterAdmeBrands withoutNewsletter={true} />
                        </div>

                    )
                }
                {
                    this.state.companyIdValid &&
                    (
                        (!this.props.selectedCompany || this.props.selectedCompany.fetchStatus !== commonStatuses.loaded) &&
                        <PreLoader
                            id={1}
                            withLogo={true}
                        />

                    )
                }
                {
                    !this.state.companyIdValid &&
                    <Hero404 />
                }

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
