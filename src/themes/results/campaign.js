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

class campaign extends Component {
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.props.selectedCompany[globalModels.companyFields._id] !== nextProps.selectedCompany[globalModels.companyFields._id]) {
    //         this.props.genericAction(actionTypes.FETCH_CAMPAIGNS, { [globalModels.advertisementFields.companyId]: nextProps.selectedCompany[globalModels.companyFields._id] });
    //         return false;

    //     }
    //     // if (this.props.selectedCompany.campaigns !== nextProps.selectedCompany.campaigns) {
    //     //     return true;
    //     // }

    //     if (this.state !== nextState) {
    //         return true;
    //     }
    //     return false;
    // }

    // componentDidMount() {
    //     this.props.genericAction(actionTypes.FETCH_CAMPAIGNS, { [globalModels.advertisementFields.companyId]: this.props.selectedCompany[globalModels.companyFields._id] });

    // }
    render() {
        return (
            <div>
                {
                    this.props.selectedCampaign.advertisements.fetchStatus === commonStatuses.loaded &&
                    <React.Fragment>
                        <HeaderTeam />
                        <div className="main">
                            <Hero pageTitle={"Blog No Sidebar"} />
                            <Breadcrumb name={"Blog No Sidebar"} />
                            <AdvertisementsGrid />
                        </div>
                        <FooterAdmeBrands withoutNewsletter={true} />
                    </React.Fragment>
                }
                {
                    this.props.selectedCampaign.advertisements.fetchStatus === commonStatuses.loading &&
                    <React.Fragment>
                        <Facebook
                            foregroundColor="#9629e6"
                            backgroundColor="#bf00dc"
                            style={{
                                margin: "5%"
                            }}
                        />
                    </React.Fragment>
                }
                {
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
        selectedCampaign: state.companies.selectedCampaign
    };
}

function mapDispatchToProps(dispatch) {
    return {
        genericAction: bindActionCreators(genericAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(campaign);
