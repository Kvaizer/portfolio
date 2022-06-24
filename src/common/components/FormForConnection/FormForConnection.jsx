import React from 'react';
import s from './FormForConnection.module.css';
import btn from '../../styles/Button.module.css'

const FormForConnection = () => {
    return (
        <div className={s.mainContainer}>
            <div className={s.containerInner}>
                <h3 className={s.title}>Contacts</h3>
                    <form className={s.form}>
                        <input type="text" className={s.input}/>
                        <input type="text" className={s.input}/>
                        <textarea className={s.textArea}/>
                    </form>
                <div>
                    <button className={btn.btn}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default FormForConnection;