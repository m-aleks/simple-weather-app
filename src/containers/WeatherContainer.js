import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
//import selectForecastMode from '../actions/selectForecastMode'
import Weather from '../components/Weather'
import Forecast from '../components/Forecast'
import DailyForecast from '../components/DailyForecast'
import toggleDailyForecast from '../actions/toggleDailyForecast'


class WeatherContainer extends Component{
	
	// componentWillMount(){
	// 	if(this.props.lat && this.props.lng){
	// 		console.log('coordinates for weather container: ' + this.props.lat + ', ' + this.props.lng )
	// 		fetch(`http://api.openweathermap.org/data/2.5/${this.props.forecastMode}?lat=${this.props.lat}&lon=${this.props.lng}&units=metric&lang=ru&APPID=9822f9f8adb1bf32199813f827d16536`)
	// 		.then(function(response) {
	// 			return response.json()
	// 		})
	// 		.then(function(weather) {
	// 			this.weather = weather;
	// 			console.log('weather today: ' + weather.weather[0].icon)
	// 		})
	// 		.catch(function(error) {
	// 			console.log('Something is wrong .... ' + error)
	// 		})
	// 	}else{
	// 		console.log('Failed!!! coordinates for weather container: ' + this.props.lat + ', ' + this.props.lng )
	// 	}
	// }
	render(){
		let { 
			fetching, 
			locationName, 
			weather, 
			forecast, 
			fetchingDailyForecast, 
			dailyForecast, 
			dailyForecastShown, 
			toggleDailyForecast 
		} = this.props
		return (
		<div  className='allWeatherContainer panel'>
			<Weather locationName = {locationName} weather = {weather} fetching = {fetching} />
			<Forecast forecast = {forecast} fetching = {fetching} />
			<DailyForecast fetchingDailyForecast = {fetchingDailyForecast} dailyForecast = {dailyForecast} dailyForecastShown = {dailyForecastShown} toggleDailyForecast = {toggleDailyForecast} />
		</div>
	)}
}

const mapStateToWeatherContainerProps = (state)=>{
	return {
		fetching: state.allWeather.fetching,
		locationName: state.allWeather.locationName,
		weather: state.allWeather.weather,
		forecast: state.allWeather.forecast,
		fetchingDailyForecast: state.allWeather.fetchingDailyForecast,
		dailyForecast: state.allWeather.dailyForecast,
		dailyForecastShown: state.allWeather.dailyForecastShown
	}
}
const mapDispatchToWeatherContainerProps = (dispatch)=>{
	return {
		toggleDailyForecast: bindActionCreators(toggleDailyForecast, dispatch)
	}
}

export default connect(mapStateToWeatherContainerProps, mapDispatchToWeatherContainerProps)(WeatherContainer)