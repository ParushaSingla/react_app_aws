import {combineReducers} from 'redux'
import mobileListReducer from './reducers/mobilesListReducer'
import cartReducer from './reducers/cartReducer'
const rootReducer=combineReducers({
    mobileList:mobileListReducer,
    cartListReducer: cartReducer,
})
export default rootReducer