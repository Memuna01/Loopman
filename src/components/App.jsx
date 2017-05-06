import React from 'react';
import Header from './Header';
import Index from './Index';

class App extends React.Component{
    render(){
        return (
            <div className="main-container">
                <div role="navigation">
                    <Header />
                </div>
                <div className="col-sm-10 col-sm-offset-1">
                    {this.props.children}
                </div>                
            </div>
            
        )
    }
}

export default App;