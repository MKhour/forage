import React, { Component } from 'react';
import Header from './Header';
import '../styles/App.css';


class UserPage extends Component {

    constructor(props) {
      super(props);
      this.state = {user: null, achievements: []};
      this.getUser();
      this.getAchievements();
    }
  
    getUser = () => {
      fetch('user/?user=madelyn')
        .then(res => res.json())
        .then(user => this.setState({ user }));
    } 

    getAchievements = () => {
        fetch('achievements')
          .then(res => res.json())
          .then(achievements => this.setState({ achievements }));
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
                <p>Your Achievements:</p>
                <div>{this.state.achievements.map((ach, index) => {
                    return (
                        <div>
                            <img src={require('../imgs/' + ach.icon_link)} width="100px"/>
                            <p>{ach.achievement_name}</p>
                        </div>
                        )
                    })}
                </div>
            </div>
            <div>

            </div>
          </div>
        </div>
      );
    }
}
  
export default UserPage;  