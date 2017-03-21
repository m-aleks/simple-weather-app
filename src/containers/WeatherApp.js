import AddLocation from './AddLocation'
import CurrentLocationContainer from './CurrentLocationContainer'
import Locations from './Locations'
import WeatherContainer from './WeatherContainer'
import React from 'react';

export default function WeatherApp() {
	return (
	<div>
		<header  className='header panel'>
			<h1 className='header_heading'>Одностраничное погодное приложение на React+Redux</h1>
		</header>
		<div className='locationsContainer'>
			<CurrentLocationContainer />
			<AddLocation />
			<Locations />
		</div>
		<WeatherContainer />
	</div>
	)
}