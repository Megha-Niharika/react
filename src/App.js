// import React from 'react';
 import './App.css';
 import Home from './Pages/Home';
// import Rooms from './Pages/Rooms';
// import SingleRoom from './Pages/SingleRoom';
// import Error from './Pages/Error';
// import Navbar from './components/Navbar';
// import Login from "../src/logincomponent/Login";
// import "./login.css";
// import {Route,Switch } from  "react-router-dom";
// import Register from "../src/logincomponent/Register"

// function App(){
//   return (
// <div>
     
//       <Switch>
//       <Route exact path="/home" component={Home}/>
//       <Route exact path="/" component={Login}/>
//       <Route exact path="/register" component={Register}/>
      
//       <Route exact path="/rooms/" component={Rooms}/>
//       <Route exact path="/rooms/:slug" component={SingleRoom}/>
//       <Route component={Error}/>
//     </Switch>
//     </div>
//   );
// }

// export default App;


import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './logincomponent/Login'
import Register from './logincomponent/Register'
import Rooms from './Pages/Rooms';
 import SingleRoom from './Pages/SingleRoom';
 import Error from './Pages/Error';
 //import Book from "./Pages/Book"

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
         
       <Route exact path="/rooms/" component={Rooms}/>
       <Route exact path="/rooms/:slug" component={SingleRoom}/>
       {/* <Route exact path="/rooms/:slug/:books" component={Book}/>
       <Route exact path="/books" component={Book}/> */}
      <Route component={Error}/>
     </Switch>
          </div>
        
      </Router>
    )
  }
}

export default App
