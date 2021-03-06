import React from 'react';
import {useFormik} from 'formik';
import s from './ContactForm.module.css'
import btn from '../../styles/Button.module.css'

const ContactForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            subject: '',
            message: ''
        },
        validate: (values) => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.name) {
                errors.name = 'Required';
            }

            if (!values.subject) {
                errors.subject = 'Please, fill this field';
            }

            if(!values.message) {
                errors.message = 'Please, fill this field'
            }

            return errors;
        },
        onSubmit: values => {
            alert(alert(JSON.stringify(values)))
            formik.resetForm()
        },
    })

    return (
        <section className={s.loginBox}>
                <h2 className={s.title}>Contact Me</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className={s.nameEmail}>
                        <div className={s.name}>
                            <input type='name'
                                   placeholder={'Name'}
                                   {...formik.getFieldProps('name')}/>
                            {formik.touched.name && formik.errors.name
                            && <div className={s.error}><div className={s.textError}>{formik.errors.name}</div></div>}
                        </div>
                        <div className={s.email}>
                            <input type='email'
                                   placeholder={'Email'}
                                   {...formik.getFieldProps('email')}/>
                            {formik.touched.email && formik.errors.email
                            && <div className={s.error}>
                                <div className={s.textError}>
                                    {formik.errors.email}
                                </div>
                            </div>}
                        </div>
                    </div>
                    <div className={s.subject}>
                        <input type='subject'
                               placeholder={'Subject'}
                               {...formik.getFieldProps('subject')}/>
                        {formik.touched.subject && formik.errors.subject
                        && <div className={s.error}><div className={s.textError}>{formik.errors.subject}</div></div>}
                    </div>
                    <div className={s.message}>
                    <textarea name='message'
                              placeholder={'Message'}
                              {...formik.getFieldProps('message')}/>
                        {formik.touched.message && formik.errors.message
                        && <div className={s.error}>
                            <div className={s.textError}>
                                {formik.errors.message}
                            </div>
                        </div>}
                    </div>
                    <div className={s.btnBox}>
                        <button type='submit'
                                className={btn.clickbtn}
                                disabled={formik.isSubmitting}>
                            Send Message
                        </button>
                    </div>
                </form>
        </section>
    );
};

export default ContactForm;