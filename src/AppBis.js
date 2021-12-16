import React, { Component } from 'react';
import NavMain from './components/navMain';
import Currently from './components/currently';
import Radio from './components/radio';
import './App.css';
import AllRadiosFinal from './components/allRadiosFinal';


export default class AppBis extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      data: [],
      isDisplayed:false,
    };
  }

  state = {
    loading: true,
    radio: null,
    image:false,
    visible:true,
  };

  toggle(radio) {
    this.setState({
      isDisplayed: radio.name
    });
  };

  powerOff=()=>
  {this.setState({
      isDisplayed: false
    });
  };

  async componentDidMount() {
    const url = 'https://teclead.de/recruiting/radios';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ radio: data.radios, loading: false, image:false});
    console.log("data et radios",data.radios);
    console.log("data",data);

  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    if (!this.state.radio) {
      return <div>no radio available</div>;
    }
    
    return (
      <div className="wrapper">
        <NavMain  powerOff={this.powerOff}/>
        <AllRadiosFinal
        toggle={this.toggle}
        isDisplayed={this.state.isDisplayed} 
        radio={this.state.radio}/>
        <Currently isDisplayed={this.state.isDisplayed}/>
      </div>
    );
  }
}