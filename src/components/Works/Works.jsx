import React from 'react';
import s from './Works.module.css'
import Work from './Work/Work';

import socialImg from '../../assets/images/social-network.jpg'
import infinity_education from '../../assets/images/infinity_education.png'
import todolistImg from '../../assets/images/todolist.jpg'
import bookShelfImg from '../../assets/images/book-shelf.jpg'
import Title from "../../common/components/Title/Title";

const Works = () => {
    const styleObjCreator = (a) => {
        return {
            backgroundImage: `url(${a})`
        }
    }

    return (
        <div className={s.mainContainer}>
            <div className={s.containerInner}>
                <Title preTitle={'Showcasing some of my works'} title={'My Portfolio'} isBar={true}/>
                <div className={s.containerInnerInner}>
                    <div className={s.worksContainer}>
                        <Work title={'Infinity Education'}
                              href={'https://kvaizer.github.io/infinity_education'}
                              style={styleObjCreator(infinity_education)}
                              descriription={'App for infinity education via packs with questions'}/>
                        <Work title={'Todolist'}
                              href={'https://kvaizer.github.io/todolist'}
                              style={styleObjCreator(todolistImg)}
                              descriription={'App for planning your schedule'}
                       />
                        <Work title={'Social network'}
                              href={'https://kvaizer.github.io/social_net_work'}
                              style={styleObjCreator(socialImg)}
                              descriription={'Trying to create something, that people use every day'}/>
                        <Work title={'Book shelf'}
                              href={'https://kvaizer.github.io/bookShelf'}
                              style={styleObjCreator(bookShelfImg)}
                              descriription={'An app to keep track of what you\'ve read'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;