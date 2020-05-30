import React, { Component } from 'react'
import axios from 'axios'

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      username: '',
      password: ''
    }
  }


  onSubmit = async event => {
    event.preventDefault();
    if (!this.state.username || "" === this.state.username) {
      alert("Username must not be empty");
      return
    }
    if (!this.state.password || "" === this.state.username) {
      alert("Password must not be empty");
      return
    }
    this.props.signIn(this.state.username, this.state.password);
  }


  componentDidMount = async () => {
    this.getUsers();
  }

  getUsers = async () => {
    const res = await axios.get('http://localhost:4000/api/users');
    this.setState({ users: res.data.reverse() });
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="card card-body">
              <h3>Log in</h3>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <br />
                  <h5>Username</h5>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="i.e. 'CookieMonster'"
                    onChange={this.onChangeUsername}

                  />
                  <br />
                  <h5>Password</h5>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your secret password"
                    onChange={this.onChangePassword}

                  />
                Don't have an account? Register here
                <br /><br />
                  <div className="container-center">
                    <button type="submit" className="btn btn-primary btn-submit">
                      Enter
                </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4">
            <ul className="list-group">
              <h2 className="text-light">Say Hi to our latest users!</h2>
              {
                this.state.users.slice(0, 6).map(user =>
                  <li className="list-group-item list-group-item-action" key={user.username}>
                    {user.username}
                  </li>)
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
