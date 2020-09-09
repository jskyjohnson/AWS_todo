import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

//test
import axios from "axios";

function App() {
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios
        .get("/todos/1")
        .then(promise => {
          //console.log("hello");
          //setDescription( promise.json() );
        })
        .catch((e) => {
          console.error(e);
        });
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {description}
        </a>
      </header>
    </div>
  );
}

export default App;
