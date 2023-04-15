import { Link } from "react-router-dom";
import './App.css';

const Layout = () => {
  return (
    <>
    <div className="App">
    <h1>Welcome to Forage</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/element">ElementOne</Link>
          </li>
        </ul>
      </nav>
      </div>
    </>
  )
};

export default Layout;




