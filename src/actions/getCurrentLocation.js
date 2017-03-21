import { CURRENT_LOCATION_REQUEST, CURRENT_LOCATION_REQUEST_SUCCESS, CURRENT_LOCATION_REQUEST_FAIL} from '../constants/actionTypes'
import getWeather from './getWeather'

export default function getCurrentLocation() {
	return (dispatch)=>{
		dispatch({
			type: CURRENT_LOCATION_REQUEST
		})
		// Fetching current coordinates
		navigator.geolocation.getCurrentPosition(
			(position) => {
				const lat = position.coords.latitude,
				lng = position.coords.longitude

				// Fetching city name by current coordinates
				/*global google:true*/
				let geocoder = new google.maps.Geocoder();
				const latlng = {lat: lat, lng: lng};
				geocoder.geocode({'location': latlng}, function(results, status) {

					if (status === google.maps.GeocoderStatus.OK) {
						if (results[0]) {
							const locationName = results[2].formatted_address
							dispatch({
								type: CURRENT_LOCATION_REQUEST_SUCCESS,
								payload: {
									locationName,
									lat,
									lng
								}
							})
							dispatch(getWeather(locationName, lat, lng))
							
						} else {
							console.log('No results of searching place by coords ' + lat + ', ' + lng + ' found');
						}
					} else {
						console.log('Geocoder (searching place by coords) failed due to: ' + status);
					}
				});	

			},
			(error) => {
				dispatch({
					type: CURRENT_LOCATION_REQUEST_FAIL,
					error: true,
          payload: new Error('Ошибка текущуй геолокации')
				})
				console.log('Current geolocation failed: ' + error.code + '. ' + error.message)
			}
		);
	}
}