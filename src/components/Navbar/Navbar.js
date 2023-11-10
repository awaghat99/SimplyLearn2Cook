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
              <img src={cookLogo} alt="logo" />
            </li>
          </div>
          <div className="page-links">
            <li>
              <a className="green" href="#about">
                About Story
              </a>
            </li>
            <li className="red">
              <Link to="/product">FlavaExplorer</Link>
            </li>
            <li>
              <a href="#projects">Recipes</a>
            </li>
            <li>
              <a className="green" href="#projects">
                Our Community
              </a>
            </li>
            <li>
              <a className="red" href="#events">
                Events
              </a>
            </li>
            <li>
              <a href="#projects">Blog</a>
            </li>
          </div>
          <div className="flags-and-socials">
            <li>
              <span>
                <img src={franceFlag} alt="france-flag" />
              </span>
            </li>
            <li>
              <span>
                <img src={germanyFlag} alt="germany-flag" />
              </span>
            </li>
            <li>
              <span>
                <img src={instagram} alt="instagram-logo" />
              </span>
            </li>
            <li>
              <span>
                <img src={cart} alt="shopping-cart" />
              </span>
            </li>
          </div>
        </ul>
      </nav>
      <ul className={dropdown ? "dropdown open" : "dropdown"}>
        <li>
          <a className="green" href="#about">
            About Story
          </a>
        </li>
        <li className="red">
          <Link to="/product">FlavaExplorer</Link>
        </li>
        <li>
          <a href="#projects">Recipes</a>
        </li>
        <li>
          <a className="green" href="#projects">
            Our Community
          </a>
        </li>
        <li>
          <a className="red" href="#projects">
            Events
          </a>
        </li>
        <li>
          <a href="#projects">Blog</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
