import React from 'react';
import s from './ContactInfo.module.css'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import ContactInfoItem from "../ContactInfoItem/ContactInfoItem";
import {Slide} from "react-reveal";

const ContactInfo = () => {
    return (
        <Slide right>
            <div className={s.box}>
                <h2 className={s.title}>Contact Info</h2>
                <p className={s.text}>Always available for freelance work if the right project comes along, Feel free to contact me!</p>
                <ContactInfoItem icon={faUser} title={'Name'} info={'Artem Sarkisyants'}/>
                <ContactInfoItem icon={faLocationPin} title={'Location'} info={'Blagoveshensk, Amurskaya state, Russia'}/>
                <ContactInfoItem icon={faPhone} title={'Call Me'} info={'+79145986067'}/>
                <ContactInfoItem icon={faTelegram} title={'Write Me'} info={'@ArtemSarkisyants'}/>
                <ContactInfoItem icon={faMailBulk} title={'Email Me'} info={'kvaizer999@mail.ru'}/>
            </div>
        </Slide>
    );
};

export default ContactInfo;