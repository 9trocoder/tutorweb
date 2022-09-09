import Header from "../components/Header";
import "./Homepage.css";
import headimage from "../assets/oladimeji.jpeg";
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
import ciuimage from "../assets/ciuimage.jpg";
import udemyimage from "../assets/udemyimage.jpg";
import freecodecampimage from "../assets/freecodecamp-svgrepo-com.svg";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <>
      <Header />

      <div className="hompage__cnt">
        <header className="hompage__header">
          <img src={headimage} alt="" />
          <div className="hompage__header-cnt">
            <p className="hompage__header-summary">Summary</p>
            <p className="hompage__header-summarytext">
              Passionate software engineer with 2-3 years of industry experience
              in full-stack development, front-end development, and user
              experience in Agile. I obtained REACT.js Certifications from
              UDEMY. I am looking to deliver excellent Web Development Skills to
              help grow business and Innovative ideas.
            </p>
          </div>
        </header>

        <section className="hompage__skils">
          <p className="hompage__skils-text">
            Programming, Frameworks & Software Tools
          </p>
          <div className="hompage__skils-cnt">
            <img src={cssimage} alt="" className="hompage__skils-item" />
            <img src={firebaseimage} alt="" className="hompage__skils-item" />
            <img src={gitimage} alt="" className="hompage__skils-item" />
            <img src={githubimage} alt="" className="hompage__skils-item" />
            <img src={htmlimage} alt="" className="hompage__skils-item" />
            <img src={jsimage} alt="" className="hompage__skils-item" />
            <img src={mongodbimage} alt="" className="hompage__skils-item" />
            <img src={nextjsimage} alt="" className="hompage__skils-item" />
            <img src={nodejsimage} alt="" className="hompage__skils-item" />
            <img src={npmimage} alt="" className="hompage__skils-item" />
            <img src={pwaimage} alt="" className="hompage__skils-item" />
            <img src={reactjsimage} alt="" className="hompage__skils-item" />
            <img src={tailwindimage} alt="" className="hompage__skils-item" />
            <img src={vercelimage} alt="" className="hompage__skils-item" />
            <img src={herokuimage} alt="" className="hompage__skils-item" />
            <img src={figmaimage} alt="" className="hompage__skils-item" />
            <img src={netlifyimage} alt="" className="hompage__skils-item" />
            <img src={postmanimage} alt="" className="hompage__skils-item" />
            <img
              src={stackoverflowimage}
              alt=""
              className="hompage__skils-item"
            />
            <img src={bitbucketimage} alt="" className="hompage__skils-item" />
            <img src={grapqlimage} alt="" className="hompage__skils-item" />
            <img src={reduximage} alt="" className="hompage__skils-item" />
            <img src={cpluplusimage} alt="" className="hompage__skils-item" />
          </div>
        </section>

        <section className="homepage__education-cnt">
          <p className="hompage__skils-text">Education</p>

          <div className="homegepage__edu-items">
            <div className="homepage__edu-item">
              <div className="hpedit-left">
                <img src={ciuimage} alt="" />
              </div>
              <div className="hpedit-right">
                <p className="hpedit-right-name">
                  Cyprus International University
                </p>
                <p className="hpedit-right-title">
                  Bachelor's degree, Computer Engineering
                </p>
                <p className="hpedit-right-date">Sep 2018 - Till date</p>
              </div>
            </div>
            <div className="homepage__edu-item">
              <div className="hpedit-left">
                <img src={freecodecampimage} alt="" />
              </div>
              <div className="hpedit-right">
                <p className="hpedit-right-name">freeCodeCamp</p>
                <p className="hpedit-right-title">
                  Full Stack Web Development Certification, Computer Science
                </p>
                <p className="hpedit-right-date">Sep 2017 - May 2018</p>
              </div>
            </div>
          </div>
        </section>

        <section className="homepage__education-cnt">
          <p className="hompage__skils-text">License & Certifications</p>

          <div className="homegepage__edu-items">
            <div className="homepage__edu-item">
              <div className="hpedit-left">
                <img src={udemyimage} alt="" />
              </div>
              <div className="hpedit-right">
                <p className="hpedit-right-name">
                  Node.js, Express, MongoDB: The Complete Bootcamp 2022
                </p>
                <p className="hpedit-right-title">Udemy: Online Courses</p>
                <p className="hpedit-right-date">Issued Sep 2022</p>
                <p className="hpedit-right-date">
                  Credential ID UC-d44cef1c-2e3b-470d-8143-2508d8bd9fb3
                </p>
              </div>
            </div>
            <div className="homepage__edu-item">
              <div className="hpedit-left">
                <img src={udemyimage} alt="" />
              </div>
              <div className="hpedit-right">
                <p className="hpedit-right-name">
                Microservices with Node JS and React
                </p>
                <p className="hpedit-right-title">Udemy: Online Courses</p>
                <p className="hpedit-right-date">Issued Sep 2022</p>
                <p className="hpedit-right-date">
                Credential ID UC-70c840aa-d142-46d6-83b6-e6475d3ba0ae
                </p>
              </div>
            </div>
            <div className="homepage__edu-item">
              <div className="hpedit-left">
                <img src={udemyimage} alt="" />
              </div>
              <div className="hpedit-right">
                <p className="hpedit-right-name">
                Microfrontends with React: A Complete Developer's Guide
                </p>
                <p className="hpedit-right-title">Udemy: Online Courses</p>
                <p className="hpedit-right-date">Issued Sep 2022</p>
                <p className="hpedit-right-date">
                Credential ID UC-10bf1245-48f1-46e4-97bd-132505504b3e
                </p>
              </div>
            </div>
            <div className="homepage__edu-item">
              <div className="hpedit-left">
                <img src={udemyimage} alt="" />
              </div>
              <div className="hpedit-right">
                <p className="hpedit-right-name">
                React - The Complete Guide (Hooks, React Router, Redux)
                </p>
                <p className="hpedit-right-title">Udemy: Online Courses</p>
                <p className="hpedit-right-date">Issued Sep 2022</p>
                <p className="hpedit-right-date">
                Credential ID UC-e2956d9a-a5e9-4d95-a5ad-39c1109055ae
                </p>
              </div>
            </div>
            <div className="homepage__edu-item">
              <div className="hpedit-left">
                <img src={udemyimage} alt="" />
              </div>
              <div className="hpedit-right">
                <p className="hpedit-right-name">
                Complete React Developer (Redux, Hooks, GraphQL)
                </p>
                <p className="hpedit-right-title">Udemy: Online Courses</p>
                <p className="hpedit-right-date">Issued Sep 2021</p>
                <p className="hpedit-right-date">
                Credential ID UC-aff2a8b4-93e3-4bdf-b5b0-483493f51130
                </p>
              </div>
            </div>
            <div className="homepage__edu-item">
              <div className="hpedit-left">
                <img src={udemyimage} alt="" />
              </div>
              <div className="hpedit-right">
                <p className="hpedit-right-name">
                The complete React 17 Fullstack course (2021 edition)
                </p>
                <p className="hpedit-right-title">Udemy: Online Courses</p>
                <p className="hpedit-right-date">Issued Sep 2021</p>
                <p className="hpedit-right-date">
                Credential ID UC-141d5f4c-9d35-4f68-9f08-60b96a5cd7c0
                </p>
              </div>
            </div>
            <div className="homepage__edu-item">
              <div className="hpedit-left">
                <img src={udemyimage} alt="" />
              </div>
              <div className="hpedit-right">
                <p className="hpedit-right-name">
                The complete React 18 Fullstack course (2022 edition)
                </p>
                <p className="hpedit-right-title">Udemy: Online Courses</p>
                <p className="hpedit-right-date">Issued Sep 2022</p>
                <p className="hpedit-right-date">
                Credential ID UC-141d5f4c-9d35-4f68-9f08-60b96a5cd7c0
                </p>
              </div>
            </div>
            <div className="homepage__edu-item">
              <div className="hpedit-left">
                <img src={udemyimage} alt="" />
              </div>
              <div className="hpedit-right">
                <p className="hpedit-right-name">
                Information Architecture (IA) Fundamental 
                </p>
                <p className="hpedit-right-title">Udemy: Online Courses</p>
                <p className="hpedit-right-date">Issued Sep 2021</p>
                <p className="hpedit-right-date">
                Credential ID UC-b1abd873-947e-4b90-82b1-cc854549536c
                </p>
              </div>
            </div>
            <div className="homepage__edu-item">
              <div className="hpedit-left">
                <img src={udemyimage} alt="" />
              </div>
              <div className="hpedit-right">
                <p className="hpedit-right-name">
                UX Design & User Experience 
                </p>
                <p className="hpedit-right-title">Udemy: Online Courses</p>
                <p className="hpedit-right-date">Issued Mar 2019</p>
                <p className="hpedit-right-date">
                Credential ID UC-9XVLC7F1
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
