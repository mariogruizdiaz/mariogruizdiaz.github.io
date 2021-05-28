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
        <section id="faq" className={"ptb-100 " + (this.props.isGray && this.props.isGray === true ? 'gray-light-bg' : '')}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-8">
                        <div className="section-heading text-center mb-5">
                            <h2>Frequently Asked Queries</h2>
                            <p>Efficiently productivate reliable paradigms before ubiquitous models. Continually utilize frictionless expertise whereas tactical relationships. Still have questions? Contact us</p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-12 col-lg-6 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
                        <div className="img-wrap">
                            <img src="assets/img/health.png" alt="download" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div id="accordion" className="accordion faq-wrap">
                            <div className="card mb-3">
                                <a className="card-header " data-toggle="collapse" href="#collapse0" aria-expanded="false">
                                    <h6 className="mb-0 d-inline-block">Which license do I need?</h6>
                                </a>
                                <div id="collapse0" className="collapse show" data-parent="#accordion">
                                    <div className="card-body white-bg">
                                        <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&#x27;t heard of them accusamus labore sustainable VHS. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card my-3">
                                <a className="card-header collapsed" data-toggle="collapse" href="#collapse1" aria-expanded="false">
                                    <h6 className="mb-0 d-inline-block">How do I get access to a theme?</h6>
                                </a>
                                <div id="collapse1" className="collapse " data-parent="#accordion">
                                    <div className="card-body white-bg">
                                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&#x27;t heard of them accusamus. Seamlessly optimize empowered testing procedures before revolutionary processes. Progressively facilitate client-centered technologies whereas extensive users. Authoritatively. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card my-3">
                                <a className="card-header collapsed" data-toggle="collapse" href="#collapse2" aria-expanded="false">
                                    <h6 className="mb-0 d-inline-block">How do I see previous orders?</h6>
                                </a>
                                <div id="collapse2" className="collapse " data-parent="#accordion">
                                    <div className="card-body white-bg">
                                        <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&#x27;t heard of them accusamus labore sustainable VHS. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <a className="card-header collapsed" data-toggle="collapse" href="#collapse3" aria-expanded="false">
                                    <h6 className="mb-0 d-inline-block">Support related issues for the template?</h6>
                                </a>
                                <div id="collapse3" className="collapse " data-parent="#accordion">
                                    <div className="card-body white-bg">
                                        <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table. Professionally embrace customer directed value vis-a-vis high-quality portals. Quickly underwhelm B2C users with maintainable benefits. </p>
                                    </div>
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

export default Faq;
