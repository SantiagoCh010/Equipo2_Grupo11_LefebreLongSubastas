import './bootstrap.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import Home from './components/Home';
import RegistroUsuario from './components/RegistroUsuario';


function App() {
  return (
    <div>
   <Router>
      <NavBar />  
      <Routes>   
      <Route path="/" element={<Home/>}/>
      <Route path="/RegistroUsuario" element={<RegistroUsuario/>}/>
      </Routes>
      <Footer />
   </Router>
   </div>
  );
}



export default App;
