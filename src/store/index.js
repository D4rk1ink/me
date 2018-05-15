import { createStore, combineReducers } from 'redux'
import appReducer from './reducers/app'

const reducers = combineReducers({
    app: appReducer
})

const store = createStore(reducers)

export default store