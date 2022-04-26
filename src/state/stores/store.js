import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';


import rootReducer from "../reducers";
// import mySaga from "../sagas";

const persistConfig = {
    key: 'root',
    storage,
  };

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
// let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
let persistor = persistStore(store);

export { store, persistor, sagaMiddleware };

// // create the saga middleware
// const sagaMiddleware = createSagaMiddleware();

// mount it on the Store

// export default createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

// then run the saga
// sagaMiddleware.run(mySaga);
