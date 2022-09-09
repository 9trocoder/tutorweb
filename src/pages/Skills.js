import React from "react";
import cssimage from "../assets/css-svgrepo-com.svg";
import firebaseimage from "../assets/firebase-svgrepo-com.svg";
import gitimage from "../assets/git-svgrepo-com.svg";
import githubimage from "../assets/github-svgrepo-com.svg";
import htmlimage from "../assets/html-svgrepo-com.svg";
import jsimage from "../assets/js-svgrepo-com.svg";
import mongodbimage from "../assets/mongodb-svgrepo-com.svg";
import nextjsimage from "../assets/nextjs-svgrepo-com.svg";
import nodejsimage from "../assets/nodejs-svgrepo-com.svg";
import npmimage from "../assets/npm-svgrepo-com.svg";
import pwaimage from "../assets/pwa-svgrepo-com.svg";
import reactjsimage from "../assets/reactjs-svgrepo-com.svg";
import tailwindimage from "../assets/tailwind-svgrepo-com.svg";
import vercelimage from "../assets/vercel-svgrepo-com.svg";
import herokuimage from "../assets/heroku-icon-svgrepo-com.svg";
import figmaimage from "../assets/figma-svgrepo-com.svg";
import netlifyimage from "../assets/netlify-svgrepo-com.svg";
import postmanimage from "../assets/postman-svgrepo-com.svg";
import stackoverflowimage from "../assets/stackoverflow-svgrepo-com.svg";
import bitbucketimage from "../assets/bitbucket-svgrepo-com.svg";
import grapqlimage from "../assets/graphql-svgrepo-com.svg";
import reduximage from "../assets/redux-svgrepo-com.svg";
import cpluplusimage from "../assets/cplusplus-svgrepo-com.svg";
import "./Skills.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Skills() {
  return (
    <>
      <Header />
      <div className="skills__cnt">
        <div className="hompage__skils-cntt">
          <img src={cssimage} alt="" className="hompage__skils-itemm" />
          <img src={firebaseimage} alt="" className="hompage__skils-itemm" />
          <img src={gitimage} alt="" className="hompage__skils-itemm" />
          <img src={githubimage} alt="" className="hompage__skils-itemm" />
          <img src={htmlimage} alt="" className="hompage__skils-itemm" />
          <img src={jsimage} alt="" className="hompage__skils-itemm" />
          <img src={mongodbimage} alt="" className="hompage__skils-itemm" />
          <img src={nextjsimage} alt="" className="hompage__skils-itemm" />
          <img src={nodejsimage} alt="" className="hompage__skils-itemm" />
          <img src={npmimage} alt="" className="hompage__skils-itemm" />
          <img src={pwaimage} alt="" className="hompage__skils-itemm" />
          <img src={reactjsimage} alt="" className="hompage__skils-itemm" />
          <img src={tailwindimage} alt="" className="hompage__skils-itemm" />
          <img src={vercelimage} alt="" className="hompage__skils-itemm" />
          <img src={herokuimage} alt="" className="hompage__skils-itemm" />
          <img src={figmaimage} alt="" className="hompage__skils-itemm" />
          <img src={netlifyimage} alt="" className="hompage__skils-itemm" />
          <img src={postmanimage} alt="" className="hompage__skils-itemm" />
          <img
            src={stackoverflowimage}
            alt=""
            className="hompage__skils-item"
          />
          <img src={bitbucketimage} alt="" className="hompage__skils-itemm" />
          <img src={grapqlimage} alt="" className="hompage__skils-itemm" />
          <img src={reduximage} alt="" className="hompage__skils-itemm" />
          <img src={cpluplusimage} alt="" className="hompage__skils-itemm" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Skills;
