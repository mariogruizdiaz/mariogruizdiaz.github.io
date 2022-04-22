import React from "react";
import { connect } from "react-redux";

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
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-8">
                                <div className="section-heading text-center">
                                    <h2>{this.props.dictionary.team.sections.cofounders.title}</h2>
                                    <p>{this.props.dictionary.team.sections.cofounders.subtitle}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-lg-3">
                                <div className="single-team-wrap bg-white text-center border rounded p-4 mt-4">
                                    <img src="assets/img/team/team-member-1.png" alt="team" width="120" className="img-fluid m-auto pb-4" />
                                    <div className="team-content">
                                        <h5 className="mb-0">{this.props.dictionary.team.gaston.fullName}</h5>
                                        <span>{this.props.dictionary.team.gaston.role}</span>
                                        <p className="mt-3">{this.props.dictionary.team.gaston.techRoleDescription}</p>
                                        <ul className="list-inline social-list-default social-color icon-hover-top-bottom">
                                            <li className="list-inline-item">
                                                <a className="linkedin" href="https://www.linkedin.com/in/gaston-ruiz-diaz-157366bb/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="single-team-wrap bg-white text-center border rounded p-4 mt-4">
                                    <img src="assets/img/team/team-member-1.png" alt="team" width="120" className="img-fluid m-auto pb-4" />
                                    <div className="team-content">
                                        <h5 className="mb-0">{this.props.dictionary.team.mario.fullName}</h5>
                                        <span>{this.props.dictionary.team.mario.role}</span>
                                        <p className="mt-3">{this.props.dictionary.team.mario.techRoleDescription}</p>
                                        <ul className="list-inline social-list-default social-color icon-hover-top-bottom">
                                            <li className="list-inline-item">
                                                <a className="linkedin" href="https://www.linkedin.com/in/marioruizdiaz/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                                            </li>
                                        </ul>
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
    dictionary: state.i18n.dictionary
}))(TeamMember);
