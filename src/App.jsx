import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import EntryForm from "./components/EntryForm/EntryForm";
// import Popup from "./components/Popup/Popup";

function App() {
  return (
    <div className="App">
      <EntryForm title="Вход" btnText="Войти" isValidBtn="true" />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
      </header>
    </div>
  );
}

export default App;
