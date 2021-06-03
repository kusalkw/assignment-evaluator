import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const middleware = [thunk]
const initialstate ={}

const store = createStore(rootReducer,initialstate,compose(applyMiddleware(...middleware)))


export default store;