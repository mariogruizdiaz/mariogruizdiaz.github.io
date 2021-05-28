import React from "react";

class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <section className="ptb-100 gray-light-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-8">
                        <div className="section-heading mb-3 text-center">
                            <h2>Frequently Asked Questions</h2>
                            <p className="lead">
                                Quickly morph client-centric results through performance based applications. Proactively facilitate professional human capital for cutting-edge.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="single-faq mt-4">
                            <h5>How can I pay for this?</h5>
                            <p>Intrinsicly implement high standards in strategic theme areas via inexpensive solutions.
                                Assertively conceptualize prospective bandwidth whereas xpedite intuitive services rather than process-centric.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single-faq mt-4">
                            <h5>Is it possible to pay yearly?</h5>
                            <p>Assertively iterate user friendly innovation without open-source markets. Monotonectally extend
                                resource sucking without high-payoff paradigms. Objectively customize sound relationships. </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single-faq mt-4">
                            <h5>Do you offer discounts on multiple items?</h5>
                            <p>Dramatically target focused testing procedures after holistic ideas. Collaboratively maximize
                                high-payoff ROI and value-added products. Distinctively deliver cooperative whereas customized</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single-faq mt-4">
                            <h5>Is VAT included in plan prices?</h5>
                            <p>Distinctively simplify high-quality initiatives for highly efficient applications. Monotonectally
                                repurpose integrated customer service after magnetic e-services matrix exceptional results. </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single-faq mt-4">
                            <h5>Will I pay more for some features?</h5>
                            <p>Enthusiastically pontificate resource-leveling supply chains whereas scalable markets.
                                Authoritatively streamline resource Continually re-engineer ethical niches re-engineer ethical niches with real-time e-tailers.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single-faq mt-4">
                            <h5>Why are there no limits on the number of messages?</h5>
                            <p>Assertively target turnkey ideas for market-driven portals.Continually re-engineer ethical niches with real-time e-tailers
                                intellectual capital whereas 2.0 mindshare cultivate prospective process improvements .</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Faq;
