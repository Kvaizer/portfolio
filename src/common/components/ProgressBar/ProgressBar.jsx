import React from 'react';
import s from './ProgressBar.module.css'

const ProgressBar = ({title, size}) => {
    let style = {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#ff651c',
        width: `${size}%`,
        height: '5px',
        borderBottomLeftRadius: '50%',
        borderBottomRightRadius: '50%',
        borderTopRightRadius: '50%',
    }

    return (
        <div className={s.box}>
            <div className={s.title}><span>{title}</span></div>
            <div className={s.line}>
                <div style={style}>
                    <span className={s.lineTitle}>{`${size}%`}</span>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;