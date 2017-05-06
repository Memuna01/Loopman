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
        <button className="btn btn-danger log" style={{ paddingLeft: 15 }} onClick={props.onClick}>Log out 
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
      <nav> 
        <div className="nav n" style={{ margin: 15 }}>
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Loopman</Link>

          </div>
          <ul className="nav navbar-nav">
            <li>
              <Link to="bookmarks">Favourites</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right" style={{ marginRight: 15 }}>
            {button}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
