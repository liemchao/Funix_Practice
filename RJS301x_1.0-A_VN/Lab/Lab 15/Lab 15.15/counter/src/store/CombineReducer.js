import { combineReducers } from 'redux'
import counterReducer from './reducers/CounterReducer';

const allReducer = combineReducers({
    counter: counterReducer
})
export default allReducer