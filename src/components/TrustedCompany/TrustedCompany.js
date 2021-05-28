import React from "react";
import _data from "../../data";

class TrustedCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trustedCompany: []
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */

    this.setState({
      trustedCompany: _data.trustedCompanyAboutUs
    });
  }

  render() {
    return (
      <React.Fragment>
        <section className="client-section ptb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="section-heading text-center mb-5">
                            <h2>Valuable Customers</h2>
                            <p>
                                Rapidiously morph transparent internal or sources whereas resource sucking e-business. Conveniently innovate compelling internal.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-12">
                        <div className="owl-carousel owl-theme clients-carousel dot-indicator">
                            <div className="item single-customer">
                                <img src="assets/img/customers/clients-logo-01.png" alt="client logo" className="customer-logo" />
                            </div>
                            <div className="item single-customer">
                                <img src="assets/img/customers/clients-logo-02.png" alt="client logo" className="customer-logo" />
                            </div>
                            <div className="item single-customer">
                                <img src="assets/img/customers/clients-logo-03.png" alt="client logo" className="customer-logo" />
                            </div>
                            <div className="item single-customer">
                                <img src="assets/img/customers/clients-logo-04.png" alt="client logo" className="customer-logo" />
                            </div>
                            <div className="item single-customer">
                                <img src="assets/img/customers/clients-logo-05.png" alt="client logo" className="customer-logo" />
                            </div>
                            <div className="item single-customer">
                                <img src="assets/img/customers/clients-logo-06.png" alt="client logo" className="customer-logo" />
                            </div>
                            <div className="item single-customer">
                                <img src="assets/img/customers/clients-logo-07.png" alt="client logo" className="customer-logo" />
                            </div>
                            <div className="item single-customer">
                                <img src="assets/img/customers/clients-logo-08.png" alt="client logo" className="customer-logo" />
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

export default TrustedCompany;
