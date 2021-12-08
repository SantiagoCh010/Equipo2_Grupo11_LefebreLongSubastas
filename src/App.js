import './bootstrap.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import Home from './components/Home';
import RegistroUsuario from './components/RegistroUsuario';
import HomeAdmon from './components/HomeAdmon'
import GestionUsuarios from './components/GestionUsuarios'


function App() {
  return (
    <div>
   <Router>
      <NavBar />  
      <Routes>   
      <Route path="/" element={<Home/>}/>
      <Route path="/RegistroUsuario" element={<RegistroUsuario/>}/>
      <Route path="/HomeAdmon" element={<HomeAdmon/>}/>
      <Route path="/GestionUsuarios" element={<GestionUsuarios/>}/>


      </Routes>
      <Footer />
   </Router>
   </div>
  );
}



export default App;
