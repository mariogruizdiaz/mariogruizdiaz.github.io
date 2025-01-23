import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class HeroChildsafetystandards extends React.Component {

  render() {
    return (
      <React.Fragment>
        <section className="overflow-hidden ptb-100-header">
            <div className="mask-66"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-8">
                        <div className="section-heading text-center text-white">
                          <h2 className="text-white">{this.props.dictionary.childsafetystandards.title}</h2>
                            <h4 className="text-white">{this.props.dictionary.childsafetystandards.titleParagraph1}</h4>
                            <p>{this.props.dictionary.childsafetystandards.paragraph1}</p>
                            <h4 className="text-white">{this.props.dictionary.childsafetystandards.titleParagraph2}</h4>
                            <p>{this.props.dictionary.childsafetystandards.paragraph2}</p>
                            <p>{this.props.dictionary.childsafetystandards.paragraph20}</p>
                            <p>{this.props.dictionary.childsafetystandards.paragraph21}</p>
                            <p>{this.props.dictionary.childsafetystandards.paragraph22}</p>
                            <h4 className="text-white">{this.props.dictionary.childsafetystandards.titleParagraph3}</h4>
                            <p>{this.props.dictionary.childsafetystandards.paragraph3}</p>
                            <h4 className="text-white">{this.props.dictionary.childsafetystandards.titleParagraph4}</h4>
                            <p>{this.props.dictionary.childsafetystandards.paragraph4}</p>
                            <h4 className="text-white">{this.props.dictionary.childsafetystandards.titleParagraph5}</h4>
                            <p>{this.props.dictionary.childsafetystandards.paragraph5}</p>
                            <h4 className="text-white">{this.props.dictionary.childsafetystandards.titleParagraph6}</h4>
                            <p>{this.props.dictionary.childsafetystandards.paragraph6}</p>
                            <p>{this.props.dictionary.childsafetystandards.footer}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    dictionary: state.i18n.dictionary,
    language: state.i18n.language,
  };
}

export default connect(mapStateToProps)(withRouter(HeroChildsafetystandards));
