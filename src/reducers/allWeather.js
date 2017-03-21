import { WEATHER_REQUEST, WEATHER_REQUEST_SUCCESS, DAILY_FORECAST_REQUEST, DAILY_FORECAST_REQUEST_SUCCESS, TOGGLE_DAILY_FORECAST } from '../constants/actionTypes'

const initialState = {
	fetching: true,
	locationName: '',
	weather: {},
	forecast: {},
	fetchingDailyForecast: true,
	dailyForecast: {},
	dailyForecastShown: false
}

export default function allWeather(state = initialState, action){
	switch(action.type){
		case WEATHER_REQUEST: return {...state, fetching: true};
		case WEATHER_REQUEST_SUCCESS: return {...state, fetching: action.payload.fetching, locationName: action.payload.locationName, weather: action.payload.weather, forecast: action.payload.forecast};
		case DAILY_FORECAST_REQUEST: return {...state, fetchingDailyForecast: true};
		case DAILY_FORECAST_REQUEST_SUCCESS: return {...state, dailyForecast: action.payload.dailyForecast, fetchingDailyForecast: false};
		case TOGGLE_DAILY_FORECAST: return {...state, dailyForecastShown: action.payload};
		default: return state;
	}
}