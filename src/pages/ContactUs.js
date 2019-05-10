import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import PageHeader from '../components/PageHeader/PageHeader'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import EmailIcon from '../images/email.png'

export default class ContactUs extends Component {
  render() {
    return (
      <Container>
        <PageHeader title="Contact Us" />
        <Row className="mt-5 justify-content-center align-items-center">
          <Image height="70" width="auto" src={EmailIcon} />
          <Button
            href="mailto:info@brsto.com"
            variant="outline-secondary"
            size="lg"
          >
            info@brstso.com
          </Button>
        </Row>
      </Container>
    )
  }
}
