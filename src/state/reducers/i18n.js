import dictionary from '../data/dictionary';
import { actionTypes } from "../actionTypes";

const defaulState = {
    language: "es",
    dictionary: dictionary['es']
};

export default function languageReducer(state = defaulState, action) {
    switch (action.type) {
       case actionTypes.SET_LANGUAGE:
          let x = {
              ...state,
              language: action.language,
              dictionary: dictionary[action.language]
             };
          return x;
       default:
          return state;
    }
 }