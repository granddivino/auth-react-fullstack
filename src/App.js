import React, { Component } from "react";
// Components imports
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
// CSS imports 
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FunctionalComponent />
        <ClassComponent />
      </div>
    );
  }
}

export default App;
