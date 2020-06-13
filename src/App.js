import React from "react";

import "./App.css";
import FunctionBased from "./Components/FunctionBased";
import Firstday from "./Components/ClassBased";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FunctionBased names="subash thapa"></FunctionBased>

        <Firstday name="Subash thapa"></Firstday>
      </header>
    </div>
  );
}

export default App;
