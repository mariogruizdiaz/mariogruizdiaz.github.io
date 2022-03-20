import React from "react";
import { connect } from "react-redux";

class HeroSectionCompanyPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hero: {}
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
                <section className="page-header-section ptb-100 bg-image" image-overlay="8">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="process-single-item">
                                <div className="process-icon-item left-shape">
                                    <div className="d-flex align-items-center">
                                        <div className="process-icon mr-4">
                                            <img src={this.props.selectedCompany.logo} alt="member" className="img-fluid rounded shadow-sm" />
                                        </div>
                                        <div className="col-md-9 col-lg-7">
                                            <div className="page-header-content text-white pt-4">
                                                <h1 className="text-white mb-0">{this.props.selectedCompany.name}</h1>
                                                <p className="lead">{this.props.dictionary.results.company.hero.subtitle} </p>
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
    dictionary: state.i18n.dictionary,
    selectedCompany: state.companies.selectedCompany
}))(HeroSectionCompanyPage);
