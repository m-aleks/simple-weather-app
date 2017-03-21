import {DAILY_FORECAST_REQUEST, DAILY_FORECAST_REQUEST_SUCCESS, DAILY_FORECAST_REQUEST_FAIL} from '../constants/actionTypes'


export default function getDailyForecast(lat, lng) {
	return (dispatch) => {
		dispatch({
			type: DAILY_FORECAST_REQUEST
		})
			
		// Fetching 16 days daily forecast data 
		fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lng}&units=metric&lang=ru&cnt=10&APPID=9822f9f8adb1bf32199813f827d16536`)
		.then(function(dailyForecastResponse) {
			return dailyForecastResponse.json()
		})
		.then(function(dailyForecast) {
			dispatch({
				type: DAILY_FORECAST_REQUEST_SUCCESS,
				payload: {
					dailyForecast
				}
			})
		})
		.catch(function(error) {
			dispatch({
				type: DAILY_FORECAST_REQUEST_FAIL
			});
			console.log('Something with daily forecast request is wrong .... ' + error)
		})
	}
}