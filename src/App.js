// import React from 'react';
 import './App.css';
 import Home from './Pages/Home';

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './logincomponent/Login'
import Register from './logincomponent/Register'
import Rooms from './Pages/Rooms';
 import SingleRoom from './Pages/SingleRoom';
 import Error from './Pages/Error';
import BookList from "../src/Pages/BookList";
import Cart from "./Pages/Cart"
class App extends Component {

  render() {
    return (
      <Router>
        <div>
        <Switch>
          <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/books" component={BookList} />
            <Route exact path="/cart" component={Cart} />
       <Route exact path="/rooms/" component={Rooms}/>
       <Route exact path="/rooms/:slug" component={SingleRoom}/>
      <Route component={Error}/>
     </Switch>
          </div>
      </Router>
    )
  }
}

export default App
