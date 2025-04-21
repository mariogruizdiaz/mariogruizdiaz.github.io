/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { genericAction } from "../state/actions";
import { actionTypes } from "../state/actionTypes";
import { getMobileOperatingSystem } from "../state/helpers/openWhatsAppLink";
import { fetchGeoData } from "../state/helpers/geo";
// import geoInfo from "../../utils/geoInfo";

class DownloadAppRedirector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirected: false
        };
    }

    

    async componentDidMount() {
    const searchParams = new URLSearchParams(this.props.location.search);
    const source = searchParams.get("source") || "unknown";
    const companyCode = searchParams.get("companyCode") || null;
    const store = searchParams.get("store") || null;
    const from = searchParams.get("from") || '';
    const prevQuery = searchParams.get("prevQuery") || undefined;
    const prevQueryParams = prevQuery ? `?${prevQuery}` : '';
    const pageSource = `/#/${from}${prevQueryParams}`;
    console.log('DownloadAppRedirector', pageSource);

    const userAgent = navigator.userAgent;
    const language = navigator.language;
    const os = (store && ["Android", "iOS"].includes(store)) ? store : getMobileOperatingSystem();
    const targetStore = os;

    const { ip, geoCountry, geoCity } = await fetchGeoData();

    this.props.genericAction(actionTypes.TRACK_APP_DOWNLOAD, {
        event: "APP_DOWNLOAD",
        source,
        userAgent: userAgent,
        language: language,
        ip: ip,
        geoCountry: geoCountry,
        geoCity: geoCity,
        companyCode: companyCode,
        store: targetStore
    });

    

    // Redirigir después de un delay (puede ser mejor con escucha a success del saga)
    setTimeout(() => {
        if (!this.state.redirected) {
            let storeUrl = null;

            if (os === "Android") {
                storeUrl = "https://play.google.com/store/apps/details?id=ar.com.adme.social.qa";
            } else if (os === "iOS") {
                storeUrl = "https://apps.apple.com/us/app/adme-%24/id1637316014";
            }

            if (storeUrl) {
                //window.open(storeUrl, '_blank', 'noopener,noreferrer');
                window.location.href = storeUrl;
            }

            //window.location.href = pageSource;

            this.setState({ redirected: true });
        }
    }, 5000);
}

render() {
    return (
        <React.Fragment>
            <div className="main">
                <section className="page-header-section ptb-100 bg-image full-height" image-overlay="8">
                    <div
                        className="background-image-wraper"
                        style={{
                            backgroundImage: "url(assets/img/cta-bg.jpg)",
                            opacity: 1,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    ></div>
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-12 col-md-8 col-lg-6 text-center">
                                <div
                                    className="login-signup-wrap p-5 text-center"
                                    style={{
                                        backgroundColor: "transparent",
                                        boxShadow: "none",
                                        border: "none"
                                    }}
                                >
                                    <img
                                        src="assets/img/admeLogoLogin.png"
                                        alt="Adme"
                                        className="img-fluid mb-4"
                                        style={{
                                            maxWidth: "160px",
                                            filter: "drop-shadow(0 0 10px rgba(0, 0, 0, 0.7))"
                                        }}
                                    />
                                    <h4 className="text-white mb-2">{this.props.dictionary.downloadAppRedirector.title}</h4>
                                    <p className="text-white">{this.props.dictionary.downloadAppRedirector.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
}



}


function mapStateToProps(state) {
    return {
        dictionary: state.i18n.dictionary,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        genericAction: bindActionCreators(genericAction, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DownloadAppRedirector));
