<<<<<<< HEAD
import Header from './Header';
import '../styles/App.css';

const Leaderboard = () => {
    return (
    <div className="App">
        <Header />
        <h1>Leaderboard</h1>
    </div>
    )
}

export default Leaderboard
=======
import React, { Component } from 'react';
import './App.css';
import Header from './Header';

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
         {/* header */}
        <div>
          <h1>Leaderboard</h1>
            <div>{this.state.users.map((user, index) => {
                return (
                <p>{user.username +": " + user.points}</p>
                )
            })}
            </div>
        </div>
      </div>
    );
  }
}

export default Leaderboard;
>>>>>>> 53106eb (connected to backend in order to show leaderboard stats.)
