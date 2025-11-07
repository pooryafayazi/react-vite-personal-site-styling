// src\Header\Header.jsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Header(){
  return (
    <Navbar bg="white" expand="md" className="border-bottom sticky-top">
      <Container className="container-narrow">
        <Navbar.Brand className="fw-bold text-primary">سایت شخصی من</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto gap-1">
            <Nav.Link as={NavLink} to="/" end>خانه</Nav.Link>
            <Nav.Link as={NavLink} to="/about">درباره‌من</Nav.Link>
            <Nav.Link as={NavLink} to="/projects">نمونه‌کارها</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">تماس</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}