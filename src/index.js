import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import allReducers from './reducers/index';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import { save, load } from "redux-localstorage-simple"
import 'bootstrap/dist/css/bootstrap.css';

const store = applyMiddleware(save(), ReduxPromise)(createStore);

ReactDOM.render(
	<Provider store={store(allReducers, load())}>
		<Routes/>
	</Provider>	, document.getElementById('root'));
registerServiceWorker();
