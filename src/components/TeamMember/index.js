import React from "react";

class TeamMember extends React.Component {
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
        <section className={"team-two-section ptb-100 " + (this.props.isWhite && this.props.isWhite === true ? '' : 'gray-light-bg')}>
            <div className="container">
            {!(this.props.hideTitle && this.props.hideTitle  === true ) && (
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-8">
                        <div className="section-heading text-center">
                            <h2>Our Team Members</h2>
                            <p>Authoritatively mesh intuitive paradigms vis-a-vis goal-oriented partnerships. Continually extend open-source outside the box thinking after focused catalysts.</p>
                        </div>
                    </div>
                </div>
            )}
            {(this.props.item && this.props.item > 3) && (
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="single-team-wrap bg-white text-center border rounded p-4 mt-4">
                            <img src="assets/img/team/team-member-1.png" alt="team" width="120" className="img-fluid m-auto pb-4" />
                            <div className="team-content">
                                <h5 className="mb-0">Richard Ford</h5>
                                <span>Instructor of Mathematics</span>
                                <p className="mt-3">Authoritatively engage leading-edge processes tactical capital </p>
                                <ul className="list-inline social-list-default social-color icon-hover-top-bottom">
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
                    <div className="col-md-6 col-lg-3">
                        <div className="single-team-wrap bg-white text-center border rounded p-4 mt-4">
                            <img src="assets/img/team/team-member-2.png" alt="team" width="120" className="img-fluid m-auto pb-4" />
                            <div className="team-content">
                                <h5 className="mb-0">Kely Roy</h5>
                                <span>Lead Designer</span>
                                <p className="mt-3">Monotonectally engage sticky collaborative markets synergistically</p>
                                <ul className="list-inline social-list-default social-color icon-hover-top-bottom">
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
                    <div className="col-md-6 col-lg-3">
                        <div className="single-team-wrap bg-white text-center border rounded p-4 mt-4">
                            <img src="assets/img/team/team-member-3.png" alt="team" width="120" className="img-fluid m-auto pb-4" />
                            <div className="team-content">
                                <h5 className="mb-0">Gerald Nichols</h5>
                                <span>Managing Director</span>
                                <p className="mt-3">Assertively procrastinate standardized whereas technically sound</p>
                                <ul className="list-inline social-list-default social-color icon-hover-top-bottom">
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
                    <div className="col-md-6 col-lg-3">
                        <div className="single-team-wrap bg-white text-center border rounded p-4 mt-4">
                            <img src="assets/img/team/team-member-4.png" alt="team" width="120" className="img-fluid m-auto pb-4" />
                            <div className="team-content">
                                <h5 className="mb-0">Gerald Nichols</h5>
                                <span>Team Manager</span>
                                <p className="mt-3">Synergistically actualize out the-box technologies before parallel process</p>
                                <ul className="list-inline social-list-default social-color icon-hover-top-bottom">
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

                    
                    <div className="col-md-6 col-lg-3">
                        <div className="single-team-wrap bg-white text-center border rounded p-4 my-3">
                            <img src="assets/img/team/team-member-5.png" alt="team" width="120" className="img-fluid m-auto pb-4" />
                            <div className="team-content">
                                <h5 className="mb-0">Ford Richard</h5>
                                <span>Instructor of Mathematics</span>
                                <p className="mt-3">Authoritatively engage tactical capital leading-edge processes</p>
                                <ul className="list-inline social-list-default social-color icon-hover-top-bottom">
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
                    <div className="col-md-6 col-lg-3">
                        <div className="single-team-wrap bg-white text-center border rounded p-4 my-3">
                            <img src="assets/img/team/team-member-8.png" alt="team" width="120" className="img-fluid m-auto pb-4" />
                            <div className="team-content">
                                <h5 className="mb-0">Gerald Din</h5>
                                <span>Team Manager</span>
                                <p className="mt-3">Synergistically actualize out the-box technologies before process parallel</p>
                                <ul className="list-inline social-list-default social-color icon-hover-top-bottom">
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
                    <div className="col-md-6 col-lg-3">
                        <div className="single-team-wrap bg-white text-center border rounded p-4 my-3">
                            <img src="assets/img/team/team-member-6.png" alt="team" width="120" className="img-fluid m-auto pb-4" />
                            <div className="team-content">
                                <h5 className="mb-0">Roy Kely</h5>
                                <span>Lead Designer</span>
                                <p className="mt-3">Monotonectally engage sticky markets synergistically collaborative</p>
                                <ul className="list-inline social-list-default social-color icon-hover-top-bottom">
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
                    <div className="col-md-6 col-lg-3">
                        <div className="single-team-wrap bg-white text-center border rounded p-4 my-3">
                            <img src="assets/img/team/team-member-7.png" alt="team" width="120" className="img-fluid m-auto pb-4" />
                            <div className="team-content">
                                <h5 className="mb-0">Nichols Joe</h5>
                                <span>Managing Director</span>
                                <p className="mt-3">Assertively procrastinate technically sound standardized whereas</p>
                                <ul className="list-inline social-list-default social-color icon-hover-top-bottom">
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
                </div>
                )}
                {!(this.props.item && this.props.item > 3) && (
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="single-team-wrap bg-white text-center border rounded p-4 mt-4">
                            <img src="assets/img/team/team-member-1.png" alt="team" width="120" className="img-fluid m-auto pb-4" />
                            <div className="team-content">
                                <h5 className="mb-0">Richard Ford</h5>
                                <span>Instructor of Mathematics</span>
                                <p className="mt-3">Authoritatively engage leading-edge processes tactical capital </p>
                                <ul className="list-inline social-list-default social-color icon-hover-top-bottom">
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
                    <div className="col-md-6 col-lg-3">
                        <div className="single-team-wrap bg-white text-center border rounded p-4 mt-4">
                            <img src="assets/img/team/team-member-2.png" alt="team" width="120" className="img-fluid m-auto pb-4" />
                            <div className="team-content">
                                <h5 className="mb-0">Kely Roy</h5>
                                <span>Lead Designer</span>
                                <p className="mt-3">Monotonectally engage sticky collaborative markets synergistically</p>
                                <ul className="list-inline social-list-default social-color icon-hover-top-bottom">
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
                    <div className="col-md-6 col-lg-3">
                        <div className="single-team-wrap bg-white text-center border rounded p-4 mt-4">
                            <img src="assets/img/team/team-member-3.png" alt="team" width="120" className="img-fluid m-auto pb-4" />
                            <div className="team-content">
                                <h5 className="mb-0">Gerald Nichols</h5>
                                <span>Managing Director</span>
                                <p className="mt-3">Assertively procrastinate standardized whereas technically sound</p>
                                <ul className="list-inline social-list-default social-color icon-hover-top-bottom">
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
                    <div className="col-md-6 col-lg-3">
                        <div className="single-team-wrap bg-white text-center border rounded p-4 mt-4">
                            <img src="assets/img/team/team-member-4.png" alt="team" width="120" className="img-fluid m-auto pb-4" />
                            <div className="team-content">
                                <h5 className="mb-0">Gerald Nichols</h5>
                                <span>Team Manager</span>
                                <p className="mt-3">Synergistically actualize out the-box technologies before parallel process</p>
                                <ul className="list-inline social-list-default social-color icon-hover-top-bottom">
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
                    
                </div>
                )}
            </div>
        </section>
      </React.Fragment>
    );
  }
}

export default TeamMember;
