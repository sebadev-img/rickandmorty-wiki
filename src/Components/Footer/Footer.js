import React from "react";
import "./Footer.css";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

function Footer() {
  return (
    <div className="footer-container">
      <h1 className="footer-author">sebaDev</h1>
      <div className="icons-container">
        <a href="https://github.com/sebadev-img" className="icon">
          <SiGithub color="#9e9e9e" size="1.5em"></SiGithub>
        </a>
        <a href="https://github.com/sebadev-img" className="icon">
          <SiLinkedin color="#9e9e9e" size="1.5em"></SiLinkedin>
        </a>
        <a href="https://instagram.com/sebastianperez.img" className="icon">
          <SiInstagram color="#9e9e9e" size="1.5em"></SiInstagram>
        </a>
      </div>
    </div>
  );
}

export default Footer;
