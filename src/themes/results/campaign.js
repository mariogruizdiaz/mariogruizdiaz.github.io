import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { genericAction } from "../../state/actions";
import HeaderTeam from "../../components/Header/headerTeam";
import Hero from "../../components/Results/HeroSectionCampaignPage";
import Breadcrumb from "../../components/Results/CampaignDetailsBreadcrumb";
import AdvertisementsGrid from "../../components/Results/AdvertisementsGrid";
import FooterAdmeBrands from "../../components/Footer/FooterAdmeBrands";
import { Facebook } from 'react-content-loader';
import { commonStatuses } from "../../state/models/common";
import Hero404 from "../../components/HeroSection/HeroSection404";
import { Redirect } from "react-router-dom";
import { PermissionHelper } from '../../state/helpers/security';
import { actionTypes } from "../../state/actionTypes";
import * as globalModels from "influencers-models";

class campaign extends Component {

    componentDidMount() {
      this.props.genericAction(actionTypes.FETCH_ADVERTISEMENTS, {[globalModels.advertisementFields.campaignId]: this.props.match.params.campaignId});
    }
    canViewComponent() {
      const { companyId } = this.props.match.params;
      return this.props.security.authenticated && PermissionHelper.canViewComponent(this.props.security.permissions, 'CampaignComponent', companyId, this.props.security.company.id)
    }
    render() {
      if(!this.canViewComponent()) {
            return <Redirect to={{pathname: this.props.location?.state?.from? this.props.location.state.from : "/"}}/>;
        }
        return (
          
            <div>
                {
                    this.props.selectedCampaign.advertisements.fetchStatus === commonStatuses.loaded ?
                    <React.Fragment>
                        <HeaderTeam />
                        <div className="main">
                            <Hero pageTitle={"Blog No Sidebar"} />
                            <Breadcrumb name={"Blog No Sidebar"} />
                            <AdvertisementsGrid isWhite={false}/>
                        </div>
                        <FooterAdmeBrands withoutNewsletter={true} />
                    </React.Fragment>
                :
                    this.props.selectedCampaign.advertisements.fetchStatus === commonStatuses.loading ?
                    <React.Fragment>
                        <Facebook
                            foregroundColor="#9629e6"
                            backgroundColor="#bf00dc"
                            style={{
                                margin: "5%"
                            }}
                        />
                    </React.Fragment>
                :
                    this.props.selectedCampaign.advertisements.fetchStatus === commonStatuses.failed &&
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
        selectedCompany: state.companies.selectedCompany,
        selectedCampaign: state.companies.selectedCampaign,
        security: state.security
    };
}

function mapDispatchToProps(dispatch) {
    return {
        genericAction: bindActionCreators(genericAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(campaign);
