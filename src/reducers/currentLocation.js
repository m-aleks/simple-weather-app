import {CURRENT_LOCATION_REQUEST_SUCCESS} from '../constants/actionTypes'

let initialState = {
										lat: undefined, 
										lng: undefined, 
										locationName: ''
									}
export default function currentLocation(state = initialState, action) {
	switch(action.type){
		case CURRENT_LOCATION_REQUEST_SUCCESS: return {...state, lat: action.payload.lat, lng: action.payload.lng, locationName: action.payload.locationName};
		default: return state;
	}
}