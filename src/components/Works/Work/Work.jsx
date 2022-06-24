import React from 'react';
import common from "../../../common/styles/CommonFlexContainer.module.css";
import btn from '../../../common/styles/Button.module.css'
import s from './Work.module.css'

const Work = (props) => {
    return (
        <div className={s.workContainer} style={props.style}>
            <div>
                <div className={s.title}><h3>{props.title}</h3></div>
            </div>
            <div className={s.description}>{props.descriription}</div>
            <div className={s.btnBox}>
                <a><button className={btn.clickbtn}>View</button></a>
            </div>
        </div>
    );
};

export default Work;