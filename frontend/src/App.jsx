import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Layout from './components/hocs/Layout';
// import axios from 'axios';
import Header from "./components/Header";
// import Animal from "./components/Animal";
import Login from "./components/Login";
// import Messages from "./components/Messages";
import Home from "./components/Home";
import Register from "./components/Register"
// import Blog from "./components/Blog";
import Logout  from "./components/Logout";
import Footer from "./components/Footer";
import Animals from "./components/Animals";
import SingleAnimal from "./components/singleAnimal"
import MyAnimals from "./components/MyAnimals";
// import MainWrapper from "./components/hocs/MainWrapper";
// import PrivateRoute from "./components/hocs/PrivateRoute";
// import Private from "./components/Private";
// import MyAnimal from "./components/MyAnimal";


// import './App.css';

import PostLoadingComponent from './components/postLoading';
import axiosInstance from './axios';
import RenderAnimals from "./components/RenderAnimals";

function App() {

	
  return (
    

    <Router>
    <Header></Header>
    
    {/* <MainWrapper> */}
      {/* <Layout>        */}
         
            <Routes>
            {/* <Route path="/private" element={<PrivateRoute><Private /></PrivateRoute>}/> */}
              <Route path="/" element={<Home/>} />
              <Route path="/animals" element={<RenderAnimals/>} />
              <Route path="/animals/:slug" element={<SingleAnimal/>} />
              <Route path="/myanimals" element={<MyAnimals/>} />
              {/* {<Route path="/animals" element={<Animal/>} /> }
              /*<Route path="/myanimals" element={<MyAnimal/>} />
              <Route path="/blog" element={<Blog/>} />
              <Route path="/messages" element={<Messages/>} />    */}
              <Route path="/register" element={<Register/>} />     
              <Route path="/login" element={<Login/>}/>
              <Route path="/logout" element={<Logout/>}/>
            </Routes>
        
      {/* </Layout>   */}
      {/* </MainWrapper>    */}
      <Footer></Footer>
    </Router>
  )
}
export default App;

// function App () { 
// 
  // return (
  //   <Router>
  //   <Header></Header>
  //   {/* <MainWrapper> */}
  //     {/* <Layout>        */}
         
  //           <Routes>
  //           {/* <Route path="/private" element={<PrivateRoute><Private /></PrivateRoute>}/> */}
  //             <Route path="/" element={<Home/>} />
  //             <Route path="/animals" element={<Animals/>} />
  //             {/* {<Route path="/animals" element={<Animal/>} /> }
  //             /*<Route path="/myanimals" element={<MyAnimal/>} />
  //             <Route path="/blog" element={<Blog/>} />
  //             <Route path="/messages" element={<Messages/>} />    */}
  //             <Route path="/register" element={<Register/>} />     
  //             <Route path="/login" element={<Login/>}/>
  //             <Route path="/logout" element={<Logout/>}/>
  //           </Routes>
        
  //     {/* </Layout>   */}
  //     {/* </MainWrapper>    */}
  //     <Footer></Footer>
  //   </Router>
  // ) 
// };
  


// export default App;
