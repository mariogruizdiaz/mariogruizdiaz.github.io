import React, { Component } from "react";
import { connect } from "react-redux";
import * as globalModels from "influencers-models";

class CampaignDetailsBreadcrumb extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    //const brandRedirect = this.props.security.authenticated? `/#/companies` : `/#/companies/${this.props.selectedCompany[globalModels.companyFields._id]}`
    return (
      <React.Fragment>
        <div className="breadcrumb-bar gray-light-bg border-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="custom-breadcrumb">
                            <ol className="breadcrumb pl-0 mb-0 bg-transparent">
                                <li className="breadcrumb-item"><a href="/#">Home</a></li>
                                {/* <li className="breadcrumb-item"><a href={brandRedirect}>{this.props.dictionary.general.brandsLabel}</a></li> */}
                                {
                                  this.props.security.authenticated && this.props.security.permissions.find(item => item === 'readCompanies') &&
                                  <li className="breadcrumb-item"><a href="/#companies">{this.props.dictionary.general.brandsLabel}</a></li>
                                }
                                <li className="breadcrumb-item"><a href={`/#/companies/${this.props.selectedCompany[globalModels.companyFields._id]}`}>{this.props.selectedCompany.name}</a></li>
                                <li className="breadcrumb-item active">{this.props.selectedCampaign.name}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
    dictionary: state.i18n.dictionary,
    selectedCompany: state.companies.selectedCompany,
    selectedCampaign: state.companies.selectedCampaign,
    security: state.security
}))(CampaignDetailsBreadcrumb);
