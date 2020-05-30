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
    color: rgb(var(--color-5));
    background-color: rgb(var(--color-2));
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
    color: rgb(var(--color-3));
    background-color: rgb(var(--color-2));
  }
`;
export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "Home"
    }
  }


  subItemsLogged = [
    {
      text: "Profile",
      icon: "fas fa-user",
      to: "/profile"
    },
    {
      text: "Sign out",
      icon: "fas fa-sign-out-alt",
      to: "/games",
      onClick: () => this.props.signOut()
    }
  ]

  subItemsGuest = [
    {
      text: "Profile",
      icon: "fas fa-user",
      to: "/profile"
    },
    {
      text: "Sign In",
      icon: "fas fa-sign-in-alt",
      to: "/signin"
    },
    {
      text: "Register",
      icon: "fas fa-edit",
      to: "/register"
    }
  ]

  navbarItems = () => {
    return ([
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
        icon: "fas fa-chess-knight",
        items: this.props.token ? this.subItemsLogged : this.subItemsGuest
      },
      {
        text: "About",
        icon: "fas fa-feather-alt",
        to: "/about"
      }
    ])
  }


  renderItems = (items, justify) => {
    const styleItem = { height: "100%", display: "flex", justifyContent: justify, alignItems: "center" }
    const styleDropdown = Object.assign({}, styleItem);
    styleDropdown.flexDirection = "column"
    return items.map(item =>
      !item.items ?
        (
          <MyNavLink
            to={item.to}
            style={styleItem}
            key={item.text}
            onClick={item.onClick}>
            <i className={item.icon}></i>
            <div style={{ paddingLeft: "13px", display: "inline" }}>{item.text}</div>
          </MyNavLink>
        )
        :
        (
          <MyDropDown key={item.text} title={<div>
            <i className={item.icon}></i>
            <div style={{ paddingLeft: "13px", display: "inline" }}>{item.text}</div>
          </div>} id="collasible-nav-dropdown" style={styleDropdown} >
            {this.renderItems(item.items, "left")}
          </MyDropDown>
        )
    )
  }




  render() {
    return (
      <Navbar collapseOnSelect expand="lg" sticky="top" variant="light"
        style={{ paddingTop: "0", paddingBottom: "0", backgroundColor: "rgb(var(--color-1))" }}>
        <Navbar.Brand>
          <Link to="/" style={{
            color: "rgb(var(--color-5))",
            textDecoration: "none",
            fontWeight: "bolder",
            outline: 0,
            outlineStyle: "hidden"
          }}>
            <img src='images/logo.png' alt="logo" style={{ height: "35px", paddingRight: "20px" }}></img>
            FREE2PLAY
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ color: "white" }} />
        <Navbar.Collapse id="responsive-navbar-nav" style={{ height: "45px" }}>
          <Nav className="ml-auto" style={{ height: "100%" }}>
            {this.renderItems(this.navbarItems(), "center")}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

