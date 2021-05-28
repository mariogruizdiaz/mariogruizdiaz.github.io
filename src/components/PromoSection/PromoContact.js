import React from "react";
import { connect } from "react-redux";

class PromoSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promo: {}
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <section className="promo-section pt-100 ">
            <div className="container">
                <div className="row justify-content-md-center justify-content-sm-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="card single-promo-card shadow-sm text-center p-3 my-3">
                            <div className="card-body">
                                <div className="pb-2">
                                    <span className="fas fa-envelope icon-size-lg color-primary"></span>
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>Mail Us</h5>
                                    <p className="mb-0">Say something to start a live chat hello@yourdomain.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card single-promo-card shadow-sm text-center p-3 my-3">
                            <div className="card-body">
                                <div className="pb-2">
                                    <span className="fas fa-headset icon-size-lg color-primary"></span>
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>24/7 Live Chat</h5>
                                    <p className="mb-0">We endeavour to answer all enquiries within 24 hours on business days.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card single-promo-card shadow-sm text-center p-3 my-3">
                            <div className="card-body">
                                <div className="pb-2">
                                    <span className="fas fa-map-marker-alt icon-size-lg color-primary"></span>
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>Visit Us</h5>
                                    <p className="mb-0">100 Yellow House, los angeles Factory, United State, 13420.</p>
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
  state
}))(PromoSection);
