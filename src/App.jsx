// src\App.jsx
import React from 'react';
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Contact from './Contact/Contact.jsx';
import Header from './Header/Header.jsx';
import Projects from './Projects/Projects.jsx';
import Footer from './Footer/Footer.jsx';
import Thanks from './Thanks/Thanks.jsx';
import { Route, Routes} from 'react-router-dom';
import './App.css'


function App() {
  return (
    <div className="container">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
