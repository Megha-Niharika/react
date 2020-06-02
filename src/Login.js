import React from 'react';
import "./login.css";
import {Link} from "react-router-dom";

    export default function Login() {
        return (
            <body>
            <div className="login">
            <form>
              <h2 style={{color:"white"}}>
              Log In</h2>
              <input type= "text" name="username" placeholder="Username"/><br></br>
              <input type= "password" name="password" placeholder="Password"/>
              <br></br>
              <Link to='/home' className="btn-primary">
               login
              </Link>
            </form>
            </div>
            </body>

        )
    }

// import React, { Component } from 'react'
// import { login } from '../logincomponent/UserFunctions'

// class Login extends Component {
//   constructor() {
//     super()
//     this.state = {
//       email: '',
//       password: '',
//       errors: {}
//     }

//     this.onChange = this.onChange.bind(this)
//     this.onSubmit = this.onSubmit.bind(this)
//   }

//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value })
//   }
//   onSubmit(e) {
//     e.preventDefault()

//     const user = {
//       email: this.state.email,
//       password: this.state.password
//     }

//     login(user).then(res => {
//       if (res) {
//         this.props.history.push(`/profile`)
//       }
//     })
//   }

//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6 mt-5 mx-auto">
//             <form noValidate onSubmit={this.onSubmit}>
//               <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
//               <div className="form-group">
//                 <label htmlFor="email">Email address</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   name="email"
//                   placeholder="Enter email"
//                   value={this.state.email}
//                   onChange={this.onChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   name="password"
//                   placeholder="Password"
//                   value={this.state.password}
//                   onChange={this.onChange}
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="btn btn-lg btn-primary btn-block"
//               >
//                 Sign in
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default Login



