import React, { Component, createRef } from "react";
import { TextField, Button, Modal, Typography, Divider, CardContent, CardActions, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import * as globalModels from "influencers-models";
import { actionTypes } from "../../state/actionTypes";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { commonStatuses } from "../../state/models/common";
import { genericAction } from "../../state/actions";
import moment from 'moment';
import ExpandableText from '../../state/helpers/expandableText';

class SearchModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            modalSearchQuery: "",
            modalSearchQueryError: false
        };
        this.searchInputRef = createRef(); // Ref para foco automático
    }

    // Abrir el modal y limpiar resultados anteriores
    handleOpenModal = () => {
        this.props.genericAction(actionTypes.CLEAN_ADVERTISEMENT_BY_CODE);
        this.setState({ modalSearchQuery: "" }, () => {
            setTimeout(() => {
                if (this.searchInputRef.current) {
                    this.searchInputRef.current.focus(); // Foco automático en el input del modal
                }
            }, 200);
        });
        this.setState({ modalOpen: true });
    };

    // Cerrar el modal
    handleCloseModal = () => {
        this.setState({ modalOpen: false, modalSearchQuery: "" });
        this.props.genericAction(actionTypes.CLEAN_ADVERTISEMENT_BY_CODE);
    };

    // Ejecutar búsqueda dentro del modal
    handleModalSearch = () => {
        const { modalSearchQuery } = this.state;
        if (modalSearchQuery && modalSearchQuery.length === 8) {
            this.setState({modalSearchQueryError: false})
            this.props.genericAction(actionTypes.FETCH_ADVERTISEMENT_BY_CODE, {
                captionIdentifier: modalSearchQuery.toUpperCase(),
                [globalModels.advertisementFields.companyId]: this.props.security.company.id,
            });
        } else {this.setState({modalSearchQueryError: true})}

        
    };

    // Manejar presionar "Enter" en el input de búsqueda
    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          if (this.state.modalSearchQuery.length === 8) {
            this.setState({modalSearchQueryError: false})
            this.handleModalSearch();
          } else this.setState({modalSearchQueryError: true})
        }
        this.state.modalSearchQuery.length === 8 && this.setState({modalSearchQueryError: false});
    };

    render() {
        const { advertisement } = this.props;
        const { modalOpen, modalSearchQuery } = this.state;

        return (
            <React.Fragment>
                <Button className="btn text-white btn-rounded mb-3" variant="contained" onClick={this.handleOpenModal} startIcon={<SearchIcon />}>
                    {this.props.dictionary.results.searcher.button}
                </Button>

                <Modal open={modalOpen} onClose={this.handleCloseModal}>
                    <div className="row align-items-center justify-content-md-center justify-content-center">
                      <div className="col-lg-4 col-md-6 col-sm-8">
                          <div className="popular-price bg-white text-center single-pricing-pack mt-4">
                            <IconButton
                                aria-label="close"
                                onClick={this.handleCloseModal}
                                sx={{ position: 'absolute', right: 8, top: 8 }}
                            >
                                <CloseIcon />
                            </IconButton>
                             <div className="py-4 border-0 pricing-header">
                            <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                              {this.props.dictionary.results.searcher.title}
                            </Typography>
                            </div>
                             <CardContent>
                            <TextField
                                label={this.props.dictionary.results.searcher.label}
                                variant="outlined"
                                fullWidth
                                inputProps={{ maxLength: 8, minLength: 8 }}
                                value={modalSearchQuery.toUpperCase()}
                                error={this.state.modalSearchQueryError}
                                onChange={(e) => this.setState({ modalSearchQuery: e.target.value })}
                                onKeyPress={this.handleKeyPress}
                                inputRef={this.searchInputRef}
                            />
                            </CardContent>
                            <div className="pricing-content">
                            <CardActions>
                            <Button 
                              variant="contained" 
                              color="primary" 
                              fullWidth 
                              onClick={this.handleModalSearch}
                              disabled={advertisement.fetchStatus === commonStatuses.loading }
                              >
                                {advertisement.fetchStatus === commonStatuses.loading ? this.props.dictionary.results.searcher.searching : this.props.dictionary.results.searcher.search }
                            </Button>
                            </CardActions>
                            </div>
                            { advertisement._id ? 
                              <React.Fragment>
                                 <Divider />
                                <div className="pricing-content">
                                      {
                                        [globalModels.advertisementStatusEnum.WaitingForCustomerAudit, globalModels.advertisementStatusEnum.WaitingForPlatformAudit].includes(this.props.advertisement.status) ?
                                          <div className={`message-box d-block alert-warning alert`}>
                                            {this.props.dictionary.audtiAdvertisemnt.pending}
                                          </div>
                                        :
                                        this.props.advertisement.status === globalModels.advertisementStatusEnum.Approved ? 
                                         <div className={`message-box d-block alert-success alert`}>
                                            {this.props.dictionary.audtiAdvertisemnt.approvedAd}
                                          </div>
                                          :
                                          <div className={`message-box d-block alert-danger alert`}>
                                            {this.props.dictionary.audtiAdvertisemnt.rejectedAd}
                                          </div>
                                      }
                                    </div>
                              <div className="py-4 border-0 pricing-header">
                                <h5 className="text mb-0 color-secondary"> <ExpandableText text={this.props.advertisement.campaignName} maxChars={35} /></h5>
                              </div>
                              <div className="price-name">
                                         <h6 className="mb-0 text">
                                          {
                                            this.props.advertisement.campaignType === globalModels.campaignTypeEnum.Advertising &&
                                           <React.Fragment>
                                              {this.props.dictionary.audtiAdvertisemnt.brief}
                                              <ExpandableText text={this.props.advertisement._campaign.brief ? this.props.advertisement._campaign.brief : ""} maxChars={35} />
                                           </React.Fragment>
                                          }
                                        </h6>
                                    </div>
                              <div className="pricing-content">
                                  <ul className="list-unstyled mb-4 pricing-feature-list">
                                      <li><span>{this.props.dictionary.audtiAdvertisemnt.willBePaidWith}</span> {
                                        this.props.advertisement._campaign.paymentType === globalModels.campaignPaymentTypeEnum.Product ? this.props.advertisement._campaign.productPaymentDescription : `$${this.props.advertisement._campaign.customAdPrice}`
                                      }</li>
                                      <li><span>{this.props.dictionary.audtiAdvertisemnt.creation} </span>{moment(this.props.advertisement.creationDt).fromNow()}</li>
                                      <li><span>{this.props.dictionary.audtiAdvertisemnt.campaignType} </span> {`${this.props.advertisement.campaignType}`}</li>
                                      <li><span>{this.props.dictionary.audtiAdvertisemnt.creatorUser}</span> {`${this.props.advertisement._person.firstName} ${this.props.advertisement._person.lastName ? this.props.advertisement._person.lastName : ''}`}</li>
                                  </ul>
                                  {advertisement._campaign.paymentType === globalModels.campaignPaymentTypeEnum.Money ?
                                        <div className={`message-box d-block alert-warning alert`}>
                                          {this.props.dictionary.results.searcher.auditLabel}
                                        </div>
                                    :
                                   advertisement.status === (globalModels.advertisementStatusEnum.WaitingForCustomerAudit || globalModels.advertisementStatusEnum.WaitingForPlatformAudit) ?
                                      <a href={`/#/audit/${this.props.advertisement._id}`} target="_blank" without rel="noopener noreferrer">
                                        <CardActions>
                                          <Button variant="contained" color="secondary" fullWidth>
                                            {this.props.dictionary.results.searcher.auditButton}
                                        </Button>
                                        </CardActions>
                                      </a>
                                      :
                                      <a href={`/#/audit/${this.props.advertisement._id}`} target="_blank" without rel="noopener noreferrer">
                                        <CardActions>
                                          <Button variant="contained" color="secondary" fullWidth>
                                              {this.props.dictionary.results.searcher.goToAd}
                                          </Button>
                                        </CardActions>
                                      </a>
                                    }
                              </div>
                            </React.Fragment>: (
                              <React.Fragment>
                                <Divider />
                                {advertisement.fetchStatus === commonStatuses.notAvailable && (
                                  <div className="pricing-content">
                                  <div className={`message-box d-block alert-danger alert`}>
                                    {this.props.dictionary.results.searcher.nonExistentAd}
                                  </div>
                                  </div>
                                )}
                              </React.Fragment>
                          )}
                          </div>
                          
                      </div>
                    </div>
                </Modal>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        advertisement: state.advertisement,
        security: state.security,
        dictionary: state.i18n.dictionary,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        genericAction: bindActionCreators(genericAction, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchModal);