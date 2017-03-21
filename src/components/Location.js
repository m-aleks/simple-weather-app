import React from 'react'

const Location = ({
	location,
	getWeather,
	removeLocation
	}) => {
		let {id, locationName, lat, lng} = location
		return (
			<div className='locationContainer panel'>
				<div className='locationName' onClick={()=>getWeather(locationName, lat, lng)}>{locationName}</div>
				<div className='locationRemoveBtn' onClick={()=>removeLocation(id)}>x</div>
			</div>
		)
	}
	
export default Location