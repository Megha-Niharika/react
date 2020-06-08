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
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  displayBlogPost = (posts) => {

     if (!posts.length) return null;

    return posts.map((post, index) => (
        
      <div key={index} className="customers">
      <table>
        <tr>
        <td>{post.b_id} </td>
        {/* <td>{post.a_name}</td>
        <td>{post.b_name}</td> */}
        </tr>
        
        </table>
        </div>
        
    ))
  };

  render(){
      return ( 
         <div className="customers">
         <Nav/>
         <table>
          <tr>
              <th>id</th>
               <th>aname</th>
              <th>bname</th>
           </tr>

          {this.displayBlogPost(this.state.posts)}
          </table>

        {/* <table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>Peter</td>
    <td>Griffin</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>Lois</td>
    <td>Griffin</td>
    <td>$150</td>
  </tr>
  <tr>
    <td>Joe</td>
    <td>Swanson</td>
    <td>$300</td>
  </tr>
  <tr>
    <td>Cleveland</td>
    <td>Brown</td>
    <td>$250</td>
  </tr>
</table> */}

        </div>
       
      )
  }

    }
