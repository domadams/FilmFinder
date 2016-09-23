import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../pages/app';
import Home from '../pages/home';
import About from '../pages/about';

const routes = (
    <Route component={App} path='/'>
        <IndexRoute component={Home} />
        <Route path='/about' component={About} />
    </Route>
);

export default routes;