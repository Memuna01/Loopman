import React from 'react';
import Header from './Header.jsx';

/**
* This is a pure function that receives properties as props parameter
* and is the parent component in which all other child components
* are displayed as "props.children".
* @param {object} props
* @returns a react element.
*/
const App = props => (
  <div className="container-fullwidth">
    <div>
      <Header />
    </div>
    <div>
      {props.children}
    </div>
    <div />
  </div>
);

export default App;
