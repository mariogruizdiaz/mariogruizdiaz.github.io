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
        <section className="promo-block ptb-100">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-6 col-lg-6">
                        <div className="promo-content-wrap">
                            <h2>We Help to Create Strategies, Design & Development</h2>
                            <p>Credibly matrix extensible sources through tactical leadership skills. Energistically strategize error-free sources vis-a-vis client-focused value. </p>
                            <ul className="check-list-wrap pt-3">
                                <li><strong>Big Data Consulting</strong> – Holisticly leverage existing tactical core competencies with error-free methods of empowerment. Holisticly foster client-centric partnerships.</li>
                                <li><strong>Machine Learning</strong> – Assertively engage backend web-readiness through efficient web services. Enthusiastically innovate frictionless e-commerce after prospective.</li>
                            </ul>
                            <ul className="list-inline mt-5 list-with-icon">
                                <li className="list-inline-item">
                                    <div className="mr-3 list-icon-box p-3 border rounded shadow-sm">
                                        <img src="assets/img/image-icon-2.png" alt="icon" className="img-fluid" />
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <div className="mr-3 list-icon-box p-3 border rounded shadow-sm">
                                        <img src="assets/img/image-icon-3.png" alt="icon" className="img-fluid" />
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <div className="mr-3 list-icon-box p-3 border rounded shadow-sm">
                                        <img src="assets/img/image-icon-4.png" alt="icon" className="img-fluid" />
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <div className="mr-3 list-icon-box p-3 border rounded shadow-sm">
                                        <img src="assets/img/image-icon-1.png" alt="icon" className="img-fluid" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4">
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
                            <div className="col-md-6 col-lg-6">
                                <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4">
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
                            <div className="col-md-6 col-lg-6">
                                <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4">
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
                            <div className="col-md-6 col-lg-6">
                                <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4">
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
