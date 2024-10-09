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
    const checkAndClearLocalStorage = () => {
        const currentVersion = "v1.3";  // Cambia este valor cuando hagas cambios importantes
        const storedVersion = localStorage.getItem('dictionaryVersion');
        
        // Si la versión almacenada no coincide con la actual, limpia el localStorage
        if (storedVersion !== currentVersion) {
            console.log("Version mismatch. Clearing localStorage...");
            localStorage.clear();  // Borra todo el localStorage si la versión no coincide
            localStorage.setItem('dictionaryVersion', currentVersion);  // Guarda la nueva versión
            window.location.reload();  // Recarga la página para aplicar los cambios
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
