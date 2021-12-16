import React, { Component } from 'react';
import Line from './line';

export default class AllRadiosFinal extends Component {
  render() {
    return (
        <div className="radioBox">
              <div>
              {this.props.radio.map((radio, i) => (
                        
                        <div onClick={() => this.props.toggle(radio)}>
                                              <div className={this.props.isDisplayed === radio.name ? "radioInfo"  : "hide radioInfo"}>
                                                  <i className="fa fa-minus-circle"></i>
                                                  <img src={radio.image} className="imageStrip" />
                                                  <i className="fa fa-plus-circle"></i>
                                              </div>
                                                            <div className="radioTitle" key={i}>
                                                              <p >{radio.name}</p>
                                                              <p className="freq">{radio.frequency}</p>
                                                        
                                                            </div>
                                                            <Line color="#9F9FAC" width="65%" />                        </div>
                  )
                )
              }
          </div>
       </div>
    )
  }
}