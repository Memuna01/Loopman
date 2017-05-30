import React from 'react';
import { Link, hashHistory } from 'react-router';
import Login from './Login.jsx';

/**
* This component displays the navigation bar at the top of the page.
* @class Header
* @extends {React.Component}
*/
class Header extends React.Component {
  constructor() {
    super();

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  /**
  * This method is called when a user clicks on the logout button.
  * @method handleLogoutClick
  * @memberOf Header
  */
  handleLogoutClick() {
    localStorage.removeItem('id_token');
    hashHistory.push('/');
  }

  /**
  * This lifecycle method displays the component on the page.
  * The component renders the links in the navigation bar.
  * @method render
  * @returns a react element, button
  * @memberOf Header
  */
  render() {
    /**
    * @param {object} props
    * @returns a react element, button
    */
    function LogOutButton(props) {
      return (
        <button
          className="btn btn-default btn-danger"
          onClick={props.onClick}
        >Log out
        </button>
      );
    }

    // Switches dynamically between login or logout button depending on if
    // the user is logged in or not.
    let button = null;
    let sourcesLink = null;
    const IsLoggedIn = localStorage.getItem('id_token');
    if (IsLoggedIn) {
      button = <LogOutButton onClick={this.handleLogoutClick} />;
      sourcesLink = <Link className="loopy" to="sources">News Sources </Link>;
    } else {
      button = <Login />;
    }

    return (
      <nav
        className="navbar navbar-inverse navbar-collapse header-nav"
      >
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand active loopy" to="/">Loopman</Link>
          </div>
          <ul className="nav navbar-nav">
            <li>
              { sourcesLink }
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
