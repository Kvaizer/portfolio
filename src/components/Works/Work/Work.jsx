import React from 'react';
import common from "../../../common/styles/CommonFlexContainer.module.css";
import btn from '../../../common/styles/Button.module.css'

const Work = (props) => {
    return (
        <div className={common.mainContainer}>
            <div>
                <div className={common.skillLogoContainer}>
                    <img src="" alt=""/>
                </div>
                <div className={common.title}><h3>{props.title}</h3></div>
            </div>
            <div className={common.description}><span>{props.descriription}</span></div>
            <button className={btn.btn}><a>View</a></button>
        </div>
    );
};

export default Work;