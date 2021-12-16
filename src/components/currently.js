import React, { Component } from 'react'

export default class Currently extends Component {
  render() {
    return (
      <div className="playingBox">
       {this.props.isDisplayed && (
       <div >
         CURRENTLY PLAYING
      	 {this.props.isDisplayed}
       </div>
       )}
      </div>
    )
  }
}
