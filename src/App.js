// import logo from './logo.svg';
import 'antd/dist/antd.css';
import { BackTop } from 'antd';
import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Media.css'

import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Gallery from './Gallery';
import Blog from './Blog';
import Contact from './Contact';
// import './media.css';
function App() {
  return (
    <>
    <Routes>

        <Route path="/home" element={ <Home/> } />
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route  path='/blog' element={< Blog/>}/>
        <Route path='/Contact' element={< Contact/>} />
      </Routes>

      <BackTop />
  
  
      
    </>
  );
}

export default App;
