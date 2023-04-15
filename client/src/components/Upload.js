import React, { Component } from 'react';
import '../App.css';
import Header from './Header';

class Upload extends Component {

  constructor(props) {
    super(props);
    this.state = {response: []};
    // value has to stay, it clears the text area so that a character is only added once

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
  }

  handleChange(event) {
  }

  testAPI = (inputs) => {
    var querystring = "";
    querystring = encodeURI('/api/test');
    fetch(querystring)
      .then(res => res.json())
      .then(response => this.setState({ response }));
  } 

  render() {
    return (
      <div className="App">
        <Header />
         {/* header */}
        <div>
          <h1>Upload a Photo</h1>
        </div>
      </div>
    );
  }
}

export default Upload;