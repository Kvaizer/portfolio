import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedinIn, faTelegramPlane} from '@fortawesome/free-brands-svg-icons'
import {faVk} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import s from './ContactsBar.module.css'

const ContactsBar = () => {
    return (
        <div className={s.box}>
            <div className={s.line}></div>
            <ul className={s.navBar}>
                <li><a href="" className={s.link}><FontAwesomeIcon icon={faTelegramPlane} size={'3x'}/></a></li>
                <li><a href="" className={s.link}><FontAwesomeIcon icon={faVk} size={'3x'}/></a></li>
                <li><a href="" className={s.link}><FontAwesomeIcon icon={faGithub} size={'3x'}/></a></li>
                <li><a href="" className={s.link}><FontAwesomeIcon icon={faLinkedinIn} size={'3x'}/></a></li>
            </ul>
        </div>
    );
};

export default ContactsBar;