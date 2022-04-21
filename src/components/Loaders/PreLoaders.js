import React from "react";
import { connect } from "react-redux";
import 'react-languages-select/css/react-languages-select.css';


const PreLoader = props => {
    return (
        <div id={`preloader_${props.id}`}>
            <div class="preloader-wrap">
                {props.withLogo && <img src="assets/img/logo-color.png" alt="logo" class="img-fluid" />}
                <div class="thecube">
                    <div class="cube c1"></div>
                    <div class="cube c2"></div>
                    <div class="cube c4"></div>
                    <div class="cube c3"></div>
                </div>
            </div>
        </div>
    );
};
export default connect(state => ({
    dictionary: state.i18n.dictionary,
}))(PreLoader);