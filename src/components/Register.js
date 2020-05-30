import React, { Component } from 'react'
import axios from 'axios'
import update from 'immutability-helper';
import { Redirect } from "react-router-dom";
import Toast from 'react-bootstrap/Toast'


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.passwordRegex = RegExp(/[A-Za-z0-9]{4,}/);
    this.state = {
      errorToast: {
        username: false,
        password: false,
        email: false,
        err: false
      },
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
    let shouldReturn = false;
    let state = this.state;
    if (!this.passesRegex(this.state.user.username)) {
      state = update(state, { errorToast: { username: { $set: true } } })
      shouldReturn |= true;
    }
    if (!this.passesRegex(this.state.user.password)) {
      state = update(state, { errorToast: { password: { $set: true } } })
      shouldReturn |= true;
    }
    if (!this.passesRegex(this.state.user.email)) {
      state = update(state, { errorToast: { email: { $set: true } } })
      shouldReturn |= true;
    }
    this.setState(state);
    if (shouldReturn) return;
    try {
      await axios.post(this.props.backend + '/api/users',
        {
          username: this.state.user.username,
          password: this.state.user.password,
          favorites: this.state.user.favorites,
          email: this.state.user.email,
          image: 'images/default-profile.png'
        }
      );
      this.props.signIn(this.state.user.username, this.state.user.password);
    } catch (e) {
      this.setState(update(this.state, { errorToast: { err: { $set: true } } }))
    }
  }

  passesRegex = (string) => {
    return this.passwordRegex.test(string);
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
            <Toast onClose={() => this.setState(
              update(this.state, { errorToast: { username: { $set: false } } }))}
              show={this.state.errorToast.username}
              delay={3000}
              autohide>
              <Toast.Header>
                <strong className="mr-auto">Free2Play</strong>
                <small>Just now</small>
              </Toast.Header>
              <Toast.Body>Username must be at least 4 characters long and have only letters and numbers.</Toast.Body>
            </Toast>
            <Toast onClose={() => this.setState(
              update(this.state, { errorToast: { password: { $set: false } } }))}
              show={this.state.errorToast.password}
              delay={3000}
              autohide>
              <Toast.Header>
                <strong className="mr-auto">Free2Play</strong>
                <small>Just now</small>
              </Toast.Header>
              <Toast.Body>Email must be valid, at least 4 characters long and have only letters and numbers.</Toast.Body>
            </Toast>
            <Toast onClose={() => this.setState(
              update(this.state, { errorToast: { email: { $set: false } } }))}
              show={this.state.errorToast.email}
              delay={3000}
              autohide>
              <Toast.Header>
                <strong className="mr-auto">Free2Play</strong>
                <small>Just now</small>
              </Toast.Header>
              <Toast.Body>Username must be at least 4 characters long and have only letters and numbers.</Toast.Body>
            </Toast>
            <Toast onClose={() => this.setState(
              update(this.state, { errorToast: { err: { $set: false } } }))}
              show={this.state.errorToast.err}
              delay={3000}
              autohide>
              <Toast.Header>
                <strong className="mr-auto">Free2Play</strong>
                <small>Just now</small>
              </Toast.Header>
              <Toast.Body>Something unexpected went wrong. Check if your email was typed correctly.</Toast.Body>
            </Toast>
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
                  type="password"
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
