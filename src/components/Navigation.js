import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navigation extends Component {
  active = "Home";
  items = [
    {
      text: "Home",
      icon: "fab fa-fort-awesome",
      to: "/"
    },
    {
      text: "Games",
      icon: "fas fa-gamepad",
      to: "/games"
    },
    {
      text: "About",
      icon: "fas fa-feather-alt",
      to: "/about"
    },
    {
      text: "Log In",
      icon: "fas fa-sign-in-alt",
      to: "/login"
    },
    {
      text: "Register",
      icon: "fas fa-edit",
      to: "/register"
    }
  ]

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">FREE2PLAY</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {this.items.map(item =>
              <li key={item.text} className={"nav-item " + this.active === item.text ? "active" : ""}>
                <Link className="nav-link" to={item.to}>
                  <i className={item.icon}></i>
                  &nbsp; {item.text}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    )
  }
}
