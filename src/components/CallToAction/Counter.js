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
                            <span className="fas fa-users icon-size-lg mb-2"></span>
                            <h3 className="count-number mb-1 text-white font-weight-bolder">21023</h3>
                            <span>Customers</span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="text-white p-2 count-data text-center my-3">
                            <span className="fas fa-cloud-download-alt icon-size-lg mb-2"></span>
                            <h3 className="count-number mb-1 text-white font-weight-bolder">44023</h3>
                            <span>Downloads</span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="text-white p-2 count-data text-center my-3">
                            <span className="fas fa-smile icon-size-lg mb-2"></span>
                            <h3 className="count-number mb-1 text-white font-weight-bolder">35023</h3>
                            <span>Satisfied</span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="text-white p-2 count-data text-center my-3">
                            <span className="fas fa-mug-hot icon-size-lg mb-2"></span>
                            <h3 className="count-number mb-1 text-white font-weight-bolder">2323</h3>
                            <span>Cup of Coffee</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </React.Fragment>
    );
  }
}

export default connect(state => ({}))(Counter);
