import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/" className="logo-link"><h2>VisualSort</h2></Link>
      </div>
      <ul className="nav-links">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/HowTo">HowTo</Link></li>
      </ul>
    </nav>
  );
};
export default Header;
