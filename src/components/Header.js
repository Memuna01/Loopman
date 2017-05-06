import React from 'react';
import { Link, hashHistory } from 'react-router';
import Search from './Search';

class Header extends React.Component {
  constructor(){
    super();

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

 
  handleLogoutClick(){
    localStorage.removeItem('id_token');
    hashHistory.push('/login');
  }

  render() {    
    function LogOutButton(props) {
    return (
      <li>
        <button className="btn btn-default btn-danger" onClick={props.onClick}>Log out 
        </button>
      </li>   
    );
    }

    let button = null;
    const IsLoggedIn = localStorage.getItem('id_token');
    if(IsLoggedIn){
      button = < LogOutButton onClick={this.handleLogoutClick}/>
    }

    return (
      <nav className="navbar navbar-default navbar-collapse"> 
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand active" to="/">Loopman</Link>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Link to="bookmarkss">Favourites</Link>
            </li>
          </ul>
          <p className="navbar-btn">
            <ul className="nav navbar-nav navbar-right">
              {button}
            </ul>
          </p>
        </div>
      </nav>
    );
  }
}

export default Header;
