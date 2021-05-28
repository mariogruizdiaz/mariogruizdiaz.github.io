import React from "react";
import _data from "../../data";

export default class Pricing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: {}
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */

    this.setState({
      price: _data.price
    });
  }

  render() {
    return (
      <React.Fragment>
        <section id="pricing" className={"pricing-section ptb-100 " + (this.props.isWhite && this.props.isWhite === true ? '' : 'gray-light-bg')}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-8">
                        <div className="section-heading text-center mb-4">
                            <h2>Our Flexible Price</h2>
                            <p>
                                Professional hosting at an affordable price. Distinctively recaptiualize principle-centered
                                core competencies through client-centered
                                core competencies.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-md-center justify-content-center">
                    <div className="col-12">
                        <div className="d-flex justify-content-center text-center">
                            <label className="pricing-switch-wrap">
                                <span className="beforeinput year-switch text-success">
                                Monthly
                                </span>
                                <input type="checkbox" className="d-none" id="js-contcheckbox" />
                                <span className="switch-icon"></span>
                                <span className="afterinput year-switch">
                                    Yearly
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="text-center bg-white single-pricing-pack mt-4 ">
                            <div className="price-img pt-4">
                                <img src="assets/img/priching-img-1.png" alt="price" width="120" className="img-fluid" />
                            </div>
                            <div className="py-4 border-0 pricing-header">
                                <div className="price text-center mb-0 monthly-price color-secondary" style={{display: "block"}}>$19<span>.99</span></div>
                                <div className="price text-center mb-0 yearly-price color-secondary" style={{display: "none"}}>$69<span>.99</span></div>
                            </div>
                            <div className="price-name">
                                <h5 className="mb-0">Standard</h5>
                            </div>
                            <div className="pricing-content">
                                <ul className="list-unstyled mb-4 pricing-feature-list">
                                    <li><span>Limited</span> access for a month</li>
                                    <li><span>15</span> customize sub page</li>
                                    <li className="text-deem"><span>105</span> disk space</li>
                                    <li className="text-deem"><span>3</span> domain access</li>
                                    <li className="text-deem">24/7 phone support</li>
                                </ul>
                                <a href="/#" className="btn btn-outline-brand-02 btn-rounded mb-3" target="_blank">Purchase now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="popular-price bg-white text-center single-pricing-pack mt-4">
                            <div className="price-img pt-4">
                                <img src="assets/img/priching-img-2.png" alt="price" width="120" className="img-fluid" />
                            </div>
                            <div className="py-4 border-0 pricing-header">
                                <div className="price text-center mb-0 monthly-price color-secondary" style={{display: "block"}}>$49<span>.99</span></div>
                                <div className="price text-center mb-0 yearly-price color-secondary" style={{display: "none"}}>$159<span>.99</span></div>
                            </div>
                            <div className="price-name">
                                <h5 className="mb-0">Premium</h5>
                            </div>
                            <div className="pricing-content">
                                <ul className="list-unstyled mb-4 pricing-feature-list">
                                    <li><span>Unlimited</span> access for a month</li>
                                    <li><span>25</span> customize sub page</li>
                                    <li><span>150</span> disk space</li>
                                    <li className="text-deem"><span>5</span> domain access</li>
                                    <li className="text-deem">24/7 phone support</li>
                                </ul>
                                <a href="/#" className="btn btn-brand-02 btn-rounded mb-3" target="_blank">Purchase now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="text-center bg-white single-pricing-pack mt-4">
                            <div className="price-img pt-4">
                                <img src="assets/img/priching-img-3.png" alt="price" width="120" className="img-fluid" />
                            </div>
                            <div className="py-4 border-0 pricing-header">
                                <div className="price text-center mb-0 monthly-price color-secondary" style={{display: "block"}}>$69<span>.99</span></div>
                                <div className="price text-center mb-0 yearly-price color-secondary" style={{display: "none"}}>$259<span>.99</span></div>
                            </div>
                            <div className="price-name">
                                <h5 className="mb-0">Unlimited</h5>
                            </div>
                            <div className="pricing-content">
                                <ul className="list-unstyled mb-4 pricing-feature-list">
                                    <li><span>Limited</span> access for a month</li>
                                    <li><span>15</span> customize sub page</li>
                                    <li><span>120</span> disk space</li>
                                    <li><span>5</span> domain access</li>
                                    <li>24/7 phone support</li>
                                </ul>
                                <a href="/#" className="btn btn-outline-brand-02 btn-rounded mb-3" target="_blank">Purchase now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="support-cta text-center mt-5">
                            <h5 className="mb-1"><span className="ti-headphone-alt color-primary mr-3"></span>We're Here to Help You
                            </h5>
                            <p>Have some questions? <a href="/#">Chat with us now</a>, or <a href="/#">send us an email</a> to
                                get in touch.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </React.Fragment>
    );
  }
}
