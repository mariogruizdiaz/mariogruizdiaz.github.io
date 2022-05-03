import React, { Component } from "react";
import { connect } from "react-redux";
import { genericAction } from "../../state/actions";
import { bindActionCreators } from "redux";
import ImageLoader from "../Loaders/ImageLoader";
import AdvertisementDetails from "./AdvertisementDetails";


class Advertisement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // redirect: false
        };
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.props.selectedCompany[globalModels.companyFields._id] !== nextProps.selectedCompany[globalModels.companyFields._id]) {
    //         this.props.genericAction(actionTypes.FETCH_CAMPAIGNS, { [globalModels.advertisementFields.companyId]: nextProps.selectedCompany[globalModels.companyFields._id] });
    //         return false;

    //     }
    //     if (this.props.selectedCompany.campaigns !== nextProps.selectedCompany.campaigns) {
    //         return true;
    //     }

    //     if(this.state !== nextState){
    //         return true;
    //     }
    //     return false;
    // }

    componentDidMount() {

    }

    handleClick = (e, campaignId) => {
        // e.preventDefault();
        // const clickedCampaign = this.props.selectedCompany.campaigns.items.find(i => i[globalModels.campaignFields._id] === campaignId);
        // this.props.genericAction(actionTypes.SELECT_CAMPAIGN, { ...clickedCampaign });
        // this.setState({
        //     redirect: true
        //   });
    };

    render() {
        const hastRef = `https://www.facebook.com/hashtag/${this.props.ad.resources.hashtag.value.replace('#', '')}`;
        return (
            <React.Fragment>
                <div className="col-lg-4 col-md-6 col-sm-8" >
                    <div className="text-center bg-white single-pricing-pack mt-4 ">
                        <div className="price-img my-4 justify-content-center" style={{ height: "240px" }}>
                            <ImageLoader source={this.props.ad.multimediaUri} alt="Ad" className="img-fluid" color="rgba(255, 255, 255, 1)" secondaryColor="rgba(150, 41, 230, 1)" />
                        </div>
                        <div className="border-0 pricing-header">
                            <h6 className="post-title" style={{ height: "40px" }}><a href={hastRef} >{`${this.props.ad.resources.hashtag.value} `}</a>{this.props.ad.caption}</h6>
                        </div>
                        <AdvertisementDetails
                            ad={this.props.ad}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        dictionary: state.i18n.dictionary,
        selectedCampaign: state.companies.selectedCampaign
    };
}

function mapDispatchToProps(dispatch) {
    return {
        genericAction: bindActionCreators(genericAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Advertisement);
