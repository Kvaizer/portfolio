import React from 'react';
import commonBar from "../../styles/AnimatedBar.module.css";
import s from './Title.module.css'

const Title = ({preTitle, title, isBar}) => {
    const first = title.split(' ')[0].toString()
    const second = title.split(' ')[1].toString()
    return (
            <div className={s.titleBox}>
                <p>{preTitle}</p>
                <h1>{first} <span className={s.text}>{second}</span></h1>
                {isBar ? <div className={commonBar.animatedBar}></div> : null}
            </div>
    );
};

export default Title;