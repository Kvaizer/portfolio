import React from 'react';
import {Routes, Route} from "react-router-dom";
import Main from "../Main/Main";
import Skills from "../Skills/Skills";
import HireMe from "../HireMe/HireMe";
import Works from "../Works/Works";

export const PATH = {
    MAIN: '/main',
    ERROR_404: '*/',
    SKILLS: '/skills',
    WORKS: '/works',
    CONTACTS: '/contacts',
}

const Pages = () => {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Main/>}/>
                <Route path={PATH.MAIN} element={<Main/>}/>
                <Route path={PATH.SKILLS} element={<Skills/>}/>
                <Route path={PATH.CONTACTS} element={<HireMe/>}/>
                <Route path={PATH.WORKS} element={<Works/>}/>
            </Routes>
        </div>
    );
};

export default Pages;