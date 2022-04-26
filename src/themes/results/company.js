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
import { Facebook } from 'react-content-loader';
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
                if (this.props.selectedCompany && companyId !== this.props.selectedCompany[globalModels.companyFields._id]) {
                    this.props.genericAction(actionTypes.FETCH_COMPANY, { [globalModels.companyFields._id]: nextProps.match.params.companyId });
                    return true;
                }
            } else {
                return false;
            }

        }

        if (this.props.selectedCompany && this.props.selectedCompany[globalModels.companyFields._id] !== nextProps.selectedCompany[globalModels.companyFields._id]) {
            return true;
        }

        return true;

    }

    componentDidMount() {
        const companyId = this.props.match.params.companyId;
        if (companyId !== undefined && companyId !== "undefined") {
            this.props.genericAction(actionTypes.FETCH_COMPANY, { [globalModels.companyFields._id]: companyId });

            if (!this.state.companyIdValid) this.setState({ companyIdValid: true });
        } else {
            if (this.state.companyIdValid) this.setState({ companyIdValid: false });
        }
    }
    render() {
        return (

            <div>
                {
                    this.state.companyIdValid &&
                    (
                        this.props.selectedCompany && this.props.selectedCompany.fetchStatus === commonStatuses.loaded &&
                        <React.Fragment>
                            <HeaderTeam />
                            <div>
                                <div className="main">
                                    <Hero />
                                    <Breadcrumb />
                                    <CampaignsGrid />
                                </div>
                                <FooterAdmeBrands withoutNewsletter={true} />
                            </div>
                        </React.Fragment>
                    )
                }
                {
                    this.state.companyIdValid &&
                    (
                        (!this.props.selectedCompany || this.props.selectedCompany.fetchStatus === commonStatuses.loading) &&
                        <React.Fragment>
                            <div className="row">
                                <div className="col-md-12">
                                    <Facebook
                                    // viewBox="-100 -100 1000 1000"
                                    foregroundColor="#9629e6"
                                    backgroundColor="#bf00dc"
                                    style={{
                                        margin: "5%"
                                    }}
                                    />
                                </div>
                            </div>

                        </React.Fragment>
                    )
                }
                {
                    (!this.state.companyIdValid || this.props.selectedCompany.fetchStatus === commonStatuses.failed) &&
                    <React.Fragment>
                        <HeaderTeam />
                        <Hero404 />
                    </React.Fragment>
                }

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        dictionary: state.i18n.dictionary,
        selectedCompany: state.companies.selectedCompany
    };
}

function mapDispatchToProps(dispatch) {
    return {
        genericAction: bindActionCreators(genericAction, dispatch)
    };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(company));
