import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg"></div>
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
        <div className="box mediumbox">
          <div className="wrapper">
            <h2>Connect</h2>
            <p>socials</p>
          </div>
        </div>
        <div className="box mediumbox">
          <div className="wrapper">
            <h2>Blog</h2>
            <p>skills</p>
          </div>
        </div>
        <div className="box mediumbox">
          <div className="wrapper">
            <h2>Projects</h2>
            <p>projects</p>
          </div>
        </div>
        <div className="box smallbox">
          <div className="wrapper">
            <h2>Skills</h2>
          </div>
        </div>
        <div className="box smallbox">
          <div className="wrapper">
            <p>design? narwhal</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
