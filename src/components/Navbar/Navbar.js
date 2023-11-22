import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import hamburger from "../../images/hamburger.svg";
import cross from "../../images/cross.svg";
import cookLogo from "../../images/cook-logo.jpeg";
import germanyFlag from "../../images/germany-flag.svg";
import franceFlag from "../../images/france-flag.svg";
import instagram from "../../images/instagram.svg";
import cart from "../../images/cart.svg";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const closeDropdown = () => {
    setDropdown(false);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="nav">
      <nav>
        <ul className="full-nav">
          {dropdown ? (
            <img className="cross menu-icon" src={cross} alt="cross" onClick={toggleDropdown} />
          ) : (
            <img className="hamburger menu-icon" src={hamburger} alt="hamburger" onClick={toggleDropdown} />
          )}
          <div className="logo">
            <li>
              <Link to="/" onClick={closeDropdown}>
                <img src={cookLogo} alt="logo" />
              </Link>
            </li>
          </div>
          <div className="page-links">
            <li className="green">
              <Link to="/#about" onClick={scrollToAbout}>
                About
              </Link>
            </li>
            <li className="red">
              <Link to="/product">FlavaExplorer</Link>
            </li>
            <li>
              <Link to="/coming-soon">Recipes</Link>
            </li>
            <li>
              <Link className="green" to="/coming-soon">
                Our Classes
              </Link>
            </li>
            <li>
              <Link className="red" to="/coming-soon">
                Events
              </Link>
            </li>
            <li>
              <Link to="/coming-soon">Blog</Link>
            </li>
          </div>
          <div className="flags-and-socials">
            <li>
              <Link to="/coming-soon">
                <img src={franceFlag} alt="france-flag" />
              </Link>
            </li>
            <li>
              <Link to="/coming-soon">
                <img src={germanyFlag} alt="germany-flag" />
              </Link>
            </li>
            <li>
              <Link to="/coming-soon">
                <img src={instagram} alt="instagram-logo" />
              </Link>
            </li>
            <li>
              <Link to="/coming-soon">
                <img src={cart} alt="shopping-cart" />
              </Link>
            </li>
          </div>
        </ul>
      </nav>
      <ul className={dropdown ? "dropdown open" : "dropdown"}>
        <li className="green">
          <Link
            to="/#about"
            onClick={() => {
              scrollToAbout();
              closeDropdown();
            }}>
            About
          </Link>
        </li>
        <li className="red">
          <Link to="/product" onClick={closeDropdown}>
            FlavaExplorer
          </Link>
        </li>
        <li>
          <Link to="/coming-soon" onClick={closeDropdown}>
            Recipes
          </Link>
        </li>
        <li>
          <Link to="/coming-soon" className="green" onClick={closeDropdown}>
            Our Classes
          </Link>
        </li>
        <li>
          <Link to="/coming-soon" className="red" onClick={closeDropdown}>
            Events
          </Link>
        </li>
        <li>
          <Link to="/coming-soon" onClick={closeDropdown}>
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
