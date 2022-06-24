import React from 'react';
import s from './InfoCard.module.css'

const InfoCard = ({title, place, text}) => {
    return (
        <div className={s.box}>
            <h5>{title}</h5>
            <span>{place}</span>
            <p className={s.text}>{text}</p>
            <span className={s.arrow}></span>
        </div>
    );
};

export default InfoCard;