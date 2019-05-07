import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/company-info/">Company Info</Link>
          </li>
          <li>
            <Link to="/contact-us/">Contact Us</Link>
          </li>
          <li>
            <Link to="/jobs/">Jobs</Link>
          </li>
        </ul>
      </nav>
    )
  }
}
