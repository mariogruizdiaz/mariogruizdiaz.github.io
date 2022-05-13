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
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <div className="single-team-wrap bg-white text-center border rounded p-4 mt-4">
                                    <img src={`assets/img/team/${this.props.dictionary.team.gaston.picturePath}`} alt="team" width="120" className="img-fluid m-auto pb-4" />
                                    <div className="team-content">
                                        <a href="/#teamMember/gaston"><h5 className="mb-0">{this.props.dictionary.team.gaston.fullName}</h5></a>
                                        <span>{this.props.dictionary.team.gaston.role}</span>
                                        {/* <p className="mt-3">{this.props.dictionary.team.gaston.techRoleDescription}</p> */}
                                        <ul className="list-inline social-list-default social-color icon-hover-top-bottom">
                                            <li className="list-inline-item">
                                                <a className="linkedin" href={this.props.dictionary.team.gaston.linkedinURL} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="single-team-wrap bg-white text-center border rounded p-4 mt-4">
                                    <img src={`assets/img/team/${this.props.dictionary.team.mario.picturePath}`} alt="team" width="120" className="img-fluid m-auto pb-4" />
                                    <div className="team-content">
                                        <a href="/#teamMember/mario"><h5 className="mb-0">{this.props.dictionary.team.mario.fullName}</h5></a>
                                        <span>{this.props.dictionary.team.mario.role}</span>
                                        {/* <p className="mt-3">{this.props.dictionary.team.mario.techRoleDescription}</p> */}
                                        <ul className="list-inline social-list-default social-color icon-hover-top-bottom">
                                            <li className="list-inline-item">
                                                <a className="linkedin" href={this.props.dictionary.team.mario.linkedinURL} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="single-team-wrap bg-white text-center border rounded p-4 mt-4">
                                    <img src={`assets/img/team/${this.props.dictionary.team.yulian.picturePath}`} alt="team" width="120" className="img-fluid m-auto pb-4" />
                                    <div className="team-content">
                                        <a href="/#teamMember/yulian"><h5 className="mb-0">{this.props.dictionary.team.yulian.fullName}</h5></a>
                                        <span>{this.props.dictionary.team.yulian.role}</span>
                                        {/* <p className="mt-3">{this.props.dictionary.team.yulian.techRoleDescription}</p> */}
                                        <ul className="list-inline social-list-default social-color icon-hover-top-bottom">
                                            <li className="list-inline-item">
                                                <a className="linkedin" href={this.props.dictionary.team.yulian.linkedinURL} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="single-team-wrap bg-white text-center border rounded p-4 mt-4">
                                    <img src={`assets/img/team/${this.props.dictionary.team.javy.picturePath}`} alt="team" width="120" className="img-fluid m-auto pb-4" />
                                    <div className="team-content">
                                        <a href="/#teamMember/javy"><h5 className="mb-0">{this.props.dictionary.team.javy.fullName}</h5></a>
                                        <span>{this.props.dictionary.team.javy.role}</span>
                                        {/* <p className="mt-3">{this.props.dictionary.team.javy.techRoleDescription}</p> */}
                                        <ul className="list-inline social-list-default social-color icon-hover-top-bottom">
                                            <li className="list-inline-item">
                                                <a className="linkedin" href={this.props.dictionary.team.javy.linkedinURL} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="single-team-wrap bg-white text-center border rounded p-4 mt-4">
                                    <img src={`assets/img/team/${this.props.dictionary.team.alex.picturePath}`} alt="team" width="120" className="img-fluid m-auto pb-4" />
                                    <div className="team-content">
                                        <a href="/#teamMember/alex"><h5 className="mb-0">{this.props.dictionary.team.alex.fullName}</h5></a>
                                        <span>{this.props.dictionary.team.alex.role}</span>
                                        {/* <p className="mt-3">{this.props.dictionary.team.alex.techRoleDescription}</p> */}
                                        <ul className="list-inline social-list-default social-color icon-hover-top-bottom">
                                            <li className="list-inline-item">
                                                <a className="linkedin" href={this.props.dictionary.team.alex.linkedinURL} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="single-team-wrap bg-white text-center border rounded p-4 mt-4">
                                    <img src={`assets/img/team/${this.props.dictionary.team.guille.picturePath}`} alt="team" width="120" className="img-fluid m-auto pb-4" />
                                    <div className="team-content">
                                        <a href="/#teamMember/guille"><h5 className="mb-0">{this.props.dictionary.team.guille.fullName}</h5></a>
                                        <span>{this.props.dictionary.team.guille.role}</span>
                                        {/* <p className="mt-3">{this.props.dictionary.team.guille.techRoleDescription}</p> */}
                                        <ul className="list-inline social-list-default social-color icon-hover-top-bottom">
                                            <li className="list-inline-item">
                                                <a className="linkedin" href={this.props.dictionary.team.guille.linkedinURL} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="single-team-wrap bg-white text-center border rounded p-4 mt-4">
                                    <img src={`assets/img/team/${this.props.dictionary.team.fer.picturePath}`} alt="team" width="120" className="img-fluid m-auto pb-4" />
                                    <div className="team-content">
                                        <a href="/#teamMember/fer"><h5 className="mb-0">{this.props.dictionary.team.fer.fullName}</h5></a>
                                        <span>{this.props.dictionary.team.fer.role}</span>
                                        {/* <p className="mt-3">{this.props.dictionary.team.fer.techRoleDescription}</p> */}
                                        <ul className="list-inline social-list-default social-color icon-hover-top-bottom">
                                            <li className="list-inline-item">
                                                <a className="linkedin" href={this.props.dictionary.team.fer.linkedinURL} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="single-team-wrap bg-white text-center border rounded p-4 mt-4">
                                    <img src={`assets/img/team/${this.props.dictionary.team.nico.picturePath}`} alt="team" width="120" className="img-fluid m-auto pb-4" />
                                    <div className="team-content">
                                        <a href="/#teamMember/nico"><h5 className="mb-0">{this.props.dictionary.team.nico.fullName}</h5></a>
                                        <span>{this.props.dictionary.team.nico.role}</span>
                                        {/* <p className="mt-3">{this.props.dictionary.team.nico.techRoleDescription}</p> */}
                                        <ul className="list-inline social-list-default social-color icon-hover-top-bottom">
                                            <li className="list-inline-item">
                                                <a className="linkedin" href={this.props.dictionary.team.nico.linkedinURL} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
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
