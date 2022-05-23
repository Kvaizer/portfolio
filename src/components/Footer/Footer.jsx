import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.mainContainer}>
            <div className={s.containerInner}>
                <h3>Artem Sarkisyants</h3>
                <div className={s.iconsContainer}>
                    <div className={s.iconContainer}><img src="" alt="" width={'50px'} heigth={'50px'}/></div>
                    <div className={s.iconContainer}><img src="" alt=""/></div>
                    <div className={s.iconContainer}><img src="" alt=""/></div>
                    <div className={s.iconContainer}><img src="" alt=""/></div>
                </div>
                <div className={s.ps}>@2022 All rights reserved</div>
            </div>
        </div>
    );
};

export default Footer;