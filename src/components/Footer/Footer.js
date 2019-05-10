import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  state = {
    anim: null
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ anim: 'anim' })
    }, 1000)
  }

  render() {
    return (
      <div className={`copyright ${this.state.anim}`}>
        © 2016 Copyright brstso
      </div>
    )
  }
}
