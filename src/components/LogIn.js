import React, { Component } from 'react'
import axios from 'axios'

export default class LogIn extends Component {

  state = {
    users: [],
    username: ''
  }



  componentDidMount = async () => {
    this.getUsers();
  }

  getUsers = async () => {
    const res = await axios.get('http://localhost:4000/api/users');
    this.setState({ users: res.data });
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
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
              <form onSubmit={() => console.log("holi")}>
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
                    onChange={this.onChangeUsername}

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
              <h2 className="text-light">Say Hi to our newest users!</h2>
              {
                this.state.users.map(user =>
                  <li className="list-group-item list-group-item-action" key={user._id}>
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
