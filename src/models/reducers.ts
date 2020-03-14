import { combineReducers } from 'redux'
import { randomItemReducer } from './reducers/randomItem/reducer'

export default combineReducers({
    randomItem: randomItemReducer
})