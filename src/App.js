import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store, persistor, sagaMiddleware } from './state/stores/store';
import Routes from "./routers";
import { PersistGate } from 'redux-persist/integration/react';
import mySaga from "./state/sagas";
import { SnackbarProvider } from './components/Toast/SnackbarContext';

// then run the saga
sagaMiddleware.run(mySaga);

function App() {

    // Función para revisar y limpiar el localStorage si es necesario
    const checkAndClearLocalStorage = async () => {
        const currentVersion = "v1.6";  // Cambia este valor cuando hagas cambios importantes
        const storedVersion = localStorage.getItem('dictionaryVersion');
        
        if (storedVersion !== currentVersion) {
            // Pausar la persistencia
            persistor.pause();

            // Purga del estado persistido
            await persistor.purge();

            // Limpia el localStorage manualmente
            localStorage.clear();

            // Guarda la nueva versión en localStorage
            localStorage.setItem('dictionaryVersion', currentVersion);

            persistor.persist();

            // Despachar una acción de Redux que actualice el estado y fuerce la actualización de componentes
            store.dispatch({ type: 'RESET_STATE_AFTER_PURGE' });
        }
    };

    // Hook que se ejecuta cuando se monta el componente
    useEffect(() => {
        checkAndClearLocalStorage();  // Llama a la función para verificar el localStorage
    }, []);  // El array vacío asegura que solo se ejecute una vez al montar el componente

    return (
        <Provider store={store}>
          <SnackbarProvider>
            <PersistGate loading={null} persistor={persistor}>
                <Routes />
            </PersistGate>
          </SnackbarProvider>
        </Provider>
    );
}

export default App;
