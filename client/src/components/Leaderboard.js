import React, { Component } from 'react';
import Header from './Header';
import '../styles/App.css';
import '../styles/Leaderboard.css';

class Leaderboard extends Component {

  constructor(props) {
    super(props);
    this.state = {users: []};
    this.getLeaderboardStats();
    // value has to stay, it clears the text area so that a character is only added once
  }

  getLeaderboardStats = (inputs) => {
    fetch('leaderboard')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  } 

  render() {
    return (
      <div className="App">
        <Header />
        <h1>Leaderboard</h1>
        <div id='tHead'>
            <div id='silver'><p>{this.state.users[1].username}</p><p>{this.state.users[1].points}</p></div>
            <div id='gold'><p>{this.state.users[0].username}</p><p>{this.state.users[0].points}</p></div>
            <div id='bronze'><p>{this.state.users[2].username}</p><p>{this.state.users[2].points}</p></div>
        </div>
        <div id='tBody'>
            {this.state.users.slice(3).map((user, index) => {
                return (
                    <div className='tRow'><p>{user.username}</p><p>{user.points}</p></div>
                )
            })}
        </div>
      </div>
    );
  }
}

export default Leaderboard;
