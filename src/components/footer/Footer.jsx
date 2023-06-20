import React from 'react';
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialGithub } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import "./Footer.css";

function Footer() {
  return (
    <div id="footer" className="footer-container">
      <h1>
        <a href="#top" onClick={window.scrollTo(0, 0)}>
          <h2>
            <BsMouse className="icon-footer" />- desplazarse hacia arriba-
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a
          href="https://www.instagram.com/fedeleiras/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram className="social" />
        </a>
        <a
          href="https://www.facebook.com/federico.leiras/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF className="social" />
        </a>
        <a href="https://github.com/FLeiras" target="_blank" rel="noreferrer">
          <TiSocialGithub className="social" />
        </a>
        <a
          href="https://www.linkedin.com/in/fede-leiras/"
          target="_blank"
          rel="noreferrer"
        >
          <TiSocialLinkedin className="social" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
