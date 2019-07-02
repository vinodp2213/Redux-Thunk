import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import ticketsReducer from '../reducers/tickets'

const configureStore = ()=> {
    const store = createStore(combineReducers({
        tickets : ticketsReducer
        

    }), applyMiddleware(thunk))

    return store
}
export default configureStore
