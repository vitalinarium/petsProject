import React from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

class Animal extends React.Component{
    state = {details: [], }
  
    componentDidMount(){
      let data;
      axios.get('http://127.0.0.1:8000/ind/')
      .then(res => {
        data = res.data;
        this.setState({
          details:data
        })
      })
      .catch(err => {
        console.log(err);
      })
    }
  
  render() {
    return (
      <div>
        
        <hr></hr>
        {this.state.details.map((output, id) => (
          <div key={id}>
            <div>
              <h2>Category: {output.category}</h2>
              <h2>Name: {output.name}</h2>
              <h2>Age: {output.age}</h2>
              <h2>Description: {output.description}</h2>
              <h2>From city: {output.city}</h2>
              <h2>Uploaded by: {output.added_by_user} at {output.date}</h2>
              
              <img class="animal" src={"http://127.0.0.1:8000/" + output.image}/>
              
              <hr></hr>
              
            </div>
          </div>
        ))}
      </div>
      )
    }
  }
  
  export default Animal;