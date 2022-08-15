import React from 'react';
import s from './Main.module.css';
import commonBar from '../../common/styles/AnimatedBar.module.css'
import commonBtn from '../../common/styles/Button.module.css'
import ContactsBar from "../../common/components/ContactsBar/ContactsBar";
import AnimatedText from "../../common/components/AnimatedText/AnimatedText";
import {useNavigate} from "react-router-dom";
import selfy from '../../assets/images/selfy.jpg'
import {Roll, Slide} from "react-reveal";


const Main = () => {
    const navigate = useNavigate()

    const hireMeHandler = () => {
        navigate('/contacts')
    }

    const aboutMeHandler = () => {
        navigate('/skills')
    }

    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
                <Slide left>
                    <div className={s.homeProfile}>
                        <img src={selfy} className={s.selfy}/>
                    </div>
                </Slide>
                <div className={s.aboutMe}>
                    <Slide right>
                        <p>Get To Know Me</p>
                        <h1>Artem Sarkisyants</h1>
                        <div className={commonBar.animatedBar}></div>
                        <AnimatedText/>
                        <ContactsBar/>
                    </Slide>
                    <Roll top>
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
                    </Roll>
                    <div className={s.btnBox}>
                        <Slide left>
                            <button className={commonBtn.clickbtn} onClick={hireMeHandler}>Hire Me</button>
                        </Slide>
                        <Slide right>
                            <button className={commonBtn.clickbtn} onClick={aboutMeHandler}>About Me</button>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;