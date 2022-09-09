import React from "react";
import instagramimage from "../assets/instagram-svgrepo-com.svg";
import "./Footer.css"

function Footer() {
  let instagramlink = "https://www.instagram.com/9trocoder/";
  return (
    <div className="footer__cnt">
      <a className="footer__contant-link" href="mailto:yemicodes@gmail.com">Contact me</a>
      <a  className="footer__instagram-link" href={instagramlink} target="__blank">
        <img src={instagramimage} alt="" />
      </a>
    </div>
  );
}

export default Footer;
