import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="oval">
            <img
              src="https://luckyszakul0.github.io/FM-Social-links-profile/assets/images/avatar-jessica.jpeg"
              alt="avatar"
            />
          </div>
          <div className="underHeader">
            <h2>Jessica Randall</h2>
            <h3 className="location">London, United Kingdom</h3>
          </div>
          <div className="about">
            <p>"Front-end developer and avid reader."</p>
          </div>
        </header>
        <main>
          <button>GitHub</button>

          <button>Frontend Mentor</button>

          <button>LinkedIn</button>

          <button>Twitter</button>

          <button>Instagram</button>
        </main>
      </div>
      <footer>
        <p>
          Challenge by{" "}
          <a href="#" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="#" target="_blank">
            luckyszakul0
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default App;
