import React from 'react'

export default function Weather({
	fetching,
	locationName,
	weather
}) {
	if (fetching){
		return (
			<div>
				<p>Ждём погоды...  </p>
			</div>
		)
	} else {
		let imgName = weather.weather[0].icon,
		temp = Math.round(weather.main.temp)
		const today = new Date()
		return (
			<div className='weatherContainer clearfix'>
				<div className='weatherLocation'>{locationName}</div>
				<div className='weatherDate'>{today.toLocaleString('ru',{weekday:'short', day:'numeric', month:'numeric'})}</div>
				<img className='weatherIcon' src = {require('../images/' + imgName + '.png')} alt='icon' />
				<div>
					<p className='weatherTemp'>{temp>0 ? '+'+temp : temp}<sup>&#8451;</sup></p><br />
					<p className='weatherDescription'>{weather.weather[0].description}</p>
				</div>
				<table  className='weatherTable'>
					<tbody>
						<tr>
							<td className='weatherTableData'>облачность: {weather.clouds.all}%</td>
							<td className='weatherTableData'>влажность: {weather.main.humidity}%</td>
						</tr>
						<tr>
							<td className='weatherTableData'>скорость ветра: {weather.wind.speed} м/с</td>
							<td className='weatherTableData'>давление: {Math.round(+weather.main.pressure*760/1013.25)} мм.рт.ст.</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
} 