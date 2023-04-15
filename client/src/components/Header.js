import { Link } from "react-router-dom";
import './App.css';

const Header = () => {
  return (
    <>
    <div className="App">
        <h1 id='title'>Welcome to Forage</h1>
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




