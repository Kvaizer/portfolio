import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedinIn, faTelegramPlane} from '@fortawesome/free-brands-svg-icons'
import {faVk} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faCode} from '@fortawesome/free-solid-svg-icons'
import s from './ContactsBar.module.css'
import {Roll} from "react-reveal";

const ContactsBar = () => {

    return (
        <Roll bottom>
        <div className={s.box}>
            <div className={s.line}></div>
            <ul className={s.navBar}>
                <li><a href="https://t.me/ArtemSarkisyants" className={s.link}><FontAwesomeIcon icon={faTelegramPlane} size={'3x'}/></a></li>
                <li><a href="https://vk.com/id186384598" className={s.link}><FontAwesomeIcon icon={faVk} size={'3x'}/></a></li>
                <li><a href="https://github.com/Kvaizer" className={s.link}><FontAwesomeIcon icon={faGithub} size={'3x'}/></a></li>
                <li><a href="https://www.linkedin.com/in/%D0%B0%D1%80%D1%82%D1%91%D0%BC-%D1%81%D0%B0%D1%80%D0%BA%D0%B8%D1%81%D1%8F%D0%BD%D1%86-574a93245/" className={s.link}><FontAwesomeIcon icon={faLinkedinIn} size={'3x'}/></a></li>
                <li><a href="https://www.codewars.com/users/Kvaizer" className={s.link}><FontAwesomeIcon icon={faCode} size={'3x'}/></a></li>
            </ul>
        </div>
        </Roll>
    );
};

export default ContactsBar;