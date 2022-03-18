import { combineReducers } from "redux";

import companies from "./companies";
import basics from "./basics";
import i18n from './i18n';

export default combineReducers({
    basics,
    companies,
    i18n
});
