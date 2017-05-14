import React from 'react';
import Header from './Header';

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
