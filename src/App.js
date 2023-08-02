// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Join from './Navbar/Join';
import Contact from './Navbar/Contact';
import Everest from './Everest';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Everest/>}/>
        <Route path="/join" element={<Join />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
