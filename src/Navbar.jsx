import { Link } from "react-router-dom";

import "../src/component/css/Navbar.css"
const Navbar = () => {
  return (
    <header className="header">

      <span ><h1 className="h1">Portfolio</h1></span>
        <div className="nav-items">
      <nav> 
        <li>
          <Link to="/" className="a"> Home</Link>
        </li>
        <li>
          <Link to="/sk" className="a">Skill</Link>
        </li>
        <li>
          <Link to="/ed" className="a">Education</Link>
        </li>
        <li>
          <Link to="/ex" className="a">Experience</Link>
        </li>
        <li>
          <Link to="/con" className="a">Contact</Link>
        </li>
      </nav>
      </div>
    </header>
  );
};
export default Navbar;
