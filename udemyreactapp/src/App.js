import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FirstClass from "./ClassComponents";
import FirstArrowFunction from "./ArrowFunction";
import Card from "./Card";
import "tachyons";

function App() {
  return (
    <div className="App">
      <FirstClass greetings={"First Class Components"}></FirstClass>

      <FirstArrowFunction
        properties={"Function Props Updated"}
      ></FirstArrowFunction>

      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
}

export default App;
