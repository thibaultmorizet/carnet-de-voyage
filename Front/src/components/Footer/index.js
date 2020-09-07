import React from 'react';
import './styles.scss';

const Footer = () => (
  <div className="footer">
    <nav className="footer__nav">
      <ul className="footer__nav--ul">
        <a href="#">
          <li className="footer__nav--li">Contact</li>
        </a>
        <a href="#">
          <li className="footer__nav--li">Mentions légales</li>
        </a>
        <a href="#">
          <li className="footer__nav--li">L'équipe</li>
        </a>
      </ul>
    </nav>
  </div>
);

export default Footer;
