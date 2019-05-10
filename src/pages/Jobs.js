import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import PageHeader from '../components/PageHeader/PageHeader'

export default class Jobs extends Component {
  render() {
    return (
      <Container>
        <PageHeader title="Jobs" />
        <Row className="mt-5 justify-content-center">
          <Button
            href="https://www.google.com/url?q=https%3A%2F%2Fwww.indeed.com%2Fjobs%3Fq%3Dbright%2Bstar%2Bsolutions%26l%3DWashington%2C%2BDC%26rbc%3DBright%2BStar%2BSolutions%2BLLC%26jcid%3D802096d7b2df73c8&sa=D&sntz=1&usg=AFQjCNG8hvxVjAdhljJOQCBJ7FGEn8hoDw"
            variant="outline-secondary"
            size="lg"
          >
            Click here to see current open positions
          </Button>
        </Row>
      </Container>
    )
  }
}
