import React from 'react';
import s from './Main.module.css';
import common from '../../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={common.container}>
                <div className={s.aboutMe}>
                    <span>I am</span>
                    <h1>Artem Sarkisyants</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}><img src={''} width={'auto'} height={'400px'}/></div>
            </div>
        </div>
    );
};

export default Main;