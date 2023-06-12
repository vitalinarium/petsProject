import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/hocs/Layout';
import axios from 'axios';
import Header from "./components/Header";
import Animal from "./components/Animal";
import Login from "./components/Login";

import Home from "./components/Home";


const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} /> 
        <Route path="/animals" element={<Animal/>} />
        <Route path="/header" element={<Header/>} />       
      </Routes>
      
    </Layout>    
  </Router>
  

  
);

export default App;
