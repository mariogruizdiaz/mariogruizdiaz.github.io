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
        <section className="page-header-section ptb-100 bg-image full-height" image-overlay="8">
        <div className="background-image-wraper" style={{
            backgroundImage: "url(assets/img/cta-bg.jpg)",
            opacity:1
          }}></div>
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-9 col-lg-7">
                    <div className="error-content-wrap text-center text-white">
                        <div className="notfound-404">
                            <h1 className="text-white">404</h1>
                        </div>
                        <h2 className="text-white">Sorry, something went wrong</h2>
                        <p className="lead">The page you are looking for might have been removed had its name changed or is temporarily
                            unavailable.</p><a className="btn btn-brand-03" href="/">Go to Homepage</a>
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
