import React, {Component} from 'react';
import './App.css';
import Alert from "./Alert/Alert";

class App extends Component {
    
    someHandler = () => {
    
    };
    
    render() {
        return (
            <div className="App">
                <Alert type="primary">This is primary alert</Alert>
                <Alert type="success" dismiss={this.someHandler}>This is success alert</Alert>
                <Alert type="danger">This is danger alert</Alert>
                <Alert type="warning" dismiss={this.someHandler}>This is warning alert</Alert>
            </div>
        );
    }
}

export default App;
