// src\Header\Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => (
    <header className="header">
      <h1>سایت شخصی من</h1>
      <nav>
        <NavLink to="/" end>خانه </NavLink>
        <NavLink to="/about"> درباره‌من </NavLink>
        <NavLink to="/projects"> نمونه‌کارها</NavLink> 
        <NavLink to="/contact">تماس</NavLink>
      </nav>
    </header>
);

export default Header;