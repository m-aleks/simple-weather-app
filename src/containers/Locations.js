import {connect} from 'react-redux'
import React, {Component, PropTypes} from 'react'
import { bindActionCreators } from 'redux'
import getWeather from '../actions/getWeather'
import removeLocation from '../actions/removeLocation'
import Location from '../components/Location'

class Locations extends Component{
	componentDidUpdate(){
		let sLocations = JSON.stringify(this.props.locations)
		console.log('Сохраняем список городов: ' + sLocations)
		localStorage.setItem("locations", sLocations)
	}
	render(){
		const locations = this.props.locations.map(location => (
			<Location location = {location} key = {location.id} getWeather = {this.props.getWeather} removeLocation = {this.props.removeLocation} />
		))
		return(
			<div className = 'addedLocations'>
				<div className = 'locationsToggler panel'><span className='toggleIcon'></span></div>
				<div className = 'locationsList'>
					{locations}
				</div>
			</div>
		)
	}
}
Locations.propTypes = {
		locations: PropTypes.arrayOf(PropTypes.shape({
		locationName: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
		lat:PropTypes.number.isRequired,
		lng: PropTypes.number.isRequired
	}).isRequired).isRequired
}
const mapStateToLocationsProps = (state)=>{
	return{
		locations: state.locations
	}
}
const mapDispatchToLocationsProps = (dispatch)=>{
	return({
		getWeather: bindActionCreators(getWeather, dispatch),
		removeLocation: bindActionCreators(removeLocation, dispatch)
	})
}
export default connect(mapStateToLocationsProps, mapDispatchToLocationsProps)(Locations)