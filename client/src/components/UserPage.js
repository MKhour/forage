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
                <h1>{this.state.user == null? "Hi!" : "Hi, " + this.state.user.username + "!"}</h1>
                <div>
                    <p>Your Points: {this.state.user == null? "Login to see your points" : this.state.user.points}</p>
                    <p>Your Achievements:</p>
                    <div class="wrapper">{this.state.achievements.map((ach, index) => {
                        return (
                            <div class="card">
                                <img src={`${process.env.PUBLIC_URL}/${ach.icon_link}`} width="100px" height="100px" alt="Achievement image here"/>
                                <h3>{ach.achievement_name}</h3>
                                <p>{ach.achievement_description}</p>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
      );
    }
}
  
export default UserPage;  