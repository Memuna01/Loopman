import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import { hashHistory } from 'react-router';

 
class Login extends React.Component{
  constructor(){
    super();
  }

storeUserData(response){
  localStorage.setItem('id_token', response.googleId);
  console.log(response);
  console.log("response id",response.googleId);;
  hashHistory.push('/');
}

responseGoogle(response){
  console.log(response);
}
 render(){
  return(
    <div className="col-sm-8 col-sm-offset-2">
      <h2> Hey There! Welcome To Loopman!</h2>
      <h4>Stay in the loop, anytime and anywhere...</h4>
      <br/><br/>

      <p>Please Login to continue</p>
      <GoogleLogin
        clientId="386303946943-jflho43lqvq3fg2eft9hkddb0aka06h4.apps.googleusercontent.com"
        buttonText="Login with Google+"
        onSuccess={this.storeUserData}
        onFailure={this.responseGoogle}
    />
  </div>
  )
 }
}

export default Login;