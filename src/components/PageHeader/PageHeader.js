import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default class PageHeader extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <h1 className="page-header">{this.props.title}</h1>
        </Row>
      </Container>
    )
  }
}
