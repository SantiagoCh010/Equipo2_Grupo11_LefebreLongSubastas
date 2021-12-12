import './bootstrap.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import Home from './components/Home';
import RegistroUsuario from './components/RegistroUsuario';
import HomeAdmon from './components/HomeAdmon'
import GestionUsuarios from './components/GestionUsuarios'
import CrearSubasta from './components/CrearSubasta';
import EditarSubasta from './components/EditarSubasta';
import HomeSubasta from './components/HomeSubasta';


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
      <Route path="/CrearSubasta" element={<CrearSubasta/>}/>
      <Route path="/EditarSubasta" element={<EditarSubasta/>}/>
      <Route path="/HomeSubasta" element={<HomeSubasta/>}/>


      </Routes>
      <Footer />
   </Router>
   </div>
  );
}



export default App;
