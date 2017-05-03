import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Index from './components/Index';
import Login from './components/Login';
import Search from './components/Search';
import Headlines from './components/Headlines';
import SearchLoopman from './components/SearchLoopman';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
// import Index from './components/Index';

const Root = () => {
  return (
    <div>
      <Router history={hashHistory}> 
         <Route path="/" component={App}>
            <IndexRoute component={Index} />
            <Route path="/search" component={SearchLoopman} />
            <Route path="/headlines" component={Headlines} />
         </Route>
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('app'));