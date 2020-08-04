import total from './total';
import counterCount from './counterCount'
import { combineReducers } from 'redux'

const reducer = combineReducers({
    total, counterCount
});

export default reducer