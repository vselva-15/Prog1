import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
//import { tsPropertySignature } from '@babel/types';
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
function myName(props)
{
    return <h1>hello,{props.name}</h1>;
}
const element = <myName name = "Sara" />;
<<<<<<< HEAD
<<<<<<< HEAD
const element1 = <MyName name ="hey" />;
=======
>>>>>>> ef94dd0615930c39c4f406ca6642f5cfc168a4ea

const element1 = <MyName name ="hey" />;

<<<<<<< HEAD
//test
=======
//added comments
ReactDOM.render(element, document.getElementById('root'));

//welcome to git-hub
>>>>>>> 91e15a424c182e06b90e3be7aba402daac6ca30b
=======
ReactDOM.render(element, document.getElementById('root'));

>>>>>>> ef94dd0615930c39c4f406ca6642f5cfc168a4ea
