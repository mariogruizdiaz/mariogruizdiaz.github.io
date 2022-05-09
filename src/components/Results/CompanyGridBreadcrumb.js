import React, { Component } from "react";
import { connect } from "react-redux";

class CompanyGridBreadcrumb extends Component {
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
        <div className="breadcrumb-bar gray-light-bg border-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="custom-breadcrumb">
                            <ol className="breadcrumb pl-0 mb-0 bg-transparent">
                                <li className="breadcrumb-item"><a href="/#">Home</a></li>
                                <li className="breadcrumb-item active">{this.props.dictionary.general.brandsLabel}</li>
                                <li className="breadcrumb-item active">{this.props.companyName}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
    dictionary: state.i18n.dictionary,
    selectedCompany: state.companies.selectedCompany
}))(CompanyGridBreadcrumb);
