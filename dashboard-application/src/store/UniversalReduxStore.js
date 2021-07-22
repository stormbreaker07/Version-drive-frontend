import { rootReducer } from './Reducer';
const Redux = require('redux');


export const store = Redux.createStore(rootReducer);
console.log(store.getState());
