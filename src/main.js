import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App.jsx';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import Headlines from './components/Headlines.jsx';
import ScrapedNews from './components/ScrapedNews.jsx';
import SearchLoopman from './components/SearchLoopman.jsx';
import PageNotFound from './components/PageNotFound.jsx';

require('./styles/app.scss');

/**
* These are variables passed to the default requireAuth function
* @param {String} nextState
* @param {String} replace
* The requireAuth function validates that the user is signed in and
* then redirects to the home page if the user is not signed in.
*/
const requireAuth = (nextState, replace) => {
  const token = localStorage.getItem('id_token');
  if (!token) {
    replace({ pathname: '/' });
  }
};

/**
* This is a pure function which renders the routes.
* It is the entry point of my app.
* @returns route components.
*/
const Root = () => (
  <div>
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path="/" component={Home} />
        <Route path="/headlines" component={Headlines} onEnter={requireAuth} />
        <Route path="/sources" component={SearchLoopman}
          onEnter={requireAuth} />
        <Route path="/more" component={ScrapedNews} onEnter={requireAuth} />
        <Route path="/login" component={Login} />
      </Route>
      <Route path="*" component={PageNotFound} />
    </Router>
  </div>
);

ReactDOM.render(<Root />, document.getElementById('app'));
