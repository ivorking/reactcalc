import React from 'react';
import ReactDOM from 'react-dom';
import Frame from './components/frame';
import PropTypes from 'prop-types';
import '../client/styles/main.scss';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
   <Frame />,
   document.getElementById('app')
);
