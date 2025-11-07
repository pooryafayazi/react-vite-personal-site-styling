// src\About\About.jsx
import React from 'react';
import Certificates from '../Certificates/Certificates';
import './About.css';

const About = () => {
  return (
    <section className='about'>
      <h2>دربارهٔ من</h2>

      <h3>تحصیلات</h3>
      <p>
        کارشناسی مهندسی کامپیوتر – دانشگاه شمال (۱۴۰۱/2021) با معدل ۱۸/۶۷.
      </p>

      <h3>زبان انگلیسی</h3>
      <p>
        سطح B2 – نمره IELTS: 6.0 (سال 2024).
      </p>

      <h3>پروژهٔ کارشناسی</h3>
      <p>
        طراحی و پیاده‌سازی مارکت‌پلیس آنلاین خرید/فروش خودرو با
        <strong> PHP, HTML, CSS, JavaScript, SQL Server</strong> به‌همراه
        پنل ادمین و بخش کاربری. امتیاز پروژه: ۲۰ از ۲۰.
      </p>

      <h3>علاقه‌مندی و مسیر</h3>
      <p>
        عاشق توسعهٔ بک‌اند و ساخت سرویس‌های پایدار هستم؛ روی Django/DRF،
        PostgreSQL، Docker و Nginx کار می‌کنم و به بهبود مستمر مهارت‌ها و
        مهاجرت کاری فکر می‌کنم.
      </p>

      <h3>لینک‌ها</h3>
      <ul>
        <li>وب‌سایت شخصی: <a href="https://itmeter.ir" target="_blank" rel="noreferrer">itmeter.ir</a></li>
        <li>نمایندگی ایرانخودرو: <a href="https://kavianico.ir" target="_blank" rel="noreferrer">kavianico.ir</a></li>
        <li>گیت‌هاب: <a href="https://github.com/pooryafayazi" target="_blank" rel="noreferrer">github.com/pooryafayazi</a></li>
      </ul>

       <Certificates />

      <div style={{ marginTop: '1rem' }}>
        <a className="btn" href="https://itmeter.ir/static/upload/Poorya-Fayazi-2025-10.pdf" download>
          دانلود رزومه PDF
        </a>
      </div>
    </section>
  );
};


export default About;