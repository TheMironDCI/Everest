// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Join from './Navbar/Join';
import Contact from './Navbar/Contact';
import Everest from './Everest';
import English from './Courses/English';
import Russian from './Courses/Russian';
import Frontend from './Courses/Frontend';
import Dispeching from './Courses/Dispeching';
import CoursesPage from './Section1/CoursesPage';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Everest/>}/>
        <Route path='/courses' element={<CoursesPage/>}/>
        <Route path="/join" element={<Join />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/english" element={<English />} />
        <Route path="/russian" element={<Russian />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/dispeching" element={<Dispeching />} />
      </Routes>
    </Router>
  );
};

export default App;
