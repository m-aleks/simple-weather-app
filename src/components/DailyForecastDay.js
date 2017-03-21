import React, { Component } from 'react'

export default class DailyForecastDay extends Component {
	constructor(props){
		super(props)
		this.state = {
			collapsed: true
		}
		this.onclickHandler = this.onclickHandler.bind(this)
	}
	onclickHandler(){
		this.setState((prevState)=>({collapsed: !prevState.collapsed}))
	}
	render(){
		const data = this.props.data
		let thisDay = new Date(data.dt*1000),
		smallIcon = data.weather[0].icon,
		minTemp = Math.round(data.temp.min),
		maxTemp = Math.round(data.temp.max)
		return(
			<div onClick = {this.onclickHandler} style={{height: this.state.collapsed?'50px':'100px'}} className='dailyForecastDay'>
				<div className='dailyForecastDay_main'>
						<div className='dailyForecastDate'>{thisDay.toLocaleString('ru',{weekday:'short', day:'numeric', month:'numeric'})}</div>
						<img className='dailyForecastIcon' src={'http://openweathermap.org/img/w/'+smallIcon+'.png'} alt='weather icon' />
						<div className='dailyForecastTemp'>{minTemp>0 ? '+'+minTemp : minTemp}&#176;..{maxTemp>0 ? '+'+maxTemp : maxTemp}&#176;</div>
						<div className='dailyForecastDescription'>{data.weather[0].description}</div>
						<div className='dailyForecastToggleIcon'>{this.state.collapsed ? '+' : '-'}</div>
				</div>
				<div className='dailyForecastDay_full'>
					<table  className='dailyForecastTable'>
						<tbody>
							<tr>
								<td className='dailyForecastTableData'>облачность: {data.clouds}%</td>
								<td className='dailyForecastTableData'>влажность: {data.humidity}%</td>
							</tr>
							<tr>
								<td className='dailyForecastTableData'>скорость ветра: {Math.round(data.speed*10)/10} м/с</td>
								<td className='dailyForecastTableData'>давление: {Math.round(+data.pressure*760/1013.25)} мм.рт.ст.</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}