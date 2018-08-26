import React from 'react';
import ReactDOM from 'react-dom';
import Frame from './components/frame';
import registerServiceWorker from './registerServiceWorker';
import './styles/main.scss';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
   <Frame />,
   document.getElementById('app')
);
registerServiceWorker();
