import React, { useState } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="navbar">
        {/* Left Side */}
        <div className="Navleft">
          <NavLink to="/">
            <img src={assets.logo} alt="Logo" className="logo" />
          </NavLink>
        </div>

        {/* Right Side */}
        <div className="NavRight">
          {/* RightSide Top Section */}
          <div className="top">
            <div className="topSection">
              <div>
                <img src={assets.location_icon} alt="Location Icon" />
              </div>
              <a href='https://maps.app.goo.gl/Gy4iLRzcNQLNMqe7A' target='_blank'>GIFT SEZ, Gift City, Gandhinagar - 382355</a>
            </div>
            <div className="topSection">
              <div>
                <img src={assets.mail_icon} alt="Mail Icon" />
              </div>
              <a href='mailto:info@consulvenifsc.com'>info@consulvenifsc.com</a>
            </div>
          </div>

          {/* RightSide Bottom Section */}
          <div className="bottom">
            <div className="backWhite"></div>
            <div className="topBlack">
              <img src={assets.phone_icon} alt="Phone Icon" />
              <a href='tel:081488812523'>+91 81488812523</a>
            </div>

            {/* NavBar Links */}
            <ul className="navBarList">
              <NavLink to="/" className="link">
                <p>Home</p>
                <hr />
              </NavLink>
              <NavLink to="/about" className="link">
                <p>About Us</p>
                <hr />
              </NavLink>
              <NavLink to="/service" className="link">
                <p>Service</p>
                <hr />
              </NavLink>
              <NavLink to="/industrie" className="link">
                <p>Industries</p>
                <hr />
              </NavLink>
              <NavLink to="/team" className="link">
                <p>Teams</p>
                <hr />
              </NavLink>
              <NavLink to="/career" className="link">
                <p>Careers</p>
                <hr />
              </NavLink>
              <NavLink to="/contact" className="link">
                <p>Contact Us</p>
                <hr />
              </NavLink>
            </ul>
          </div>
        </div>
      </div>

      {/* Tab View Navbar */}
      <div className="mdNavbBar">
        {/* Left Side */}
        <div className="Navleft">
          <NavLink to="/">
            <img src={assets.logo} alt="Logo" className="logo" />
          </NavLink>
        </div>

        {/* Hamburger Icon */}
        <div className="NavRight">
          <div className={`humContainer ${isOpen ? 'change' : ''}`} onClick={handleToggle}>
            <div className="bar1"></div>
            <div className="bar3"></div>
          </div>
        </div>

        {/* Sliding Menu for Tab View */}
        <div className={`tabMenu ${isOpen ? 'slide-in' : 'slide-out'}`}>
          <ul className="tabMenuList">
            <NavLink to="/" className="tabLink" onClick={() => setIsOpen(false)}>
              <p>Home</p>
            </NavLink>
            <NavLink to="/about" className="tabLink" onClick={() => setIsOpen(false)}>
              <p>About Us</p>
            </NavLink>
            <NavLink to="/service" className="tabLink" onClick={() => setIsOpen(false)}>
              <p>Service</p>
            </NavLink>
            <NavLink to="/industrie" className="tabLink" onClick={() => setIsOpen(false)}>
              <p>Industries</p>
            </NavLink>
            <NavLink to="/team" className="tabLink" onClick={() => setIsOpen(false)}>
              <p>Teams</p>
            </NavLink>
            <NavLink to="/career" className="tabLink" onClick={() => setIsOpen(false)}>
              <p>Careers</p>
            </NavLink>
            <NavLink to="/contact" className="tabLink" onClick={() => setIsOpen(false)}>
              <p>Contact Us</p>
            </NavLink>
          </ul>
        </div>

      </div>
    </>
  );
};

export default Navbar;
