import {fetchCoords} from '../actions/addLocation'
import {connect} from 'react-redux'
import React from 'react';

function AddLocation({dispatch}) {
	let adress
	return(
		<div className = 'addContainer panel'>
				<input className = 'addInput' type='text' ref={input=>adress=input} placeholder='Введите местоположение'/>
				<button className = 'addBtn' onClick={()=>{dispatch(fetchCoords(adress.value)); adress.value=''}}>Добавить</button>
		</div>
	)
}
export default connect()(AddLocation)