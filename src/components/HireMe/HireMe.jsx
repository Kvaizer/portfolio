import React from 'react';
import s from './HireMe.module.css';
import btn from '../../common/styles/Button.module.css'

const HireMe = () => {
    return (
        <div className={s.mainContainer}>
           <div className={s.containerInner}>
               <div className={s.title}>
                   <h3>I'm considering options of distance work</h3>
               </div>
               <div className={s.button}>
                   <button className={btn.btn}>Hire me!</button>
               </div>
           </div>
        </div>
    );
};

export default HireMe;