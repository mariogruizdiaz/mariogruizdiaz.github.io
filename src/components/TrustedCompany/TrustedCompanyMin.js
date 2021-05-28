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
        <section className="client-section ptb-60 gray-light-bg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-12">
                        <div className="owl-carousel owl-theme clients-carousel-2 dot-indicator">
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
