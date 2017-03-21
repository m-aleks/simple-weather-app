import {TOGGLE_DAILY_FORECAST} from '../constants/actionTypes'

export default function toggleDailyForecast(shown){
	return{
		type: TOGGLE_DAILY_FORECAST,
		payload: shown
	}
}