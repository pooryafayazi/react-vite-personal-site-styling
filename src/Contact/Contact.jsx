// src\Contact\Contact.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Alert } from 'react-bootstrap'

export default function Contact(){
  const [form,setForm]=useState({name:'',email:'',message:'',agree:false})
  const [errors,setErrors]=useState({})
  const nav=useNavigate()

  const validate=()=>{
    const e={}
    if(!form.name.trim()) e.name='نام را وارد کنید'
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email='ایمیل معتبر نیست'
    if(form.message.trim().length<10) e.message='حداقل ۱۰ کاراکتر'
    if(!form.agree) e.agree='تأیید قوانین الزامی است'
    setErrors(e); return !Object.keys(e).length
  }

  const submit=(ev)=>{
    ev.preventDefault(); if(!validate()) return
    const messages=JSON.parse(localStorage.getItem('messages')||'[]')
    messages.push({...form,date:new Date().toISOString()})
    localStorage.setItem('messages',JSON.stringify(messages))
    nav('/thanks',{state:{name:form.name}})
  }

  return (
    <section className="py-3">
      <h2 className="h4 text-primary fw-bold mb-3">تماس با من</h2>
      <Form noValidate onSubmit={submit} className="mx-auto" style={{maxWidth:640}}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>نام و نام‌خانوادگی</Form.Label>
          <Form.Control value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} isInvalid={!!errors.name}/>
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>ایمیل</Form.Label>
          <Form.Control value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} isInvalid={!!errors.email}/>
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label>پیام</Form.Label>
          <Form.Control as="textarea" rows={5} value={form.message}
                        onChange={e=>setForm(f=>({...f,message:e.target.value}))}
                        isInvalid={!!errors.message}/>
          <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
        </Form.Group>

        <Form.Check className="mb-3" label="قوانین و حریم خصوصی را می‌پذیرم"
                    checked={form.agree}
                    onChange={e=>setForm(f=>({...f,agree:e.target.checked}))}
                    isInvalid={!!errors.agree} feedback={errors.agree}/>
        <Button type="submit" className="w-100">ارسال</Button>
      </Form>
    </section>
  )
}