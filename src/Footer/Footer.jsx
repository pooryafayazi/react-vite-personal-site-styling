// src\Footer\Footer.jsx
import React from 'react';
import './Footer.css'


const Footer = () => (
    <footer className="footer">
      <small>© {new Date().getFullYear()} همه حقوق محفوظ است.</small>
    </footer>
);

export default Footer;