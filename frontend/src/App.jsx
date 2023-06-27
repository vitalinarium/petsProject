import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/hocs/Layout';
import axios from 'axios';
import Header from "./components/Header";
import Animal from "./components/Animal";
import Login from "./components/Login";
import Messages from "./components/Messages";
import Home from "./components/Home";
import Register from "./components/Register"
import Blog from "./components/Blog";
import Logout  from "./components/Logout";
import MainWrapper from "./components/hocs/MainWrapper";
import PrivateRoute from "./components/hocs/PrivateRoute";
import Private from "./components/Private";
import MyAnimal from "./components/MyAnimal";



function App () { 

  return (
    <Router>
    <MainWrapper>
      <Layout>       
         
            <Routes>
            <Route path="/private" element={<PrivateRoute><Private /></PrivateRoute>}/>
              <Route path="/" element={<Home/>} />
              <Route path="/animals" element={<Animal/>} />
              <Route path="/myanimals" element={<MyAnimal/>} />
              <Route path="/blog" element={<Blog/>} />
              <Route path="/messages" element={<Messages/>} />   
              <Route path="/register" element={<Register/>} />     
              <Route path="/login" element={<Login/>}/>
              <Route path="/logout" element={<Logout/>}/>
            </Routes>
        
      </Layout>  
      </MainWrapper>   
    </Router>
  ) 
};
  


export default App;
