import React from 'react';
import s from "./AnimatedText.module.css";

const AnimatedText = () => {
    return (
        <div className={s.animatedText}>
            <h3>Frontend</h3>
            <h3>Developer</h3>
            <h3>Engineer</h3>
        </div>
    );
};

export default AnimatedText;