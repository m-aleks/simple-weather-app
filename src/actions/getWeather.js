import {WEATHER_REQUEST, WEATHER_REQUEST_SUCCESS, WEATHER_REQUEST_FAIL} from '../constants/actionTypes' 
import getDailyForecast from './getDailyForecast' 

export default function getWeather(locationName, lat, lng) {
	return (dispatch) => {
		dispatch({
			type: WEATHER_REQUEST
		})
// Fetching current weather data
		fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&lang=ru&APPID=9822f9f8adb1bf32199813f827d16536`)
		.then(function(weatherResponse) {
			return weatherResponse.json()
		})
		.then(function(weather) {
			
			// Fetching 1 day(cnt=8 (max=40strings/5days))/3 hours forecast data 
			fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&lang=ru&cnt=8&APPID=9822f9f8adb1bf32199813f827d16536`)
			.then(function(forecastResponse) {
				return forecastResponse.json()
			})
			.then(function(forecast) {
				dispatch({
					type: WEATHER_REQUEST_SUCCESS,
					payload: {
						locationName,
						weather,
						forecast
					}
				})
				dispatch(getDailyForecast(lat, lng))
			})
			.catch(function(error) {
				dispatch({
					type: WEATHER_REQUEST_FAIL
				});
				console.log('Something in forecast data is wrong .... ' + error)
			})

		})
		.catch(function(error) {
			dispatch({
				type: WEATHER_REQUEST_FAIL
			});
			console.log('Something in weather data is wrong .... ' + error)
		})
	}
}