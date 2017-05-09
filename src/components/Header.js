import React from 'react';
import { Link, hashHistory } from 'react-router';
import Login from './Login';


class Header extends React.Component {
  constructor() {
    super();

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }


  handleLogoutClick() {
    localStorage.removeItem('id_token');
    hashHistory.push('/');
  }

  render() {
    function LogOutButton(props) {
      return (
        <button className="btn btn-default btn-danger" onClick={props.onClick}>Log out
        </button>
      );
    }

    let button = null;
    const IsLoggedIn = localStorage.getItem('id_token');
    if (IsLoggedIn) {
      button = <LogOutButton onClick={this.handleLogoutClick} />;
    }else{
      button = <Login />;
    }

    return (
      <nav className="navbar navbar-default navbar-collapse" style={{marginBottom: 0}}>
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand active" to="/">Loopman</Link>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Link to="sources">News Sources</Link>
            </li>
            <li>
              <Link to="favourites">Favourites</Link>
            </li>            
          </ul>
          <ul className="nav navbar-nav navbar-right navbar-btn">
            <li>
              {button}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
