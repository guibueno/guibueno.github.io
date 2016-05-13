import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Route, Router, IndexRoute, useRouterHistory } from 'react-router'
import {createHashHistory} from 'history';

// Helpers for debugging
window.React = React;
window.Perf = require('react-addons-perf');

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

import About from './components/About';
import App from './components/App';
import Dashboard from './components/Dashboard';
import Practice from './components/Practice';
import Profile from './components/Profile';

const AppRoutes = (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="/about" components={About} />
    <Route path="/practice/:practiceId" components={Practice} />
    <Route path="/profile" components={Profile} />
  </Route>
);

const router = (
  <Router
    history={useRouterHistory(createHashHistory)({queryKey: false})}
    onUpdate={() => window.scrollTo(0, 0)}>
    {AppRoutes}
  </Router>
);

// Render the main component into the dom
ReactDOM.render(router, document.getElementById('app'));
