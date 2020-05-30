import React, { Component } from 'react'
import axios from 'axios'
import update from 'immutability-helper';
import { Redirect } from "react-router-dom";


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.passwordRegex = RegExp(/[A-Za-z0-9]{4,}/);
    this.state = {
      user: {
        username: '',
        password: '',
        email: '',
        favorites: JSON.parse(localStorage.getItem('favoriteGames'))
      }
    }
  }


  onSubmit = async event => {
    event.preventDefault();
    if (!this.state.user.username || "" === this.state.user.username) {
      alert("Username must not be empty");
      return
    }
    if (!this.passwordPassesTest()) {
      alert("Password must be at least 4 characters long and have only letters and numbers.")
      return
    }
    const res = await axios.post(this.props.backend + '/api/users',
      {
        username: this.state.user.username,
        password: this.state.user.password,
        favorites: this.state.user.favorites,
        email: this.state.user.email,
        image: 'images/default-profile.png'
      }
    );
    if (res.status === 200) {
      alert("Congrats!");
      this.props.signIn(this.state.user.username, this.state.user.password);
    } else {
      alert("Something went wrong.")
    }
  }

  passwordPassesTest = () => {
    return this.passwordRegex.test(this.state.user.password);
  }

  responseFacebook = (response) => {
    console.log(response)
  }

  responseGoogle = (response) => {
    console.log(response)
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
                <h5>Email</h5>
                <input
                  type="text"
                  placeholder="iWantFreeStuff@gmail.com"
                  className="form-control"
                  onChange={e => {
                    this.setState(update(this.state,
                      { user: { email: { $set: e.target.value } } }))
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
                <div className="text-muted">+4 characters, alphanumeric</div>
                <br></br>
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
