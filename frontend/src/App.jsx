import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Layout from './components/hocs/Layout';
// import axios from 'axios';
import Header from "./components/Header";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import Register from "./components/auth/Register"
import Logout  from "./components/auth/Logout";
import Footer from "./components/Footer";
import SingleAnimal from "./components/animalViews/singleAnimal"
import MyAnimals from "./components/animalViews/MyAnimals";
import RenderAnimals from "./components/animalViews/RenderAnimals";
import Admin from "./components/Admin"
import Create from "./components/admin/create"
import Edit from "./components/admin/edit"
import Delete from "./components/admin/delete"

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
              <Route path="/admin" element={<Admin/>} />
              <Route path="admin/create" element={<Create/>} />
              <Route path="admin/edit/:id" element={<Edit/>} />
              <Route path="admin/delete/:id" element={<Delete/>} />
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
      {/* <Footer></Footer> */}
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
