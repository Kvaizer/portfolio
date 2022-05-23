import './App.css';
import Header from "./components/Header/Header";
import React from "react";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import HireMe from "./components/HireMe/HireMe";
import FormForConnection from "./components/FormForConnection/FormForConnection";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <HireMe/>
            <FormForConnection/>
            <Footer/>
        </div>
    );
}

export default App;
