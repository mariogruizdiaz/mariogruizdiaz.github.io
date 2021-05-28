import React from "react";
import { connect } from "react-redux";

class HeroSection extends React.Component {
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
            <div className="background-image-wraper" style={{backgroundImage: "url(assets/img/slider-bg-1.jpg)", opacity: 1}}></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-9 col-lg-7">
                        <div className="page-header-content text-white pt-4">
                            <h1 className="text-white mb-0">{this.props.pageTitle}</h1>
                            <p className="lead">Rapidiously deploy world-class platforms whereas collaborative interfaces. Phosfluorescently facilitate corporate innovation via excellent web technically sound. </p>
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
}))(HeroSection);
