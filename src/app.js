import React from 'react';
import reactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css';
import './styles/styles.scss';

reactDOM.render(<AppRouter />, document.getElementById('app'));