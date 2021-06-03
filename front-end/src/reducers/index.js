import {combineReducers} from 'redux'
import authReducer from './authReducer'
import errReducer from './errReducers'
export default combineReducers({
    auth :authReducer,
    errors :errReducer,
}) 