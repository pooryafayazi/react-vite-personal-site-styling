// src\Contact\Contact.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import './Contact.css'


const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '', agree: false });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
    };

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = 'نام را وارد کنید';
        // if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'ایمیل معتبر نیست';
        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(form.email)) errs.email = 'ایمیل معتبر نیست';
        if (form.message.trim().length < 10) errs.message = 'پیام حداقل ۱۰ کاراکتر باشد';
        if (!form.agree) errs.agree = 'تأیید قوانین الزامی است';
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        const messages = JSON.parse(localStorage.getItem('messages') || '[]');
        messages.push({ ...form, date: new Date().toISOString() });
        localStorage.setItem('messages', JSON.stringify(messages));

        navigate('/thanks', { state: { name: form.name } });
    };



    return (
        <section className='contact'>
            <h2>تماس با من</h2>
            <form onSubmit={handleSubmit} noValidate className="form">
                <label>
                    نام و نام‌خانوادگی
                    <input name="name" value={form.name} onChange={handleChange} />
                    {errors.name && <span className="error">{errors.name}</span>}
                </label>

                <label>
                    ایمیل
                    <input name="email" value={form.email} onChange={handleChange} />
                    {errors.email && <span className="error">{errors.email}</span>}
                </label>

                <label>
                    پیام
                    <textarea name="message" rows="5" value={form.message} onChange={handleChange} />
                    {errors.message && <span className="error">{errors.message}</span>}
                </label>

                <label className="checkbox">
                    <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
                    قوانین و حریم خصوصی را می‌پذیرم
                </label>
                {errors.agree && <span className="error">{errors.agree}</span>}

                <Button type="submit" variant="solid" fullWidth> ارسال </Button>
                
            </form>
        </section>
    )
};


export default Contact;