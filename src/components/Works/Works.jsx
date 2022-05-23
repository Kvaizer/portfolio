import React from 'react';
import s from './Works.module.css'
import Work from "./Work/Work";
import common from '../../common/styles/Container.module.css'
import Skill from "../Skills/Skill/Skill";


const Works = () => {
    return (
        <div className={s.mainContainer}>
            <div className={s.containerInner}>
                <div className={common.container}>
                    <h3>My Works</h3>
                </div>
                <div className={common.container}>
                    <Work title={'React'} descriription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae, eos esse iusto qui reprehenderit unde vero. Aperiam blanditiis consequuntur cum illo magnam nemo officiis, ullam. Eius, id, nisi. Magnam!'}/>
                    <Work title={'React'} descriription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae, eos esse iusto qui reprehenderit unde vero. Aperiam blanditiis consequuntur cum illo magnam nemo officiis, ullam. Eius, id, nisi. Magnam!'}/>
                    <Work title={'React'} descriription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae, eos esse iusto qui reprehenderit unde vero. Aperiam blanditiis consequuntur cum illo magnam nemo officiis, ullam. Eius, id, nisi. Magnam!'}/>
                </div>
            </div>
        </div>
    );
};

export default Works;