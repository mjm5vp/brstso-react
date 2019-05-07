import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default class NavBar extends Component {
  render() {
    return (
      // <div className="nav-container">
      //   <div>Logo</div>
      //   <div className="right-nav-items">
      //     <Button>
      //       <Link to="/">Home</Link>
      //     </Button>
      //     <div>
      //       <Link className="link" to="/company-info/">
      //         Company Info
      //       </Link>
      //     </div>
      //     <div>
      //       <Link className="link" to="/contact-us/">
      //         Contact Us
      //       </Link>
      //     </div>
      //     <div>
      //       <Link className="link" to="/jobs/">
      //         Jobs
      //       </Link>
      //     </div>
      //   </div>
      // </div>

      <Navbar className="justify-content-between bg-light">
        <Navbar.Brand>BrightStar Solutions</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar>
    )
  }
}
