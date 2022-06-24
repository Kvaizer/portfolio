import React from 'react';
import s from './Works.module.css'
import Work from './Work/Work';
import common from '../../common/styles/AnimatedBar.module.css'
import socialImg from '../../assets/images/social-network.jpg'
import todolistImg from '../../assets/images/todolist.jpg'
import chessImg from '../../assets/images/chess.jpg'
import bookShelfImg from '../../assets/images/book-shelf.jpg'
import Title from "../../common/components/Title/Title";

const Works = () => {
    const styleObjCreator = (a) => {
        return {
            backgroundImage: `url(${a})`
        }
    }

    const scn = {
        backgroundImage: `url(${socialImg})`
    }

    const tdl = {
        backgroundImage: `url(${todolistImg})`
    }

    const bookShelf = {
        backgroundImage: `url(${bookShelfImg})`
    }

    const chess = {
        backgroundImage: `url(${chessImg})`
    }

    return (
        <div className={s.mainContainer}>
            <div className={s.containerInner}>
                <Title preTitle={'Showcasing some of my works'} title={'My Portfolio'} isBar={true}/>
                <div className={s.containerInnerInner}>
                    <div className={s.worksContainer}>
                        <Work title={'Todolist'}
                              style={styleObjCreator(todolistImg)}
                              descriription={'Application for planning tour schedule'}/>
                        <Work title={'Social network'}
                              style={styleObjCreator(socialImg)}
                              descriription={'Trying to create something, that people use every day'}/>
                        <Work title={'Book shelf'}
                              style={styleObjCreator(bookShelfImg)}
                              descriription={'I like read books'}/>
                        <Work title={'Chess'}
                              style={styleObjCreator(chessImg)}
                              descriription={'Chess is my favorite game'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;