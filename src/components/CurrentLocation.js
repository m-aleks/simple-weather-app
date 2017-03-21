import React from 'react'
//import selectLocation from '../actions/selectLocation'

export default function({onCurrentLocationClick, locationName, lng, lat}) {
	return (
		<div  className='locationContainer currentLocation panel' onClick = {()=>onCurrentLocationClick(locationName, lat, lng)}><div className='geoIcon'>	
&#10146;</div>{locationName}</div>
		)
}