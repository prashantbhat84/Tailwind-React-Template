import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="text-center ">
      <header className="bg-purple-darker m-6 p-6 rounded shadow-lg">
        <img src={logo} className="text-base" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
