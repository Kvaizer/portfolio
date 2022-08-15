import React, {useState} from 'react';
import s from './HireMe.module.css';
import Title from "../../common/components/Title/Title";
import ContactForm from "../../common/components/ContactForm/ContactForm";
import ContactInfo from "../../common/components/ContactInfo/ContactInfo";
import ContactsBar from "../../common/components/ContactsBar/ContactsBar";
import btn from "../../common/styles/Button.module.css";
import {Fade} from "react-reveal";

const HireMe = () => {
    const [popUp, setPopUp] = useState(false)

    return (
        <div className={s.mainContainer}>
            <div className={s.containerInner}>
                <Title preTitle={'Feel Free To Contact Me Any Times'} title={'My Contacts'} isBar={true}/>
                <div className={s.contactBox}>
                    <ContactForm setPopUp={setPopUp}/>
                    <ContactInfo/>
                </div>
                <div className={s.contactBarBox}>
                    <ContactsBar/>
                </div>
                <Fade bottom>
                    <div>
                        <p>Copyright©  2022 Avs All rights reserved</p>
                    </div>
                </Fade>
            </div>
            {popUp && <div className={s.popupBox}>
                <div className={s.popup}>
                    <div className={s.popupText}>
                        Your message have been successfully sent!!!
                    </div>
                    <button
                        onClick={() => setPopUp(false)}
                        className={btn.clickbtn}>close</button>
                </div>
            </div>}
        </div>
    );
};

export default HireMe;