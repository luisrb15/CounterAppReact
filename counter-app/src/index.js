import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css'

const divRoot = document.querySelector('#root');

//Componente padre.
ReactDOM.render( <CounterApp value = {10}/> , divRoot);