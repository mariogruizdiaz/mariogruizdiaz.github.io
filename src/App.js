import React from "react";
// import { createStore } from "redux";
import { Provider } from "react-redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import Apdash from "./reducers";
import { store, persistor, sagaMiddleware } from './state/stores/store';
import Routes from "./routers";
// import store from "./state/stores/store";
import { PersistGate } from 'redux-persist/integration/react';
import mySaga from "./state/sagas";
import { SnackbarProvider } from './components/Toast/SnackbarContext';


// then run the saga
sagaMiddleware.run(mySaga);

// create store
// const store = createStore(
//   Apdash,
//   composeWithDevTools()
//   // applyMiddleware(...middleware),
//   // other store enhancers if any
// );

function App() {
    return (
        <Provider store={store}>
          <SnackbarProvider>
            <PersistGate loading={null} persistor={persistor}>
                <Routes />
            </PersistGate>
          </SnackbarProvider>
            {/* <Routes /> */}
        </Provider>
    );
}

export default App;
