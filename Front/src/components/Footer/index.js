import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Footer = () => (
  <div className="footer">
    <nav className="footer__nav">
      <ul className="footer__nav--ul">
        <li className="footer__nav--li">
          <NavLink
            to="/contact"
            exact
          >
            Contact
          </NavLink>
        </li>
        <li className="footer__nav--li">
          <NavLink
            to="/privacy"
            exact
          >
            Mentions Légales
          </NavLink>
        </li>
        <li className="footer__nav--li">
          <NavLink
            to="/presentation"
            exact
          >
            Présentation
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Footer;
