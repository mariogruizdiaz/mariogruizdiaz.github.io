import React, { Component } from "react";
import { connect } from "react-redux";
import { genericAction } from "../../state/actions";
import { bindActionCreators } from "redux";
import ImageLoader from "../Loaders/ImageLoader";
import AdvertisementDetails from "./AdvertisementDetails";
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import Lightbox from 'react-image-lightbox';
import { TailSpin } from 'react-loader-spinner'; 


class Advertisement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            loading: false,
        };

        this.handleImageClick = this.handleImageClick.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
    }

    handleImageClick() {
        this.setState({ isOpen: true });
    }

    closeLightbox() {
        this.setState({ isOpen: false });
    }

    componentDidMount() {

    }

    render() {
      const { isOpen, loading } = this.state;
        return (
            <React.Fragment>
                <div className="col-lg-4 col-md-6 col-sm-8" > 
                    <div className="text-center bg-white single-pricing-pack mt-4 ">
                        <div className="price-img my-4 justify-content-center" style={{ position: 'relative' }}>
                            <ImageLoader source={this.props.ad.multimediaUri} alt="Ad" className="img-fluid" color="rgba(255, 255, 255, 1)" secondaryColor="rgba(150, 41, 230, 1)" />
                            <IconButton
                                onClick={this.handleImageClick}
                                style={{ 
                                    position: 'absolute',
                                    bottom: '10px',
                                    right: '10px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.8)'
                                }}
                                aria-label="zoom"
                            >
                                <SearchIcon style={{ color: '#000' }} />
                            </IconButton>
                        </div>
                        {/* <div className="border-0 pricing-header">
                            <h6 className="post-title" style={{ height: "40px" }}><a href={hastRef} >{`${this.props.ad.resources.hashtag.value} `}</a>{this.props.ad.caption}</h6>
                        </div> */}
                        <AdvertisementDetails
                            ad={this.props.ad}
                        />
                    </div>
                </div>
                {loading && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1000
                    }}>
                        <TailSpin
                            height="80"
                            width="80"
                            color="#fff"
                            ariaLabel="tail-spin-loading"
                            visible={true}
                        />
                    </div>
                )}

                {isOpen && (
                    <Lightbox
                        mainSrc={this.props.ad.multimediaUri}
                        onCloseRequest={this.closeLightbox}
                        enableZoom={false} // Desactivar el zoom predeterminado
                        toolbarButtons={[]} // Opcional: Personalizamos completamente los botones
                    />
                )}
                {isOpen && (
                    <div style={{
                        position: 'fixed',
                        top: 20, // Cambia esta posición según tus necesidades
                        right: 20,
                        zIndex: 10000 // Asegúrate de que esté por encima de otros elementos
                    }}>
                        <IconButton
                            key="close"
                            title="Close"
                            onClick={this.closeLightbox}
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', margin: '5px' }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </div>
                )}
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