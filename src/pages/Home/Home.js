import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Row'

import HomeLogo from '../../images/logo.png'
import './Home.css'
import Image from 'react-bootstrap/Image'

export default class Home extends Component {
  state = {
    imageClass: 'noDisplayHome',
    textClass: 'noDisplayHome'
  }

  fadeInImage = () => {
    this.setState({ imageClass: 'displayHome' })
    setTimeout(() => {
      this.setState({ textClass: 'displayHome' })
    }, 500)
  }

  render() {
    return (
      <Container>
        <Image
          className={this.state.imageClass}
          onLoad={() => this.fadeInImage()}
          src={HomeLogo}
          alt="BrightStar Solutions"
          fluid
        />
        <Row className="justify-content-center text-div">
          <Col className="col-md-8">
            <p className={`text-center ${this.state.textClass}`}>
              Bright Star Solutions is a minority-owned small business based in
              Washington, DC that specializes in providing systems engineering
              and test and evaluation services to Federal clients.
            </p>
          </Col>
        </Row>
      </Container>
    )
  }
}

{
}
