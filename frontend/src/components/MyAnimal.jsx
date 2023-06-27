import React, { useState,useEffect }  from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useAuthStore } from '../store/auth';


const HomeAnimal = () => {
  const [isLoggedIn, user] = useAuthStore((state) => [
      state.isLoggedIn,
      state.user,
  ]);
  return (
      <div>
          {isLoggedIn() ? <LoggedInView user={user()} /> : <LoggedOutView />}
      </div>
  );
};

const LoggedInView = () => {
  const [data, setData] = useState([]);
  const [user] = useAuthStore((state) => [
    state.user,
  ]);
  
  const getData = async () => {
    const { data } = await axios.get('http://127.0.0.1:8000/get_animals/');
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []); 
   
  console.log(user().username)
  return (
    <div>
        
    <hr></hr>
    {data.filter(pet => pet.added_by_user === user().username).map((output, id) => (
      <div key={id}>
        <div>
          <h2>Category: {output.category}</h2>
          <h2>Name: {output.name}</h2>
          <h2>Age: {output.age}</h2>
          <h2>Description: {output.description}</h2>
          <h2>From city: {output.city}</h2>
          <h2>Uploaded by: {output.added_by_user} at {output.date}</h2>
          
          <img class="animal" src={"http://127.0.0.1:8000" + output.image}/>
          <br></br>
          <Link to="/">
                <button>Edit</button>
            </Link>
            <Link to="/">
                <button>Delete</button>
            </Link>
          <hr></hr>
          
        </div>
      </div>
    ))}
  </div>
  );
};

export const LoggedOutView = ({ title = 'Home' }) => {
  return (
      <div>
          <h1>{title}</h1>
          <Link to="/login">
              <button>Login</button>
          </Link>
          <Link to="/register">
              <button>Register</button>
          </Link>
      </div>
  );
};
   
  export default HomeAnimal;