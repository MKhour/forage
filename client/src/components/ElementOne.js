import React, { Component } from 'react';
import './App.css';
import Header from './Header';

var Buffer = require('buffer/').Buffer

class ElementOne extends Component {

  constructor(props) {
    super(props);
    this.state = {entry: '', value: "", finished: false, response: []};
    // value has to stay, it clears the text area so that a character is only added once

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
  }

  handleChange(event) {
  }

  classifyTextAPI = (inputs) => {
    var querystring = "";
    querystring = encodeURI('/api/test');
    fetch(querystring)
      .then(res => res.json())
      .then(response => this.setState({ response }));
  } 

  render() {
    const { finished } = this.state;
    const {classifications} = this.state;

    return (
      <div className="App">
        <Header />
         {/* header */}
        <div>
          <h1>Test Page</h1>
        </div>
      </div>
    );
  }
}

export default ElementOne;