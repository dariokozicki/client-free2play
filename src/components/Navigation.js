import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components'

const MyNavLink = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
  padding: 0 10px 0 10px;
  transition: all 200ms ease;
  &:hover {
    text-decoration: none;
    color: #FF006E;
    background-color: #4C5B5C;
  }
`;
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
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"
        style={{ paddingTop: "0", paddingBottom: "0" }}>
        <Navbar.Brand>
          <Link to="/" style={{
            color: "#FF006E",
            textDecoration: "none",
            fontWeight: "bolder"
          }}>
            <img src='images/logo.png' alt="logo" style={{ height: "35px", paddingRight: "20px" }}></img>
            FREE2PLAY
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{ height: "45px" }}>
          <Nav className="ml-auto" style={{ height: "100%" }}>
            {this.items.map(item => (
              <MyNavLink to={item.to} style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <i className={item.icon}></i>
                <div style={{ paddingLeft: "13px", display: "inline" }}>{item.text}</div>
              </MyNavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar >
    )
  }
}
