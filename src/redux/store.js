import { createStore } from 'redux';
import MainReducer from './Main-HomePage/MainReducer';


const store = createStore(MainReducer);

export default store;