import React, { Component } from 'react'
import axios from 'axios'
import update from 'immutability-helper';
import { Redirect } from "react-router-dom";

export default class Register extends Component {
  passwordRegex = RegExp(/[A-Za-z0-9]{4,}/);
  state = {
    redirect: null,
    users: [],
    user: {
      username: '',
      password: '',
      'password-repeated': ''
    }
  }


  onSubmit = async event => {
    event.preventDefault();
    if (!this.state.user.username || "" === this.state.user.username) {
      alert("Username must not be empty");
      return
    }
    if (!this.passwordMatches()) {
      alert("Password must be equal in both fields.")
      return
    }
    if (!this.passwordPassesTest()) {
      alert("Password must be at least 4 characters long and have only letters and numbers.")
      return
    }
    const res = await axios.post('http://localhost:4000/api/users', { username: this.state.user.username });
    if (res.status === 200) {
      alert("Congrats!");
      this.setState(update(this.state, { redirect: { $set: "/login" } }));
    } else {
      alert("Something went wrong.")
    }
  }

  passwordMatches = () => {
    return this.state.user.password === this.state.user["password-repeated"];
  }

  passwordPassesTest = () => {
    return this.passwordRegex.test(this.state.user.password);
  }

  render = () => {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4">

          </div>
          <div className="col-md-4">
            <div className="card card-body">
              <form onSubmit={this.onSubmit}>
                <h3>Register</h3>
                <br />
                <h5>Username</h5>
                <input
                  type="text"
                  placeholder="i.e. 'JohnTravolta'"
                  className="form-control"
                  onChange={e => {
                    this.setState(update(this.state,
                      { user: { username: { $set: e.target.value } } }))
                  }}
                />
                <br />
                <h5>Password</h5>
                <input
                  type="text"
                  placeholder="Your Password"
                  className="form-control"
                  onChange={e => {
                    this.setState(update(this.state,
                      { user: { password: { $set: e.target.value } } }))
                  }}
                />
                <br />
                <h5>Confirm Password</h5>
                <input
                  type="text"
                  placeholder="Confirm Your Password"
                  className="form-control"
                  onChange={e => {
                    this.setState(update(this.state,
                      { user: { 'password-repeated': { $set: e.target.value } } }))
                  }}
                />
                <br />
                <div className="container-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-submit">
                    Create new account
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4">
          </div>
        </div>
      </div>
    )
  }
}
