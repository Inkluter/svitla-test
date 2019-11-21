import { combineReducers } from 'redux'
import candidatesReducer from './candidatesReducer'
import { CANDIDATES } from '../../constants'

export default combineReducers({
    [CANDIDATES]: candidatesReducer,
})


