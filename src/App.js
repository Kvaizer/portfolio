import './App.css';
import React from "react";
import {HashRouter} from "react-router-dom";
import Pages from "./components/Router/Pages";
import Nav from "./components/Router/Nav";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Nav/>
                <Pages/>
            </HashRouter>
        </div>
    );
}

export default App;
