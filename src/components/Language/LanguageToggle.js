import React from "react";
import { connect } from "react-redux";
import { SET_LANGUAGE } from "../../constants/types";
import ReactLanguageSelect from 'react-languages-select';
import 'react-languages-select/css/react-languages-select.css';


const LanguageToggle = props => {
    const onSelectLanguage = (languageCode) => {
        props.setLanguage(languageCode);
    };
    return (
        <div className="d-flex align-items-center mb-sm-0 ml-3">
            <span className="ti-world icon-size-xs text-white mr-0"></span>
            <ReactLanguageSelect
                languages={["en", "es"]}
                customLabels={{"en": "English", "es": "Spanish"}}
                defaultLanguage={"es"}
                onSelect={onSelectLanguage}/>

        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    setLanguage: language => dispatch({ type: SET_LANGUAGE, language })
 });
 const mapStateToProps = state => {
    return { language: state.language };
 };

export default connect(mapStateToProps, mapDispatchToProps)(LanguageToggle);