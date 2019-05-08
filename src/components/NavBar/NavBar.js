import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import SmallLogo from '../../images/small-logo.png'
import './NavBar.css'

export default class NavBar extends Component {
  render() {
    return (
      <Navbar
        fixed="sticky"
        className="justify-content-between navbar-dark bg-dark"
        expand="md"
      >
        <Navbar.Brand href="/">
          <Image
            className="small-logo mr-3 "
            src={SmallLogo}
            alt="BrightStar Solutions"
          />
          BrightStar Solutions
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link inline href="/">
              Home
            </Nav.Link>
            <Nav.Link inline href="/company-info">
              Company Info
            </Nav.Link>
            <Nav.Link inline href="/contact-us">
              Contact Us
            </Nav.Link>
            <Nav.Link inline href="/jobs">
              Jobs
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
