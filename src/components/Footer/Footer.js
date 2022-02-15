import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://www.linkedin.com/in/pathan-asif-khan-/" target="__blank">
          Asif Khan
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/a.s.i.f__k.h.a.n/" target="__blank">
        {/* <i class="fa-brands fa-instagram-square"></i> */}
        <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/pathan-asif-khan-/" target="__blank">
        {/* <i class="fa-brands fa-linkedin"></i> */}
        <FaLinkedinIn />
        </a>
        <a href="https://github.com/Asif0401" target="__blank">
        {/* <i class="fa-brands fa-github"></i> */}
        <FaGithub />
        
        </a>
      </div>
    </div>
  );
};

export default Footer;
