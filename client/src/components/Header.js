import React from "react";  
import { Link } from "react-router-dom";
import '../styles/App.css';

const Header = () => {
  return (
    <>
    <div className="App">
        <div id="banner">
          <div id='title'><h1>Welcome to Forage</h1></div>
        </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user">User Page</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
        </ul>
      </nav>
      </div>
    </>
  )
};

export default Header;




