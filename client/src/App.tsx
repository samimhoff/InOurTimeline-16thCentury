import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Art } from './components/art/Art';
import { Architecture } from './components/art/subcategories/Architecture';
import { Nations } from './components/nations/Nations';
import { People } from './components/people/People';
import { Religion } from './components/religion/Religion';
import { Science } from './components/science/Science';
import { War } from './components/war/War';
import { Sidebar } from './components/sidebar/Sidebar';
import { Home } from './components/Home';
import { About } from './components/About';
import { NavBar } from './components/NavBar';
import { ErrorPage } from './components/Error';

import './App.css';

export const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="main">
        <Sidebar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nations" element={<Nations />} />
            <Route path="/people" element={<People />} /> 
            <Route path="/art/" element={<Art />} />
            <Route path="/war/" element={<War />} />
            <Route path="/religion/" element={<Religion />} />
            <Route path="/science/" element={<Science />} />
            <Route path="/about/" element={<About />} />
            <Route path="*" element={<ErrorPage />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
