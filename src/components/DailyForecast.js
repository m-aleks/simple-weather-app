import React from 'react'
import DailyForecastDay from './DailyForecastDay'

export default function DailyForecast({
	fetchingDailyForecast,
	dailyForecast,
	dailyForecastShown,
	toggleDailyForecast
}){
	let dailyForecastList = fetchingDailyForecast ? null : dailyForecast.list.map((item, i)=>{
		return (
			<DailyForecastDay key = {i} data = {item} />
		)
	})
	return (
		<div className='dailyForecastContainer'>
			<div onClick = {()=>toggleDailyForecast(!dailyForecastShown)}  className='dailyForecastToggler'><span>&#8693;</span>  Прогноз погоды на 10 дней</div>
			<div className='dailyForecastTable' style = {{height: dailyForecastShown?"600px":0, opacity: dailyForecastShown?1:0}}>
				{dailyForecastList}
			</div>
		</div>
	)
} 