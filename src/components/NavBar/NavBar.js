import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default class NavBar extends Component {
  render() {
    return (
      <div className="nav-container">
        <div>Logo</div>
        <div className="right-nav-items">
          <div>
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className="link" to="/company-info/">
              Company Info
            </Link>
          </div>
          <div>
            <Link className="link" to="/contact-us/">
              Contact Us
            </Link>
          </div>
          <div>
            <Link className="link" to="/jobs/">
              Jobs
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
