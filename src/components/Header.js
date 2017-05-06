import React from 'react';
import { Link, hashHistory } from 'react-router';

class Header extends React.Component {
  constructor() {
    super();

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }


  handleLogoutClick() {
    localStorage.removeItem('id_token');
    hashHistory.push('/login');
  }

  render() {
    function LogOutButton(props) {
      return (
        <button className="btn btn-default btn-danger" onClick={ props.onClick }>Log out
        </button>
      );
    }

    let button = null;
    const IsLoggedIn = localStorage.getItem('id_token');
    if (IsLoggedIn) {
      button = < LogOutButton onClick={ this.handleLogoutClick } />
    }

    return (
      <nav className="navbar navbar-default navbar-collapse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand active" to="/">Loopman</Link>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Link to="favourites">Favourites</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right navbar-btn">
            <li>
              { button }
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
