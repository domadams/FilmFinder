/*******************************************************
 * Client Component Entry Point
 * Sets up client-side routing listening to `pushState` changes
 *
 * This then renders the relevant route handle component based
 * on the defined application routes
 ******************************************************/
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'
import routes from './routes';

// main contents </div>
const content = document.getElementById('content');

// Start the client-side router using only `pushState`
// with the supplied routes
ReactDOM.render((
    <Router history={browserHistory} routes={routes}/>
), content);