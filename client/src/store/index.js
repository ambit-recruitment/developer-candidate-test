import { createStore } from 'redux';
import reducer from './reducer';

export * from './actions';
export * from './reducer';

const store = createStore(reducer);
export default store;
