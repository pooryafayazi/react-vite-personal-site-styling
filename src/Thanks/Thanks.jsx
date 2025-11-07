// src\Thanks\Thanks.jsx
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Thanks = () => {
  const { state } = useLocation();
  const name = state?.name || 'دوست عزیز';
  return (
    <section>
      <h2>ممنون {name}!</h2>
      <p>پیام شما دریافت شد. به‌زودی پاسخ می‌دهم.</p>
      <Link to="/">بازگشت به خانه</Link>
    </section>
  );
}

export default Thanks;