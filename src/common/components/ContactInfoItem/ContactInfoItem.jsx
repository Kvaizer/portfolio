import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import s from './ContactInfoItem.module.css'

const ContactInfoItem = (props) => {

    return (
        <div className={s.box}>
            <div className={s.iconBox}>
                <span className={s.spanIcon}><FontAwesomeIcon icon={props.icon} size={"2x"}/></span>
            </div>
            <div className={s.textBox}>
                <h5 className={s.text}>{props.title}</h5>
                <span className={s.textSpan}>{props.info}</span>
            </div>
        </div>
    );
};

export default ContactInfoItem;