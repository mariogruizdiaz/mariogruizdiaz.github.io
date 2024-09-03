import { combineReducers } from "redux";

import companies from "./companies";
import basics from "./basics";
import i18n from './i18n';
import security from "./security";
import termsAndConditions from "./termsAndConditions";
import advertisement from "./advertisement";

export default combineReducers({
    basics,
    companies,
    i18n,
    security,
    termsAndConditions,
    advertisement
});
