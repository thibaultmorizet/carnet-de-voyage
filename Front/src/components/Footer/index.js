import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Footer = () => (
  <div className="footer">
    <nav className="footer__nav">
      <ul className="footer__nav--ul">

        <NavLink
          to="/contact"
          exact
          className="footer__nav--li"
        >
          Contact
        </NavLink>

        <NavLink
          to="/privacy"
          exact
          className="footer__nav--li"
        >
          Mentions Légales
        </NavLink>

        <NavLink
          to="/presentation"
          exact
          className="footer__nav--li"
        >
          Présentation
        </NavLink>

      </ul>
    </nav>
  </div>
);

export default Footer;
