// Header.jsx
import React, { useState, useEffect } from "react";
import "./Header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { FiArrowRight, FiX } from "react-icons/fi";
import darkLogo from "../assets/castbunnylogoblack.png";
import lightLogo from "../assets/castbunnylogowhite.png";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import ToggleButton from "../ToggleButton/toggleButton";
import { IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";

const Header = ({ toggleTheme, checked }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    // handleMenu();
  };
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      {isDesktop ? (
        <div className="HeaderWrap">
          <Link to="/" className="HeaderName">
            <img src={lightLogo} alt="" className="darkDisplay" />
            <img src={darkLogo} alt="" className="lightDisplay" />
          </Link>
          <div className="HeaderLinks">
            <Dropdown style={{ backgroundColor: "transparent" }}>
              <Dropdown.Toggle id="dropdown-basic">
                <span className="prod">Products</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/multiStream">
                  P2P MultiStream
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/studio">
                  CastStudios
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/chat">
                  ChatBot
                </Dropdown.Item>{" "}
                <Dropdown.Item as={Link} to="/chat">
                  TipBot
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/ott">
                  OTT-Set-Top Box
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Link to="/about" className="aboutUs">
              About Us
            </Link>
            <Link to="/pricing" className="pricing">
              Pricing
            </Link>
            <Link to="/integration" className="helpCenter">
              Integrations
            </Link>{" "}
            <Link to="/contact" className="helpCenter">
              Contact Us
            </Link>
          </div>
          <div className="HeaderAuth">
            <Link to="/login">
              <button className="login">Login</button>
            </Link>
            <Link to="/signUp">
              {" "}
              <button className="register">Register</button>
            </Link>
            <ToggleButton checked={checked} onChange={toggleTheme} />
          </div>
        </div>
      ) : (
        <div className="mobileHeader">
          <div className="menu">
            {menu ? (
              <RxCross2
                className="menu"
                style={{ fontSize: "20px" }}
                onClick={handleMenu}
              />
            ) : (
              <RxHamburgerMenu
                className="menu"
                style={{ fontSize: "20px" }}
                onClick={handleMenu}
              />
            )}
          </div>
          <div className={`sideMenu ${menu ? "show" : ""}`}>
            <Link
              to="/"
              className="mobileProducts mobileHelp"
              onClick={handleMenu}
            >
              {" "}
              Home
            </Link>
            <div className="smallMenuWrapper">
              {/* Button to toggle menu */}
              <div className="smallMenuHeader ">
                <div className="smallMenuProducts mobileHelp">Products</div>
                <FiArrowRight
                  className="smallMenuToggleButton"
                  onClick={handleMenuToggle}
                />
              </div>

              {/* Small side menu */}
              <div
                className={`smallSideMenu ${
                  menuOpen ? "menuOpen" : "menuClose"
                }`}
              >
                <nav>
                  <Link
                    to="/multiStream"
                    className="smallMenuLink"
                    onClick={() => {
                      handleMenuToggle();
                      handleMenu();
                    }}
                  >
                    P2P MultiStream
                  </Link>
                  <Link
                    to="/studio"
                    className="smallMenuLink"
                    onClick={() => {
                      handleMenuToggle();
                      handleMenu();
                    }}
                  >
                    CastStudios
                  </Link>
                  <Link
                    to="/chat"
                    className="smallMenuLink"
                    onClick={() => {
                      handleMenuToggle();
                      handleMenu();
                    }}
                  >
                    Chat Box & Donations
                  </Link>
                  <Link
                    to="/ott"
                    className="smallMenuLink"
                    onClick={() => {
                      handleMenuToggle();
                      handleMenu();
                    }}
                  >
                    OTT-Set Top-Box
                  </Link>
                </nav>
              </div>
            </div>
            <Link
              to="/about"
              className={menuOpen ? `mobileHelp marginTop` : `mobileHelp`}
              onClick={handleMenu}
            >
              About Us
            </Link>
            <Link to="/pricing" className="mobilePricing" onClick={handleMenu}>
              Pricing
            </Link>
            <Link to="/integration" className="mobileHelp" onClick={handleMenu}>
              Integrations
            </Link>
            <Link to="/contact" className="mobileAbout" onClick={handleMenu}>
              {" "}
              Contact Us
            </Link>
            {checked ? (
              <div className="d-flex mt-4">
                <p style={{ fontSize: "15px" }}>Light Mode</p>
                <GoSun
                  checked
                  onClick={toggleTheme}
                  style={{ margin: "2px 0 0 10px  " }}
                />
              </div>
            ) : (
              <div className="d-flex mt-4">
                <p style={{ fontSize: "15px", color: "black" }}>Dark Mode</p>
                <IoMoonOutline
                  onClick={toggleTheme}
                  style={{ margin: "2px 0 0 10px  ", color: "black" }}
                />
              </div>
            )}
          </div>
          <div className="mobileLogin">
            <Link to="/login">
              <button className="mobileLoginBtn">Login</button>
            </Link>
            <Link to="./signUp">
              <button className="mobileRegister">Register</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
