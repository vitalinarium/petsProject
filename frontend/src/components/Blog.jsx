import React from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

class Blog extends React.Component{
    state = {details: [], }
  
    componentDidMount(){
      let data;
      axios.get('http://127.0.0.1:8000/blog/')
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
              <h2>written_by_user: {output.written_by_user}</h2>
              <h2>title: {output.title}</h2>
              <h2>blog_post: {output.blog_post}</h2>
              <h2>date: {output.date}</h2>
             
              
              <hr></hr>
              
            </div>
          </div>
        ))}
      </div>
      )
    }
  }
  
  export default Blog;