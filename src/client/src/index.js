import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Styling
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/init.css';


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
registerServiceWorker();
