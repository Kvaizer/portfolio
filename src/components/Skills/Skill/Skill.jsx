import React from 'react';
import common from "../../../common/styles/CommonFlexContainer.module.css";

const Skill = (props) => {
    return (
        <div className={common.mainContainer}>
            <div>
                <div className={common.skillLogoContainer}>
                    <img src="" alt=""/>
                </div>
                <div className={common.title}><h3>{props.title}</h3></div>
            </div>
            <div className={common.description}><span>{props.descriription}</span></div>
        </div>
    );
};

export default Skill;