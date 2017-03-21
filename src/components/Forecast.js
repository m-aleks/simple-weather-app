import React from 'react'

export default function Forecast({
	fetching,
	forecast
}){
	if(fetching){
		return null
	}else{
		let hoursToday = [],
		smallIconsToday = [],
		temperatureToday = []
		for(let i=0; i<8; i++){
			let item = forecast.list[i]
			let today = new Date(item.dt*1000)
			let smallIcon = item.weather[0].icon
			let temp = Math.round(item.main.temp)
			hoursToday.push(<td key={i}>{today.toLocaleString('ru', {hour: 'numeric', minute: 'numeric'})}</td>)
			smallIconsToday.push(<td key={i}><img src={'http://openweathermap.org/img/w/'+smallIcon+'.png'} alt='weather icon' /></td>)
			temperatureToday.push(<td key={i}>{temp>0 ? '+'+temp : temp}&#176;</td>)
		}
		return (
			<div className='forecastContainer'>
				<table className='forecastTodayTable'>
					<tbody>
						<tr>
							{hoursToday}
						</tr>
						<tr>
							{smallIconsToday}
						</tr>
						<tr>
							{temperatureToday}
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
} 