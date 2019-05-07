import React, { Component } from 'react'
import MartinHeadshot from '../../images/martin-lucero-headshot.png'
import './CompanyInfo.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default class CompanyInfo extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <h1 className="page-header">Company Info</h1>
        </Row>
        <Row>
          <Image src={MartinHeadshot} alt="Martin Lucero" />

          <Col className="px-5">
            <p>
              Martin Lucero founded Bright Star Solutions LLC in 2015. Martin
              has over 10 years of experience in Systems Engineering and Data
              Analysis.
            </p>

            <p>
              Martin started in the private sector, working for Telecom giant,
              Nortel, until switching to supporting DHS in 2009. Martin has
              supported Customs and Border Protection and Citizenship and
              Immigration Services in several different technical roles,
              building to his current role supporting the USCIS Chief Data
              Officer.
            </p>
          </Col>
        </Row>
      </Container>
    )
  }
}
