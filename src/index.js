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
const element1 = <MyName name ="hey" />;

ReactDOM.render(element, document.getElementById('root'));

//test