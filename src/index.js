import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
//import {createStore} from 'redux';
import configureStore from './store/configureStore';
import WeatherApp from './containers/WeatherApp'
import './styles/app.css'

export const store = configureStore();
render(
	<Provider store = {store}>
		<WeatherApp />
	</Provider>,
	document.getElementById('root')
);
