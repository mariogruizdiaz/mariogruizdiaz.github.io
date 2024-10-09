import { combineReducers } from "redux";

import companies from "./companies";
import basics from "./basics";
import i18n from './i18n';
import security from "./security";
import termsAndConditions from "./termsAndConditions";
import advertisement from "./advertisement";

const appReducer = combineReducers({
    basics,
    companies,
    i18n,
    security,
    termsAndConditions,
    advertisement,
});

// Define un `rootReducer` que maneja la acción de reinicio globalmente
const rootReducer = (state, action) => {
    if (action.type === 'RESET_STATE_AFTER_PURGE') {
        // Resetea todo el estado a `undefined` para reiniciar todos los reducers
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;
