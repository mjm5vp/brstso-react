import React, { Component } from 'react'
import HomeLogo from '../../images/logo.png'
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <img className="home-logo" src={HomeLogo} alt="Italian Trulli" />
        <div className="text-div">
          Bright Star Solutions is a minority-owned small business based in
          Washington, DC that specializes in providing systems engineering and
          test and evaluation services to Federal clients.
        </div>
      </div>
    )
  }
}
