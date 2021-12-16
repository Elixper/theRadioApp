import React, { Component } from 'react'

export default class NavMain extends Component {
  render() {
    return (
        <div className="mainTitle center" onClick={this.props.powerOff}>
          <img className="icon" src={process.env.PUBLIC_URL + '/images/left.png'} />
          <p>STATIONS</p>
          <img className="icon power" src={process.env.PUBLIC_URL + '/images/power.png'} />
        </div>
    )
  }
}
