import React from 'react';
import s from './HireMe.module.css';
import Title from "../../common/components/Title/Title";
import ContactForm from "../../common/components/ContactForm/ContactForm";
import ContactInfo from "../../common/components/ContactInfo/ContactInfo";
import ContactsBar from "../../common/components/ContactsBar/ContactsBar";

const HireMe = () => {
    return (
        <div className={s.mainContainer}>
            <div className={s.containerInner}>
                <Title preTitle={'Feel Free To Contact Me Any Times'} title={'My Contacts'} isBar={true}/>
                <div className={s.contactBox}>
                    <ContactForm/>
                    <ContactInfo/>
                </div>
                <div className={s.contactBarBox}>
                    <ContactsBar/>
                </div>
                <div>
                    <p>Copyright©  2022 Avs Technolabs All rigths reserved</p>
                </div>
            </div>
        </div>
    );
};

export default HireMe;