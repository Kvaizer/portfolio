import React from 'react';
import s from './InfoCard.module.css'
import {Flip} from "react-reveal";

const InfoCard = ({title, place, text}) => {
    return (
        <Flip bottom>
            <div className={s.box}>
                <h5>{title}</h5>
                <span>{place}</span>
                <p className={s.text}>{text}</p>
                <span className={s.arrow}></span>
            </div>
        </Flip>
    );
};

export default InfoCard;