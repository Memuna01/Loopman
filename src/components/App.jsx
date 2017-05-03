import React from 'react';
import Header from './Header';
import Index from './Index';

class App extends React.Component{
    render(){
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <Header />
                </nav>
                <div className="col-sm-10 col-sm-offset-1">
                    {this.props.children}
                </div>
                
                <div className="container">
                    
                </div>
            </div>
            
        )
    }
}

export default App;