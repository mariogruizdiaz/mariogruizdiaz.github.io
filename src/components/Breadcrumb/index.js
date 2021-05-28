import React, { Component } from "react";

class Breadcrumb extends Component {
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
                                <li className="breadcrumb-item"><a href="/#">Pages</a></li>
                                <li className="breadcrumb-item active">{this.props.name}</li>
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

export default Breadcrumb;
