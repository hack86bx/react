import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Message from './composant';
import Buttton from './boutton';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyButttons from './boutton2';
import App from './App';
import Myform from './form';
import ToDolist from './todolist';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Message text="hello world" />
    <Buttton text="Facebook" link="https://www.facebook.com"/>
    <MyButttons text="" />
    <Myform text="" />
    <ToDolist />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
