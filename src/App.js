import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="flex flex-wrap">
          <div>
            <p className="label-2 pad-b">Light Theme</p>
            <div className="stack-1 dls-gray-02-bg margin-r-md-up pad">
              <button className="btn btn-block margin-auto-lr">Primary</button>
              <button className="btn btn-block margin-auto-lr btn-secondary">Secondary</button>
              <button className="btn btn-block margin-auto-lr btn-tertiary">Tertiary</button>
              <button className="btn btn-block margin-auto-lr" disabled>
                Disabled
              </button>
            </div>
          </div>
          <div>
            <p className="label-2  pad-b">Dark Theme</p>
            <div
              className="pad stack-1 position-relative"
              style={{
                "background-image": "logo192.png",
              }}
            >
              <div className="card-img-tint card-img-hero-tint dls-black-bg"></div>
              <button className="btn btn-block margin-auto-lr btn-white">Primary</button>
              <button className="btn btn-block margin-auto-lr btn-white-secondary">
                Secondary
              </button>
              <button className="btn btn-block margin-auto-lr btn-white-tertiary">Tertiary</button>
              <button className="btn btn-block margin-auto-lr btn-white" disabled>
                Disabled
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
