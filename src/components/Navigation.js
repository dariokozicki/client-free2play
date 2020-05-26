import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
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
  &:active {
    outline: 0;
    border: none;
    -moz-outline-style: none;
  }
  &:focus {
    outline: 0;
    border: none;
    -moz-outline-style: none;
  }
`;

const MyDropDown = styled(NavDropdown)`
  color: white;
  font-weight: bold;
  text-decoration: none;
  padding: 0 10px 0 10px;
  margin: 0;
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
      text: "Account",
      icon: "fas fa-user",
      items: [
        {
          text: "Profile",
          icon: "fas fa-user",
          to: "/profile"
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
    },
    {
      text: "About",
      icon: "fas fa-feather-alt",
      to: "/about"
    }
  ]

  renderItems = (items, justify) =>
    items.map(item =>
      !item.items ?
        (
          <MyNavLink to={item.to} style={{ height: "100%", display: "flex", justifyContent: justify, alignItems: "center" }}>
            <i className={item.icon}></i>
            <div style={{ paddingLeft: "13px", display: "inline" }}>{item.text}</div>
          </MyNavLink>
        )
        :
        (
          <MyDropDown title={item.text} id="collasible-nav-dropdown" style={{ height: "100%", display: "flex", justifyContent: justify, alignItems: "center" }} >
            {this.renderItems(item.items, "left")}
          </MyDropDown>
        )
    )



  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top"
        style={{ paddingTop: "0", paddingBottom: "0" }}>
        <Navbar.Brand>
          <Link to="/" style={{
            color: "#FF006E",
            textDecoration: "none",
            fontWeight: "bolder",
            outline: 0,
            outlineStyle: "hidden"
          }}>
            <img src='images/logo.png' alt="logo" style={{ height: "35px", paddingRight: "20px" }}></img>
            FREE2PLAY
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{ height: "45px" }}>
          <Nav className="ml-auto" style={{ height: "100%" }}>
            {this.renderItems(this.items, "center")}
          </Nav>
        </Navbar.Collapse>
      </Navbar >
    )
  }
}
