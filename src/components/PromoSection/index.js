import React from "react";
import { connect } from "react-redux";
import _data from "../../data";

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
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4 shadow">
                            <div className="card-body">
                                <div className="pb-2">
                                    <span className="fas fa-concierge-bell icon-size-md color-secondary"></span>
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>Modular</h5>
                                    <p className="mb-0">All components are built to be used in combination.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4 shadow">
                            <div className="card-body">
                                <div className="pb-2">
                                    <span className="fas fa-window-restore icon-size-md color-secondary"></span>
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>Responsive</h5>
                                    <p className="mb-0">Quick is optimized to work for most devices.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4 shadow">
                            <div className="card-body">
                                <div className="pb-2">
                                    <span className="fas fa-sync-alt icon-size-md color-secondary"></span>
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>Scalable</h5>
                                    <p className="mb-0">Remain consistent while developing new features.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4 shadow">
                            <div className="card-body">
                                <div className="pb-2">
                                    <span className="fas fa-bezier-curve icon-size-md color-secondary"></span>
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>Customizable</h5>
                                    <p className="mb-0">Change a few variables and the whole theme adapts.</p>
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
