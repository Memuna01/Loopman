import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Index from './components/Index';
import Login from './components/Login';
import Search from './components/Search';
import Headlines from './components/Headlines';
import SearchLoopman from './components/SearchLoopman';
import { Router, Route, IndexRoute, hashHistory , Redirect} from 'react-router';
// import Index from './components/Index';

const requireAuth = (nextState, replace) => {
  const urlPath = window.location.hash;
  const token = localStorage.getItem('id_token')
  if (!token){
    console.log(window.location);
    console.log("window hash", window.location.hash);
    replace({ pathname: '/login' })
    //window.location.assign('#/login');
  }
}


const Root = () => (
  <div>
    <Router history={hashHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={SearchLoopman} onEnter={requireAuth}/>
        <Route path="/headlines" component={Headlines} onEnter={requireAuth}/>
        <Route path="/login" component={Login} />
      </Route>
    </Router>
  </div>
  );

ReactDOM.render(<Root />, document.getElementById('app'));
