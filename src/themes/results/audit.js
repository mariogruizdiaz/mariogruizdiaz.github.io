import React, { Component } from "react";
import { connect } from "react-redux";
import { genericAction } from "../../state/actions";
import { bindActionCreators } from "redux";

import HeaderAudit from "../../components/Header/headerAudit";
import Hero from "../../components/Results/HeroSectionAuditPage";
import { actionTypes } from "../../state/actionTypes";
import * as globalModels from "influencers-models";
import {  withRouter } from "react-router";
import Hero403 from "../../components/HeroSection/HeroSection403";
import Hero401 from "../../components/HeroSection/HeroSection401";
import { Facebook } from 'react-content-loader';
import { commonStatuses } from "../../state/models/common";
import { PermissionHelper } from '../../state/helpers/security';

class company extends Component {
    componentDidMount() {
      this.props.security.company.id ? this.fetchAdvertisement() : this.props.history.push(`/Login?from=audit&id=${this.props.match.params.advertisementId}`);
    }

    componentDidUpdate(prevProps) {
      if (prevProps.security !== this.props.security) {
        if (!this.props.security.authenticated) {
          this.props.history.push(`/Login?from=audit&id=${this.props.match.params.advertisementId}`)
        }
      }
    }

    fetchAdvertisement = () => {
      const advertisementId = this.props.match.params.advertisementId;
      if (advertisementId) {
          this.props.genericAction(actionTypes.FETCH_ADVERTISEMENT, {
              [globalModels.advertisementFields._id]: advertisementId,
              [globalModels.advertisementFields.companyId]: this.props.security.company.id
          });
      }
    }

    canViewComponent() {
      return this.props.security.authenticated && PermissionHelper.canViewComponent(this.props.security.permissions, 'AuditComponent', null, this.props.security.company.id);
    }

    render() {
        if(!this.canViewComponent()) {
            return (
              <React.Fragment>
               <HeaderAudit />
               <Hero401 />
              </React.Fragment>
            )
        }
        return (
            <div>
                {
                    !!this.props.advertisement._id ?
                    (
                        <React.Fragment>
                            <HeaderAudit />
                            <div>
                                <div className="main">
                                    <Hero />
                                </div>
                            </div>
                        </React.Fragment>
                    )
                    :
                    (
                      <React.Fragment>
                        <HeaderAudit />
                        <Hero403 />
                      </React.Fragment>
                    )
                }
                {
                    this.props.advertisement.fetchStatus === commonStatuses.loading &&
                        <React.Fragment>
                            <div className="row">
                                <div className="col-md-12">
                                    <Facebook
                                    foregroundColor="#9629e6"
                                    backgroundColor="#bf00dc"
                                    style={{
                                        margin: "5%"
                                    }}
                                    />
                                </div>
                            </div>

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
        security: state.security,
        advertisement: state.advertisement
    };
}

function mapDispatchToProps(dispatch) {
    return {
        genericAction: bindActionCreators(genericAction, dispatch)
    };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(company));
