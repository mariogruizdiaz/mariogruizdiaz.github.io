import React from "react";
import { connect } from "react-redux";
import * as globalModels from "influencers-models";
import SearchModal from "../../state/helpers/searchModalAdvertisement";

class HeroSectionCampaignPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    statusDescription = {
      'Draft': this.props.dictionary.results.campaign.hero.draft,
      'OnGoing': this.props.dictionary.results.campaign.hero.onGoing,
      'Stopped': this.props.dictionary.results.campaign.hero.stopped,
      'Finished': this.props.dictionary.results.campaign.hero.finished,
    };

    render() {
        const likeCount = this.props.selectedCampaign.advertisements.items.reduce((n, item) => n + item[globalModels.advertisementFields.likeCount], 0);
        const commentCount = this.props.selectedCampaign.advertisements.items.reduce((n, item) => n + item[globalModels.advertisementFields.commentCount], 0);
        const sharedCount = this.props.selectedCampaign.advertisements.items.reduce((n, item) => n + item[globalModels.advertisementFields.sharedCount], 0);
        return (
            <React.Fragment>
                <section className="page-header-section ptb-100 bg-image" image-overlay="8">
                    <div className="background-image-wraper" style={{ backgroundImage: "url(assets/img/cta-bg.jpg)", opacity: 1 }}></div>
                    <div className="container">
                        <div className="row justify-content-center"><SearchModal /></div>
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-7">
                                <div className="page-header-content text-center text-white pt-4">
                                    <h1 className="text-white mb-0">{this.props.selectedCampaign[globalModels.campaignFields.name]}</h1>
                                    <p></p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="row align-items-center">
                          <div className="col-md-12 col-lg-6 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
                            <div className="page-header-content text-center text-white pt-4">
                              <h4 className="text-white mb-0" >{`${this.props.dictionary.results.campaign.hero.title}`} </h4>
                              <h6 className="text-white mb-0">{`${this.props.dictionary.results.campaign.hero.state} ${this.statusDescription[this.props.selectedCampaign[globalModels.campaignFields.status]]}`}</h6>
                              
                            </div>
                             <div className="row">
                                    <div className="col-sm-6 col-md-6 col-lg-3">
                                        <div className="text-white p-2 count-data text-center my-3">
                                            <span className="fas fa-cloud-upload-alt icon-size-lg mb-2"></span>
                                            <h3 className="count-number mb-1 text-white font-weight-bolder">{this.props.selectedCampaign.advertisements.items.length}</h3>
                                            <span>{this.props.dictionary.results.campaign.posts.post.postsLabel}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-3">
                                        <div className="text-white p-2 count-data text-center my-3">
                                            <span className="fas fa-users icon-size-lg mb-2"></span>
                                            <h3 className="count-number mb-1 text-white font-weight-bolder">{commentCount}</h3>
                                            <span>{this.props.dictionary.results.campaign.posts.post.commentsLabel}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-3">
                                        <div className="text-white p-2 count-data text-center my-3">
                                            <span className="fas fa-smile icon-size-lg mb-2"></span>
                                            <h3 className="count-number mb-1 text-white font-weight-bolder">{likeCount}</h3>
                                            <span>{this.props.dictionary.results.campaign.posts.post.likesLabel}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-3">
                                        <div className="text-white p-2 count-data text-center my-3">
                                            <span className="fas fa-share icon-size-lg mb-2"></span>
                                            <h3 className="count-number mb-1 text-white font-weight-bolder">{sharedCount}</h3>
                                            <span>{this.props.dictionary.results.campaign.posts.post.shareLabel}</span>
                                        </div>
                                    </div>
                              </div>
                          </div>
                          <div className="col-md-12 col-lg-6">
                          <div id="accordion" className="accordion faq-wrap">
                                <div className="card mb-3">
                                      <a className="card-header collapsed" data-toggle="collapse" href="#collapse0" aria-expanded="false">
                                          <h6 className="mb-0 d-inline-block">{`${this.props.dictionary.results.campaign.hero.typeOfCampaign} ${this.props.selectedCampaign.type}`}</h6>
                                      </a>
                                      <div id="collapse0" className="collapse" data-parent="#accordion">
                                          {this.props.selectedCampaign.type === globalModels.campaignTypeEnum.Spot &&
                                          <div className="card-body white-bg">
                                              <p>{this.props.dictionary.results.campaign.hero.spot} </p>
                                          </div>}
                                          {this.props.selectedCampaign.type === globalModels.campaignTypeEnum.Sponsorship &&
                                          <div className="card-body white-bg">
                                              <p>{this.props.dictionary.results.campaign.hero.Sponsorship} </p>
                                          </div>}
                                          {this.props.selectedCampaign.type === globalModels.campaignTypeEnum.Advertising &&
                                          <div className="card-body white-bg">
                                              <p>{this.props.dictionary.results.campaign.hero.advertising} </p>
                                          </div>}
                                      </div>
                                  </div>
                                  <div className="card my-3">
                                      <a className="card-header collapsed" data-toggle="collapse" href="#collapse1" aria-expanded="true">
                                          <h6 className="mb-0 d-inline-block">{`${this.props.dictionary.results.campaign.hero.youArePayingPart1} ${this.props.selectedCampaign.paymentType === globalModels.campaignPaymentTypeEnum.Money ? this.props.dictionary.results.campaign.hero.youArePayingPart21 : this.props.dictionary.results.campaign.hero.youArePayingPart22 }` } {this.props.selectedCampaign.paymentType === globalModels.campaignPaymentTypeEnum.Money ? this.props.selectedCampaign.customAdPrice : this.props.selectedCampaign.productPaymentDescription }</h6>
                                      </a>
                                      <div id="collapse1" className="collapse " data-parent="#accordion">
                                        {this.props.selectedCampaign.paymentType === globalModels.campaignPaymentTypeEnum.Money &&
                                          <div className="card-body white-bg">
                                              <p>{this.props.dictionary.results.campaign.hero.youArePayingWithMoney} </p>
                                          </div>
                                        }
                                        {this.props.selectedCampaign.paymentType === globalModels.campaignPaymentTypeEnum.Product &&
                                          <div className="card-body white-bg">
                                              <p>{this.props.dictionary.results.campaign.hero.youArePayingWitProduct} </p>
                                              {/* <p>{this.props.dictionary.results.campaign.hero.youArePayingFooter} </p> */}
                                          </div>
                                        }
                                        
                                      </div>
                                  </div>
                                  <div className="card my-3">
                                      <a className="card-header collapsed" data-toggle="collapse" href="#collapse2" aria-expanded="false">
                                          <h6 className="mb-0 d-inline-block">{this.props.dictionary.results.campaign.hero.advertisingCampaignConditions.title}</h6>
                                      </a>
                                      <div id="collapse2" className="collapse " data-parent="#accordion">
                                          <div className="card-body white-bg">
                                              {
                                                this.props.selectedCampaign.type === globalModels.campaignTypeEnum.Advertising ?
                                                <p>{this.props.dictionary.results.campaign.hero.advertisingCampaignConditions.advertising}</p>
                                                :
                                                this.props.selectedCampaign.type === globalModels.campaignTypeEnum.Spot ?
                                                <p>{this.props.dictionary.results.campaign.hero.advertisingCampaignConditions.spot}</p>
                                                :
                                                this.props.selectedCampaign.type === globalModels.campaignTypeEnum.Sponsorship ?
                                                <React.Fragment>
                                                  <p> {this.props.dictionary.results.campaign.hero.advertisingCampaignConditions.sponsorshipTitle}</p>
                                                  <p> {this.props.dictionary.results.campaign.hero.advertisingCampaignConditions.sponsorshipItem1}</p>
                                                  <p> {this.props.dictionary.results.campaign.hero.advertisingCampaignConditions.sponsorshipitem2}</p>
                                                </React.Fragment>
                                                : null
                                              }
                                          </div>
                                      </div>
                                  </div>
                                    {this.props.selectedCampaign.type === globalModels.campaignTypeEnum.Advertising &&
                                      <div className="card my-3">
                                        <a className="card-header collapsed" data-toggle="collapse" href="#collapse3" aria-expanded="false">
                                            <h6 className="mb-0 d-inline-block">{this.props.dictionary.results.campaign.hero.brief}</h6>
                                        </a>
                                        <div id="collapse3" className="collapse " data-parent="#accordion">
                                            <div className="card-body white-bg">
                                                  <p>{this.props.selectedCampaign.brief}</p>
                                            </div>
                                        </div>
                                      </div>
                                    }
                                  <div className="card mt-3">
                                      <a className="card-header collapsed" data-toggle="collapse" href="#collapse4" aria-expanded="false">
                                          <h6 className="mb-0 d-inline-block">
                                            {
                                            this.props.selectedCampaign.paymentType === globalModels.campaignPaymentTypeEnum.Money ?
                                            `${this.props.dictionary.results.campaign.hero.money} ${this.props.selectedCampaign.budgetAvailable} ${this.props.dictionary.results.campaign.hero.of}${this.props.selectedCampaign.investment}`
                                            :
                                            `${this.props.dictionary.results.campaign.hero.stock} ${this.props.selectedCampaign.stock}`
                                            }
                                            
                                            </h6>
                                      </a>
                                      <div id="collapse4" className="collapse " data-parent="#accordion">
                                          <div className="card-body white-bg">
                                              {
                                            this.props.selectedCampaign.paymentType === globalModels.campaignPaymentTypeEnum.Money ?
                                            `${this.props.dictionary.results.campaign.hero.spend}${this.props.selectedCampaign.budgetSpent}${this.props.dictionary.results.campaign.hero.of}${this.props.selectedCampaign.investment}`
                                            :
                                            `${this.props.dictionary.results.campaign.hero.stockAvailable}${this.props.selectedCampaign.stock}`
                                            }
                                          </div>
                                      </div>
                                  </div>
                                  <div className="card my-3">
                                      <a className="card-header collapsed" data-toggle="collapse" href="#collapse5" aria-expanded="true">
                                          <h6 className="mb-0 d-inline-block">{this.props.dictionary.results.campaign.hero.audit.title}</h6>
                                      </a>
                                      <div id="collapse5" className="collapse " data-parent="#accordion">
                                        {
                                        this.props.selectedCampaign.paymentType === globalModels.campaignPaymentTypeEnum.Money ?
                                          <div className="card-body white-bg">
                                              <p>{this.props.dictionary.results.campaign.hero.audit.money}</p>
                                          </div>
                                        :
                                        this.props.selectedCampaign.type === globalModels.campaignTypeEnum.Spot ?
                                          <div className="card-body white-bg">
                                              <p>{this.props.dictionary.results.campaign.hero.audit.spot}</p>
                                          </div>
                                        :
                                        this.props.selectedCampaign.paymentType === globalModels.campaignPaymentTypeEnum.Product &&
                                          <div className="card-body white-bg">
                                              <p>{this.props.dictionary.results.campaign.hero.audit.product1} </p>
                                              <p>{this.props.dictionary.results.campaign.hero.audit.product2}</p>
                                          </div>
                                        }
                                      </div>
                                  </div>
                          </div>
                        </div>
                        </div>
                         
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default connect(state => ({
    dictionary: state.i18n.dictionary,
    selectedCampaign: state.companies.selectedCampaign,
    selectedCompany: state.companies.selectedCompany
}))(HeroSectionCampaignPage);