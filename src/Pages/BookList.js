import React, { Component } from 'react'
import Nav from "../Book/Nav";
import axios from 'axios';
import "./Table.css"

export default class BookList extends Component {
state = {
    posts :[]
}

componentDidMount = () => {
    this.getBlogPost();
  };


  getBlogPost = () => {
    axios.get("http://localhost:9000/rooms/fiction")
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log('Data has been received!!',data);
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  displayBlogPost = (posts) => {
    
     if (!posts.length) return null;

      return posts.map((post, index) => (
        <tr  key={index.id} className="customers">
        <td>{post.b_id} </td>
        <td>{post.a_name}</td>
        <td>{post.b_name}</td> 
        <button id="addBtn" >ADD</button>
        </tr>
    ))
  };

  render(){
   
      return ( 
         <div>
         <Nav/>
         <table  className="customers">
           <thead>
              <tr>
              <th>id</th>
              <th>aname</th>
              <th>bname</th>
              </tr>
           </thead>
          <tbody>
          {this.displayBlogPost(this.state.posts)}
          </tbody>
          </table>
        </div>
      )
  }
 }
