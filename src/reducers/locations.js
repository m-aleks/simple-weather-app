import {ADD_LOCATION, REMOVE_LOCATION,
	COORD_BY_NAME_REQUEST_SUCCESS} from '../constants/actionTypes'

let initialState = JSON.parse(localStorage.getItem("locations")) || []
console.log('Стартуем со списком: ' +localStorage.getItem("locations"))
let locationId = initialState.length ? initialState[initialState.length-1].id+1 : 0;
export default function locations(state = initialState, action){
	switch (action.type){
		case ADD_LOCATION: 
		case COORD_BY_NAME_REQUEST_SUCCESS: return(
				[...state, {
					id: locationId++,
					locationName: action.payload.locationName,
					lat: action.payload.lat,
					lng: action.payload.lng
				}]);
		case REMOVE_LOCATION: return state.filter(item=>(
			item.id != action.payload
		));
		default: return state;
	}
}