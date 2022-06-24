import React, {useState} from 'react';
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faBriefcase} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    const [state, setState] = useState(false)
    const rerender = () => {
        setState(!state)
    }
    const isActiveS = ({isActive}) => ({
        color: isActive ? 'white' : '#FF651C',
        background: isActive ? '#FF651C' : '#212529',
        textDecoration: 'none',
    })
    return (
        <nav className={s.headerHolder}>
            <div className={s.navigation}>
                <ul className={s.nav}>
                    <li
                        className={s.list}
                        onClick={rerender}>
                        <NavLink
                            to={PATH.MAIN}
                            style={isActiveS}>
                            <span className={s.icon}>
                                <FontAwesomeIcon
                                    icon={faHouse}
                                    size={"2x"}/>
                            </span>
                            <span className={s.tip}>Main</span>
                        </NavLink>
                    </li>
                    <li
                        onClick={rerender}>
                        <NavLink
                            to={PATH.SKILLS}
                            style={isActiveS}>
                            <span className={s.icon}>
                                <FontAwesomeIcon
                                    icon={faUser}
                                    size={"2x"}/>
                            </span>
                            <span className={s.tip}>AboutMe</span>
                        </NavLink>
                    </li>
                    <li className={s.list}
                        onClick={rerender}>
                        <NavLink
                            to={PATH.WORKS}
                            style={isActiveS}>
                            <span className={s.icon}>
                                <FontAwesomeIcon
                                    icon={faBriefcase}
                                    size={"2x"}/>
                            </span>
                            <span className={s.tip}>Portfolio</span>
                        </NavLink>
                    </li>
                    <li className={s.list}
                        onClick={rerender}>
                        <NavLink
                            to={PATH.CONTACTS}
                            style={isActiveS}>
                            <span className={s.icon}>
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    size={"2x"}/>
                            </span>
                            <span className={s.tip}>Contacts</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;