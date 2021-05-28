import React from "react";

class SingleTeamMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamMember: {}
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
        <section className="team-single-section ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-12 col-sm-12 col-lg-6">
                        <div className="team-single-img">
                            <img src="assets/img/team/6.jpg" alt="member" className="img-fluid rounded shadow-sm" />
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-6">
                        <div className="team-single-text">
                            <div className="team-name mb-4">
                                <h4 className="mb-1">Lily Henry</h4>
                                <span>Managing Director</span>
                            </div>
                            <ul className="team-single-info">
                                <li><strong>Phone:</strong><span> (+123) 123-456-789</span></li>
                                <li><strong>Email:</strong><span> yourname@domain.com</span></li>
                            </ul>
                            <div className="text-content mt-20">
                                <p>Authoritatively deploy fully researched leadership skills whereas one-to-one best
                                    practices. Monotonectally aggregate virtual imperatives and accurate technology.
                                    Dynamically streamline progressive sources before user friendly.</p>
                                <p>Enthusiastically synthesize cross-unit technology for sticky results.
                                </p>
                                <p>Progressively productize vertical alignments after sticky process improvements. Competently scale transparent methods of empowerment and visionary products.</p>
                            </div>
                            <ul className="list-inline social-list-default social-color background-color social-hover-2">
                                <li className="list-inline-item">
                                    <a className="facebook" href="/#" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="twitter" href="/#" target="_blank"><i className="fab fa-twitter"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="dribbble" href="/#" target="_blank"><i className="fab fa-dribbble"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="linkedin" href="/#" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6 col-sm-6 col-12">
                        <div className="section-heading">
                            <h5>Activities And Skills</h5>
                            <div className="section-heading-line-left"></div>
                        </div>
                        <ul className="check-list-wrap pt-3">
                            <li><strong>Big Data Consulting</strong> – Holisticly leverage existing tactical core competencies with error-free methods of empowerment. Holisticly foster client-centric partnerships.</li>
                            <li><strong>Machine Learning</strong> – Assertively engage backend web-readiness through efficient web services enthusiastically innovate frictionless.</li>
                            <li><strong>Artificial Intelligence</strong> – Dynamically incubate transparent technologies after cost effective action items.</li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-sm-6 col-12">
                        <div className="section-heading mt-40">
                            <h5>Professional Skills</h5>
                            <div className="section-heading-line-left"></div>
                        </div>
                        <div className="skill-content-wrap">
                            <p>Holisticly whiteboard low-risk high-yield e-services vis-a-vis user-centric data. Competently benchmark communities whereas interactive.</p>
                            <div className="progress-item">
                                <div className="progress-title">
                                    <h6>Technical skills<span className="float-right"><span className="progress-number">80</span>%</span>
                                    </h6>
                                </div>
                                <div className="progress">
                                    <span style={{width: "80%"}}><span className="progress-line"></span></span>
                                </div>
                            </div>
                            <div className="progress-item">
                                <div className="progress-title">
                                    <h6>Marketing<span className="float-right"><span className="progress-number">70</span>%</span>
                                    </h6>
                                </div>
                                <div className="progress">
                                    <span style={{width: "70%"}}><span className="progress-line"></span></span>
                                </div>
                            </div>
                            <div className="progress-item">
                                <div className="progress-title">
                                    <h6>Web Consulting<span className="float-right"><span className="progress-number">85</span>%</span>
                                    </h6>
                                </div>
                                <div className="progress">
                                    <span style={{width: "85%"}}><span className="progress-line"></span></span>
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

export default SingleTeamMember;
