import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getWeather from '../actions/getWeather'
import getCurrentLocation from '../actions/getCurrentLocation'
import CurrentLocation from '../components/CurrentLocation'

class CurrentLocationContainer extends Component {
	componentWillMount () {
		this.props.getCurrentLocation()
	}
	render () {
		return (
			<CurrentLocation onCurrentLocationClick = {this.props.onCurrentLocationClick} locationName = {this.props.locationName} lat = {this.props.lat} lng = {this.props.lng} />
		)
	}
}
const mapStateToCurrentProps = (state)=>{
	return{
		locationName: state.currentLocation.locationName,
		lat: state.currentLocation.lat,
		lng: state.currentLocation.lng
	}
}
const mapDispatchToCurrentProps = (dispatch)=>{
	return{
		getCurrentLocation: bindActionCreators(getCurrentLocation, dispatch),
		onCurrentLocationClick: bindActionCreators(getWeather, dispatch)
	}
}
export default connect(mapStateToCurrentProps, mapDispatchToCurrentProps)(CurrentLocationContainer)