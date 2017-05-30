import React from 'react';
import GoogleLogin from 'react-google-login';
import FontAwesome from 'react-fontawesome';
import { hashHistory } from 'react-router';

/**
* This function logs the user into the app and stores their information
* in local storage, which is then deleted once they log out.
* @param {Array} response
*/
const storeUserData = (response) => {
  localStorage.setItem('id_token', response.googleId);
  localStorage.setItem('googleGivenName', response.profileObj.givenName);
  hashHistory.push('/sources');
};

/**
* This function shows errors if the user could not be authenticated.
*/
const responseGoogle = () => {
  alert('Oops! Something went wrong. Please try again');
};

/**
* This is a pure function which
* uses an npm module: react-google-login component to
* log in the user.
* @returns a react element.
*/
const Login = () => (
  <div>
    <GoogleLogin
      clientId={process.env.CLIENT_ID}
      className="btn btn-danger"
      onSuccess={storeUserData}
      onFailure={responseGoogle}
    >
      <FontAwesome
        name="google"
        className="super-crazy-colors"
      />
      <span> Login with Google+ </span>
    </GoogleLogin>
  </div>
);

export default Login;
