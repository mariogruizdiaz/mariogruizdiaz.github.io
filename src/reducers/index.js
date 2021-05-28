import { combineReducers } from 'redux';
import contact from './contact';
import quote from './quote';
import login from './login';
import signup from './signup';
import resetPassword from './resetPassword';
import subscribe from './subscribe';
import search from './search';
import comment from './comment';
import i18n from './i18n';

export default combineReducers({
    subscribe,
    contact,
    quote,
    login,
    signup,
    resetPassword,
    search,
    comment,
    i18n
});