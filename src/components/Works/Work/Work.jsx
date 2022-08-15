import React from 'react';
import btn from '../../../common/styles/Button.module.css'
import s from './Work.module.css'
import {Rotate} from "react-reveal";

const Work = (props) => {
    return (
        <Rotate top left>
            <div className={s.workContainer} style={props.style}>
                <div>
                    <div className={s.title}><h3>{props.title}</h3></div>
                </div>
                <div className={s.description}>{props.descriription}</div>
                <div className={s.btnBox}>
                    <a className={s.viewLink} href={props.href}><button className={btn.clickbtn}>View</button></a>
                </div>
            </div>
        </Rotate>
    );
};

export default Work;