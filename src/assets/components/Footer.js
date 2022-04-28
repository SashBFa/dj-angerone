import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src="./assets/images/logo.png" alt="DJ Angerone" />
      </div>
      <ul className="footer__links">
        <NavLink
          to={"/"}
          className={(nav) => (nav.isActive ? "footer__active" : "")}
        >
          <li className="footer__link">home</li>
        </NavLink>
        <NavLink
          to={"/about"}
          className={(nav) => (nav.isActive ? "footer__active" : "")}
        >
          <li className="footer__link">about</li>
        </NavLink>
        <NavLink
          to={"/discography"}
          className={(nav) => (nav.isActive ? "footer__active" : "")}
        >
          <li className="footer__link">discography</li>
        </NavLink>
        <NavLink
          to={"/tour"}
          className={(nav) => (nav.isActive ? "footer__active" : "")}
        >
          <li className="footer__link">tours</li>
        </NavLink>
        <NavLink
          to={"/gallery"}
          className={(nav) => (nav.isActive ? "footer__active" : "")}
        >
          <li className="footer__link">photos</li>
        </NavLink>
      </ul>
      <ul className="footer__socials">
        <NavLink to={"/"}>
          <li className="footer__social">
            <i className="fa-brands fa-facebook-f"></i>
          </li>
        </NavLink>
        <NavLink to={"/"}>
          <li className="footer__social">
            <i className="fa-brands fa-instagram"></i>
          </li>
        </NavLink>
        <NavLink to={"/"}>
          <li className="footer__social">
            <i className="fa-brands fa-twitter"></i>
          </li>
        </NavLink>
        <NavLink to={"/"}>
          <li className="footer__social">
            <i className="fa-brands fa-youtube"></i>
          </li>
        </NavLink>
        <NavLink to={"/"}>
          <li className="footer__social">
            <i className="fa-brands fa-pinterest-p"></i>
          </li>
        </NavLink>
      </ul>
      <p>&copy; 2022 DJ Angerone Privacy Policy</p>
      <p>Coding by SashBFa</p>
    </div>
  );
};

export default Footer;
