import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="counter-section gradient-bg ptb-40">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="text-white p-2 count-data text-center my-3">
                            <span className="fas fa-thumbs-up icon-size-lg mb-2"></span>
                            <h3 className="count-number mb-1 text-white font-weight-bolder">3</h3>
                            <span>{this.props.dictionary.counters.socialNetworksConnected}</span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="text-white p-2 count-data text-center my-3">
                            <span className="fas fa-grin-hearts icon-size-lg mb-2"></span>
                            <h3 className="count-number mb-1 text-white font-weight-bolder">112</h3>
                            <span>{this.props.dictionary.counters.betaTesterUsers}</span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="text-white p-2 count-data text-center my-3">
                            <span className="fas fa-copyright icon-size-lg mb-2"></span>
                            <h3 className="count-number mb-1 text-white font-weight-bolder">16</h3>
                            <span>{this.props.dictionary.counters.betaTesterBrands}</span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="text-white p-2 count-data text-center my-3">
                            <span className="fas fa-hand-holding-usd icon-size-lg mb-2"></span>
                            <h3 className="count-number mb-1 text-white font-weight-bolder">8</h3>
                            <span>{this.props.dictionary.counters.currencyIntegrated}</span>
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
    dictionary: state.i18n.dictionary
}))(Counter);
