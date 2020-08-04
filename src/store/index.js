import { createStore } from 'redux'
import reducer from '../reducers/index'

const store = createStore(reducer, {counterCount:0, total: 0},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
