import React, { Component } from 'react'
import { login } from '../logincomponent/UserFunctions'
import {Link} from "react-router-dom";
import Navbar from "./Navbar";
import car from '../images/bkg.jpg';
import  "./login.css"

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: ""
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
      console.log(res.status)

      if (res.status === 200) {
        console.log("-------")
      this.props.history.push(`/home`)
      }
      else{
        console.log(res)
        this.setState({errors:res.data.error})
      }
    }
  )
  return false;
  }

  render() {
    return (
      <div className="back">
     
      {/* <Navbar /> */}
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">

          <h3 className="heading"> Open Book Library Application</h3>
            <form noValidate onSubmit={this.onSubmit}>
           
              <h1 className="h3 mb-3 font-weight-normal">{this.state.errors}</h1>
              <h5 className="h3 mb-3 font-weight-normal">Please Login Here</h5>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
              
              Sign in
              </button>
            </form>
          </div>
        </div>
      </div>

    )
  }
}

export default Login
