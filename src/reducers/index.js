import { combineReducers} from 'redux'
import currentLocation from './currentLocation'
import locations from './locations'
import allWeather from './allWeather'

const rootReducer = combineReducers({
	currentLocation, 
	locations, 
	allWeather})
export default rootReducer