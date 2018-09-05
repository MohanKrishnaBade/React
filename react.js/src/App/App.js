import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http-service';

const http = new HttpService();

class App extends Component {

    constructor(props) {
        super(props);
        http.getUsers();
    }

    render() {
        return (
            <div className="container App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to new react_app</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
