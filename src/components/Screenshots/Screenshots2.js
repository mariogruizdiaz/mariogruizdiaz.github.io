import React from "react";
import { connect } from "react-redux";
import _data from "../../data";

class Screenshots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: {}
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */

    this.setState({
      price: _data.price
    });
  }

  render() {
    return (
      <React.Fragment>
        <section id="screenshots" className="screenshots-section pb-100 pt-100 gray-light-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-8">
                        <div className="section-heading text-center mb-5">
                            <h2>Apps Screenshots</h2>
                            <p>Proactively impact value-added channels via backend leadership skills. Efficiently revolutionize worldwide networks whereas strategic catalysts for change. </p>
                        </div>
                    </div>
                </div>
                <div className="screenshot-wrap">
                    <div className="screenshot-frame"></div>
                    <div className="screen-carousel owl-carousel owl-theme dot-indicator">
                        <img src="assets/img/01.jpg" className="img-fluid" alt="screenshots" />
                        <img src="assets/img/02.jpg" className="img-fluid" alt="screenshots" />
                        <img src="assets/img/03.jpg" className="img-fluid" alt="screenshots" />
                        <img src="assets/img/04.jpg" className="img-fluid" alt="screenshots" />
                        <img src="assets/img/05.jpg" className="img-fluid" alt="screenshots" />
                        <img src="assets/img/06.jpg" className="img-fluid" alt="screenshots" />
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
}))(Screenshots);