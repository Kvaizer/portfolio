import React from 'react';
import common from '../../common/styles/Container.module.css'
import s from './Skills.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={s.mainContainer}>
            <div className={s.containerInner} >
                    <h2>My skills</h2>
                <div className={common.container}>
                    <Skill title={'React'} descriription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae, eos esse iusto qui reprehenderit unde vero. Aperiam blanditiis consequuntur cum illo magnam nemo officiis, ullam. Eius, id, nisi. Magnam!'}/>
                    <Skill title={'Redux'} descriription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae, eos esse iusto qui reprehenderit unde vero. Aperiam blanditiis consequuntur cum illo magnam nemo officiis, ullam. Eius, id, nisi. Magnam!'}/>
                    <Skill title={'JS'} descriription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae, eos esse iusto qui reprehenderit unde vero. Aperiam blanditiis consequuntur cum illo magnam nemo officiis, ullam. Eius, id, nisi. Magnam!'}/><Skill title={'JS'} descriription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae, eos esse iusto qui reprehenderit unde vero. Aperiam blanditiis consequuntur cum illo magnam nemo officiis, ullam. Eius, id, nisi. Magnam!'}/>
                </div>
            </div>
        </div>
    );
};


export default Skills;