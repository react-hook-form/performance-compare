import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './Form';
// import Form from './FormikForm';
// import Form from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Form />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
