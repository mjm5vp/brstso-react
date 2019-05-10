import React, { Component } from 'react'
import MartinHeadshot from '../../images/martin-lucero-headshot.png'
import './CompanyInfo.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import PageHeader from '../../components/PageHeader/PageHeader'

export default class CompanyInfo extends Component {
  state = {
    headshotClass: 'noDisplay',
    paragraph1Class: 'noDisplay',
    paragraph2Class: 'noDisplay'
  }

  fadeInImage = () => {
    this.setState({ headshotClass: 'display' })
    setTimeout(() => {
      this.setState({ paragraph1Class: 'display' })
    }, 800)
    setTimeout(() => {
      this.setState({ paragraph2Class: 'display' })
    }, 1100)
  }

  render() {
    return (
      <Container>
        <PageHeader title="Company Info" />
        <Row>
          <Col className="col-xs-4 justify-content-center">
            <Image
              className={this.state.headshotClass}
              onLoad={() => {
                this.fadeInImage()
              }}
              src={MartinHeadshot}
              alt="Martin Lucero"
              fluid
            />
          </Col>

          <Col className="col-xs-6 companyInfoText">
            <p className={this.state.paragraph1Class}>
              Martin Lucero founded Bright Star Solutions LLC in 2015. Martin
              has over 10 years of experience in Systems Engineering and Data
              Analysis.
            </p>

            <p className={this.state.paragraph2Class}>
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
