import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Drop from './drop/index.js';
// import DomToImg from './dom-to-img/index'
// import Html2Canvas from './html2-canvas/index'
//import ErrorBoundary from './error-boundary/index'
// import DiffText from './components/diff-text/index'
// import ReactRouter from './components/react-router/index'
import Hook from './components/hooks/index'

ReactDOM.render(
    <React.StrictMode>
        <Hook />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
