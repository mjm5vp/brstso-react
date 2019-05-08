import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import PageHeader from '../components/PageHeader/PageHeader'

export default class ContactUs extends Component {
  render() {
    return (
      <Container>
        <PageHeader title="Contact Us" />
        <Row className="mt-5 justify-content-center">
          <p>
            Contact:
            <a
              href="mailto:someone@example.com?Subject=Hello%20again"
              target="_top"
            >
              info@brstso.com
            </a>
          </p>
        </Row>
      </Container>
    )
  }
}
