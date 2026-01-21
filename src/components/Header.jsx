import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import {
  FaBars,
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingBag,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import "./Header.css";
import logo from "../assets/Main-logo.webp";

class Header extends Component {
  state = {
    menuOpen: false,
    darkMode: false,
  };

  componentDidMount() {
    // Load dark mode preference
    const darkMode = JSON.parse(localStorage.getItem("darkMode")) || false;
    this.setState({ darkMode });
    if (darkMode) document.body.classList.add("dark-mode");
  }

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  toggleDarkMode = () => {
    const newMode = !this.state.darkMode;
    this.setState({ darkMode: newMode });
    document.body.classList.toggle("dark-mode", newMode);
    localStorage.setItem("darkMode", newMode);
  };

  render() {
    const { menuOpen, darkMode } = this.state;

    return (
      <>
        {/* Top Bar */}
        <div className={`topbar ${darkMode ? "dark-topbar" : ""}`}>
          <Container className="d-flex justify-content-between align-items-center">
            <p>Limited Time Offer: Up To 50% Off Every Week</p>

            {/* Dark Mode Switch */}
            <div className="dark-mode-switch" onClick={this.toggleDarkMode}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </div>
          </Container>
        </div>

        {/* Header */}
        <header className={`header ${darkMode ? "dark-header" : ""}`}>
          <Container className="d-flex align-items-center justify-content-between">
            {/* Mobile Hamburger */}
            <div className={`mobile-toggle`} onClick={this.toggleMenu}>
              <FaBars className={darkMode ? "dark-icons" : ""} />
            </div>

            {/* Logo */}
            <div className="logo">
              <img src={logo} alt="Bookraze" />
            </div>

            {/* Navigation */}
            <nav className={`nav ${menuOpen ? "open" : ""}`}>
              <div className="close-menu" onClick={this.toggleMenu}>
                <FaTimes />
              </div>
              <Link to="/" onClick={this.toggleMenu}>
                HOME
              </Link>
              <Link to="/shop" onClick={this.toggleMenu}>
                SHOP
              </Link>
              <Link to="/collections" onClick={this.toggleMenu}>
                COLLECTIONS
              </Link>
              <Link to="/religion" onClick={this.toggleMenu}>
                RELIGION
              </Link>
              <Link to="/contact" onClick={this.toggleMenu}>
                CONTACT
              </Link>
              <Link to="/blog" onClick={this.toggleMenu}>
                BLOG
              </Link>
            </nav>

            {/* Desktop Icons */}
            <div className="icons">
              <FaSearch className={darkMode ? "dark-icons" : ""} />
              <FaUser className={darkMode ? "dark-icons" : ""} />
              <FaHeart className={darkMode ? "dark-icons" : ""} />
              <FaShoppingBag className={darkMode ? "dark-icons" : ""} />
            </div>
          </Container>
        </header>

        {/* Overlay */}
        {menuOpen && <div className="overlay" onClick={this.toggleMenu}></div>}
      </>
    );
  }
}

export default Header;
