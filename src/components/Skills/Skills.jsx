import React from 'react';
import s from './Skills.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import commonBtn from '../../common/styles/Button.module.css'
import Title from "../../common/components/Title/Title";
import InfoCard from "../../common/components/InfoCard/InfoCard";
import ProgressBar from "../../common/components/ProgressBar/ProgressBar";
import ContactsBar from "../../common/components/ContactsBar/ContactsBar";
import AnimatedText from "../../common/components/AnimatedText/AnimatedText";
import {useNavigate} from "react-router-dom";
import {Fade, Flip, Roll, Slide} from "react-reveal";
import selfy from '../../assets/images/selfy.jpg'

const Skills = () => {
    const navigate = useNavigate()

    const viewCvHandler = () => {
        navigate('/cv')
    }

    return (
        <div className={s.mainContainer}>
            <div className={s.containerInner}>
                <Title preTitle={'My intro'} title={'About Me'} isBar={true}/>
                <section className={s.aboutBlock}>
                    <div className={s.photoBtnBox}>
                        <Slide top>
                            <div className={s.homeProfile}>
                                <img src={selfy} className={s.selfy}/>
                            </div>
                        </Slide>
                       <Slide bottom>
                           <div className={s.btnBox}>
                               <button className={commonBtn.clickbtn} onClick={viewCvHandler}>
                                   View CV <FontAwesomeIcon icon={faDownload} size='xs'/>
                               </button>
                           </div>
                       </Slide>
                    </div>
                    <div className={s.aboutMeTextBlock}>
                        <Slide right>
                            <h3>Who Am <span className={s.text}>I ?</span></h3>
                            <h2>I'm Artem Sarkisyants, A <span className={s.titleText}>Frontend Developer</span></h2>
                            <AnimatedText/>
                        </Slide>
                        <Fade bottom>
                            <div className={s.aboutMeText}>
                                I'm a frontend developer with experience in
                                creating SPA using React,TypeScript,
                                JavaScript, HTML/CSS, Redux. I'm planning to
                                study Node.js/C#, because it is really
                                interesting for me and has close touch for my
                                future plans. Usually i prefer to spend my free
                                time on improving my English to Upper Intermediate level,
                                studying new technologies and do some pet-projects(
                                have some interesting ideas). Ready to
                                consider project work and full-time
                                employment.
                            </div>
                        </Fade>
                        <div className={s.contactsBarBox}>
                            <ContactsBar/>
                        </div>
                    </div>
                </section>
                <div className={s.personalInformation}>
                    <Roll top>
                        <h2 className={s.personalInfoTitle}>Personal <span className={s.titleText}>Information</span></h2>
                    </Roll>
                    <section className={s.lists}>
                        <Flip left>
                            <div>
                                <ul className={s.infoList}>
                                    <li>First Name: <span className={s.infoText}>Artem</span></li>
                                    <li>Last Name: <span className={s.infoText}>Sarkisyants</span></li>
                                    <li>Address: <span className={s.infoText}>3/2 Vasilenko street,<br/> Blagoveshensk city</span></li>
                                    <li>From: <span className={s.infoText}>Amurskaya state, Russia</span></li>
                                    <li>Age: <span className={s.infoText}>24 years</span></li>
                                </ul>
                            </div>
                        </Flip>
                        <hr className={s.separator}/>
                        <Flip right>
                            <div>
                                <ul className={s.infoList}>
                                    <li>E-mail: <span className={s.text}>kvaizer999@mail.ru</span></li>
                                    <li>Phone: <span className={s.text}>+7(914)-598-60-67</span></li>
                                    <li>Telegram: <span className={s.text}>@ArtemSarkisyants</span></li>
                                    <li>Languages: <span className={s.infoText}>English, Russia</span></li>
                                    <li>Freelance: <span className={s.infoText}>Available</span></li>
                                </ul>
                            </div>
                        </Flip>
                    </section>
                    <Title preTitle={'Check Out My Resume'} title={'My Resume'} isBar={true}/>
                    <section className={s.packContainer}>
                        <div className={s.cardsContainer}>
                            <h2>Education</h2>
                            <InfoCard title={'React/Redux/TS course'} place={'IT-INCUBATOR'} text={'Retraining as a Frontend Developer. Stack: React/Redux/TS'}/>
                            <InfoCard title={'Team project'} place={'IT-KAMASUTRA'} text={'App for infinity education'}/>
                            <InfoCard title={'Specialist Degree of Rocket Engineering'} place={'BMSTU(Moscow)'} text={'Design, production and operation of rockets and rocket launch systems'}/>
                        </div>
                        <div className={s.cardsContainer}>
                            <h2>Experience</h2>
                            <InfoCard title={'Design engineer(3 category)'} place={'Research institute of rocket launch systems'} text={'Department of compressed gas supply systems'}/>
                            <InfoCard title={'English(B1/B2)'} place={'American Club of Education'} text={'2019-2021: group lessons(B1), 2021-2022: Personal tutor(B2)'}/>
                            <InfoCard title={'Individual entrepreneur'} place={'EnergoStroyAudit'} text={'Supply, installation, design and service of heat measuring nodes'}/>
                        </div>
                    </section>
                    <Title preTitle={'My Level Of Knowledge In Some Tools'} title={'My Skills'} isBar={true}/>
                    <section className={s.packContainer}>
                        <div className={s.skillsContainer}>
                            <h2 className={s.personalInfoTitle}>Hard <span className={s.titleText}>Skills</span></h2>
                            <ProgressBar title={'React'} size={80}/>
                            <ProgressBar title={'React hooks'} size={90}/>
                            <ProgressBar title={'Redux/ReduxToolkit'} size={70}/>
                            <ProgressBar title={'TS/JS'} size={70}/>
                            <ProgressBar title={'HTML5'} size={80}/>
                            <ProgressBar title={'CSS3/SCSS'} size={60}/>
                            <ProgressBar title={'Formik/Redux-form'} size={60}/>
                            <ProgressBar title={'Jest'} size={40}/>
                            <ProgressBar title={'React-router-dom'} size={80}/>
                            <ProgressBar title={'Redux-thunk'} size={90}/>
                            <ProgressBar title={'Redux-saga'} size={70}/>
                            <ProgressBar title={'REST API(Axios)'} size={80}/>
                            <ProgressBar title={'MaterialUI'} size={60}/>
                            <ProgressBar title={'Postman'} size={70}/>
                        </div>
                        <div className={s.skillsContainer}>
                            <h2 className={s.personalInfoTitle}>Soft <span className={s.titleText}>Skills</span></h2>
                            <ProgressBar title={'Communication'} size={80}/>
                            <ProgressBar title={'Teamwork'} size={90}/>
                            <ProgressBar title={'Creativity'} size={70}/>
                            <ProgressBar title={'Initiative'} size={70}/>
                            <ProgressBar title={'Self-dependence'} size={80}/>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};


export default Skills;