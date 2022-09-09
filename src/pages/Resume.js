import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import cv1 from "../assets/cv1.png";
import cv2 from "../assets/cv2.png";
import cv3 from "../assets/cv3.png";
import resumepdf from "../assets/Resume-Emmanuel-Adeyemi.pdf";
import "./Resume.css";

function Resume() {
  return (
    <>
      <Header />
      <div className="resume__cnt">
        <img src={cv1} alt="" className="resume__image" />
        <img src={cv2} alt="" className="resume__image" />
        <img src={cv3} alt="" className="resume__image" />

        <a className="resume__download" href={resumepdf} download>
          Download Cv
        </a>
      </div>

      <Footer />
    </>
  );
}

export default Resume;
