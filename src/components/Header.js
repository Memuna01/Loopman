import React from 'react';
import { Link } from 'react-router';
import Search from './Search';

class Header extends React.Component {
  render() {
    return (
      <div className="col-sm-12" style={{ margin: 15 }}>
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Loopman</Link>

        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="bookmarks">Favourites</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right" style={{ marginRight: 15 }}>
          <li><button className="btn btn-info log" style={{ paddingRight: 15 }}><Link to="/login">Log In</Link></button></li>
          <li><button className="btn btn-danger log" style={{ paddingLeft: 15 }}>Log out </button></li>
        </ul>

      </div>

    );
  }
}

export default Header;
