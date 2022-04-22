// import { select } from "redux-saga/effects";
import { graphQL } from "../connectors";
import { commandCollection } from "./commands";

// const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
// const apiReferences = (state) => state.basics.api;


const genericResolver = function* genericResolver(action) {
    try {
        // let apiRefs = yield select(apiReferences);
        const command = commandCollection[action.type];
        // const response = yield graphQL.executeCommand(`http://${apiRefs.host}:${apiRefs.port}/graphql`, command, action.payload);
        const response = yield graphQL.executeCommand(`https://95b1-190-17-234-27.ngrok.io/graphql`, command, action.payload);
        return response;
    } catch (e) {
        console.log(`Error executing command: ${action.type}`);
        console.log(e);
        throw e;
    }
};

// const genericSubscriber = (action, command) => fork(function* () {
//     const subscriptionId = `${action.model}_${action.payload._id}`;
//     try {
//         let lastTask;
//         activeSoubcriptions[subscriptionId] = yield graphQL.subscribe(yield generics.genericSubscriptionCommand(action.model), action.payload, command.endpointName);
      
//         while (activeSoubcriptions[subscriptionId]) {
//             const newData = yield take(activeSoubcriptions[subscriptionId]);
//             if (lastTask != null) {
//                 yield cancel(lastTask); // cancel is no-op if the task has already terminated
//             }
//             lastTask = yield fork(dispatchAction, {subsecuentAction: command.onNewData, payload: {data: JSON.parse(newData.data)}});
//         }
//     } catch (e) {
//         console.log(`Error executing command: ${subscriptionId}`);
//         console.log(e);
//         throw e;
//     }
// });

// const genericUnsubscriber = (action) => fork(function* () {
//     const subscriptionId = `${action.model}_${action.payload._id}`;
//     try {
//         activeSoubcriptions[subscriptionId].close(); // Unsubscribe 
//         delete activeSoubcriptions[subscriptionId];
//     } catch (e) {
//         console.log(`Error unsubscribing ${subscriptionId}`, e);
//         throw e;
//     }
    
// });

// const unsubscribeAll = () => fork(function* () {
//     try {
//         const subscriptionsIds = Object.keys(activeSoubcriptions);
//         subscriptionsIds.forEach(subscriptionId => {
//             activeSoubcriptions[subscriptionId].close();
//             delete activeSoubcriptions[subscriptionId];
            
//         }); 
//     } catch (e) {
//         console.log(`Error Unsubscribing all`, e);
//         throw e;
//     }
    
// });

// function* dispatchAction(params) {
//     try {
//         yield sleep(3000);
//         yield put(yield params.subsecuentAction(params.payload));
//     } catch (e) {
//         console.log("New data arrived, but got error dispatching it", e);
//     } finally {
//         if (yield cancelled()) {
//             console.log("cancelled!");
//         }
//     }
// }

export {
    genericResolver
};
