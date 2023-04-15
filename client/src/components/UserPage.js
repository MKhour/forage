import React, { Component } from 'react';
import Header from './Header';
import '../styles/App.css';


class UserPage extends Component {

    constructor(props) {
      super(props);
      this.state = {user: null};
      this.getUser();
    }
  
    getUser = () => {
      fetch('user/?user=madelyn')
        .then(res => res.json())
        .then(user => this.setState({ user }));
    } 
  
    render() {
      return (
        <div className="App">
          <Header />
           {/* header */}
          <div>
            <h1>{this.state.user == null? "placeholder" : this.state.user.username}</h1>
            <div>
                <p>Your Points: {this.state.user == null? "placeholder" : this.state.user.points}</p>
            </div>
            <div>

            </div>
          </div>
        </div>
      );
    }
}
  
export default UserPage;  