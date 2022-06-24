import React from 'react';
import s from './Main.module.css';
import commonBar from '../../common/styles/AnimatedBar.module.css'
import commonBtn from '../../common/styles/Button.module.css'
import ContactsBar from "../../common/components/ContactsBar/ContactsBar";
import AnimatedText from "../../common/components/AnimatedText/AnimatedText";

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
                <div className={s.homeProfile}>
                    <img src={'https://c1.35photo.pro/photos_col/r2/349/1745310_500r.jpg'}/>
                </div>
                <div className={s.aboutMe}>
                    <p>Get To Know Me</p>
                    <h1>Artem Sarkisyants</h1>
                    <div className={commonBar.animatedBar}></div>
                    <AnimatedText/>
                    <ContactsBar/>
                    <div className={s.aboutMeText}>
                        I'm a frontend developer with experience in
                        creating SPA using React,TypeScript,
                        JavaScript, HTML/CSS, Redux. I'm planning to
                        study Node.js/C#, because it is really
                        interesting for me and has close touch for my
                        future plans. Usually i prefer to spend my free
                        time on improving my English to Advance level,
                        studying new technologies and do some pet-projects(
                        have some interesting ideas). Ready to
                        consider project work and full-time
                        employment.
                    </div>
                    
                    <div className={s.btnBox}>
                        <button className={commonBtn.clickbtn}>Hire Me</button>
                        <button className={commonBtn.clickbtn}>About Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;