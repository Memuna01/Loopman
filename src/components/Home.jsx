import React from 'react';
import Footer from './Footer.jsx';

/**
* This is the welcome page and the landing page where
* users log into the application.
* @class Home
* @extends {React.Component}
*/
class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      welcomeNotif: localStorage.getItem('googleGivenName'),
    };
  }

  /**
  * This lifecycle method is called when the component state updates.
  * @returns a react element
  * @memberOf Home
  */
  render() {
    const isLoggedIn = localStorage.getItem('id_token');
    let signInPrompt = null;
    if (!isLoggedIn) {
      signInPrompt =
        (<p className="col-sm-4 col-sm-offset-4 explore">
          Excited yet? Sign in and explore!
        </p>);
    } else {
      signInPrompt =
        (<p className="col-sm-4 col-sm-offset-4 explore">
        Welcome, {this.state.welcomeNotif}
        </p>);
    }
    return (
        <div>
        <div className="jumbotron jumbo" style={{ textAlign: 'center' }}>
          <h2>Hey there, welcome to Loopman</h2>
          <p><i>We help you stay abreast of current news all
                around the world, anytime and anywhere...</i>
          </p>
          <br />
          { signInPrompt }
        </div>
          <img className="home-image"
            src="src/images/coffee-news.jpg" alt="home-image"
            width="100%" height="700"
          />
        <Footer />
      </div>
    );
  }
}


export default Home;
