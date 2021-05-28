import { SET_LANGUAGE } from '../constants/types.js';
import dictionary from '../data/dictionary';

const defaulState = {
    language: "es",
    dictionary: dictionary['es']
};

export default function languageReducer(state = defaulState, action) {
    switch (action.type) {
       case SET_LANGUAGE:
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