import { COORD_BY_NAME_REQUEST, COORD_BY_NAME_REQUEST_SUCCESS, 
	COORD_BY_NAME_REQUEST_FAIL} from '../constants/actionTypes'

export function fetchCoords(locationName){
	return (dispatch)=>{
		dispatch({
			type: COORD_BY_NAME_REQUEST
		})

		/*global google:true*/
		var geocoder = new google.maps.Geocoder(); // eslint-disable-line no-undef
		geocoder.geocode( { 'address': locationName}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) { 
				console.log('Геокод, кол-во рез-тов: ' + results.length)
				const recievedName = results[0].formatted_address.split(', ')
				recievedName.splice(1, recievedName.length-2)
				dispatch({
					type: COORD_BY_NAME_REQUEST_SUCCESS,
					payload: {
										locationName: recievedName.join(', '),
										lat: results[0].geometry.location.lat(),
										lng: results[0].geometry.location.lng()
									}
				})
			} else {
				dispatch({
					type: COORD_BY_NAME_REQUEST_FAIL,
					payload: status,
					error: true
				})
			}
		});
	}
}