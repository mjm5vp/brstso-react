import React, { Component } from 'react'
import MartinHeadshot from '../../images/martin-lucero-headshot.png'
import './CompanyInfo.css'

export default class CompanyInfo extends Component {
  render() {
    return (
      <div>
        <h1>Company Info</h1>
        <div className="company-container">
          <div className="image-container">
            <img
              className="martin-headshot"
              src={MartinHeadshot}
              alt="Martin Lucero"
            />
          </div>
          <div className="text">
            Martin Lucero founded Bright Star Solutions LLC in 2015. Martin has
            over 10 years of experience in Systems Engineering and Data
            Analysis. Martin started in the private sector, working for Telecom
            giant, Nortel, until switching to supporting DHS in 2009.
            <br /> Martin has supported Customs and Border Protection and
            Citizenship and Immigration Services in several different technical
            roles, building to his current role supporting the USCIS Chief Data
            Officer.
          </div>
        </div>
      </div>
    )
  }
}
