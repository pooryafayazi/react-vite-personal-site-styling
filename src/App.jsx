// src\App.jsx
import React from 'react';
import { Container } from 'react-bootstrap'
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import { Route, Routes} from 'react-router-dom';
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Projects from './Projects/Projects.jsx';
import Contact from './Contact/Contact.jsx';
import Thanks from './Thanks/Thanks.jsx';
import './App.css'


function App() {
  return (
    <div className="app-shell">
      <Header />
      <Container className="container-narrow py-4">
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </main>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
