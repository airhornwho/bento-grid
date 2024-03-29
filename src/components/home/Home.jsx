import React from 'react';
import './home.css';
import blog from "./blog.svg";
import code from "./code.svg";

const Home = () => {
  return (
    <div>
        <>
      <div className="bento">
        <div className="box longbox">
          <div className="wrapper">
            <h1>
              I'm <strong>Aaron Wu</strong>,
            </h1>
            <p>
              studying CS at <span>UC Merced</span> and exploring the
              possibilities of generative AI and immersive VR experiences.
            </p>
          </div>
        </div>
        <div className="box mediumbox connect">
          <div className="wrapper">
            <h2>Connect</h2>
            <p>Linkedin</p>
            <p>Github</p>
            <p>Email</p>
          </div>
        </div>
        <div className="box mediumbox blog">
          <div className="wrapper">
            <h2>Blog</h2>
            <img src={blog} alt="Blog"></img>
          </div>
        </div>
        <div className="box mediumbox projects">
          <div className="wrapper">
            <h2>Projects</h2>
            <img src={code} alt="Blog"></img>
          </div>
        </div>
        <div className="box smallbox">
          <div className="wrapper">
            <h3>Tech</h3>
            <p>React</p>
            <p>Express</p>
            <p>Git</p>
          </div>
        </div>
        <div className="box smallbox">
          <div className="wrapper">
            <h3>Code</h3>
            <p>Python</p>
            <p>Java</p>
            <p>C++</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>JS</p>
          </div>
        </div>
      </div>
    </>
    </div>
  )
}

export default Home