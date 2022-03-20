import React from "react";
import { connect } from "react-redux";
import _data from "../../state/data";

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

    this.setState({
      promo: _data.promo
    });
  }

  render() {
    return (
      <React.Fragment>
        <section className="promo-section ptb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="section-heading text-center">
                            <h2>Why Adme is different?</h2>
                            <p>Adme recognizes you as the main protagonist in the world of social networks.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center justify-content-sm-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0 single-promo-card single-promo-hover text-center p-2 mt-4">
                            <div className="card-body">
                                <div className="pb-2">
                                    <span className="fas fa-cubes icon-size-lg color-primary"></span>
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>Post from just one app</h5>
                                    <p className="mb-0">The Adme app let's you to post photos in all your social networks at once, and make money at the same time if you sponsor it</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0 single-promo-card single-promo-hover text-center p-2 mt-4">
                            <div className="card-body">
                                <div className="pb-2">
                                    <span className="fas fa-headset icon-size-lg color-primary"></span>
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>Your photo, your money</h5>
                                    <p className="mb-0">Products and services that you paid for appear in your photos. So why don't you get money for sharing? Adme makes it possible</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0 single-promo-card single-promo-hover text-center p-2 mt-4">
                            <div className="card-body">
                                <div className="pb-2">
                                    <span className="fas fa-lock icon-size-lg color-primary"></span>
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>Make money by referrals</h5>
                                    <p className="mb-0">Adme pays you a percentage of the money your referrals continually earn. So the more people in your network, the more money you will earn doing nothing.</p>
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
