import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FirstClass from "./ClassComponents";
import FirstArrowFunction from "./ArrowFunction";

import "tachyons";
import { robots } from "./robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

// function App() {
//   return (
//     <div className="App">
//       <FirstClass greetings={"First Class Components"}></FirstClass>

//       <FirstArrowFunction
//         properties={"Function Props Updated"}
//       ></FirstArrowFunction>
//       <SearchBox />
//       <CardList robots={robots}></CardList>
//     </div>
//   );
// }
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchfield: "",
      robots: robots,
    };
  }

  OnSearchChange = (event) => {
    console.log(event.target.value);
    this.setState({ searchfield: event.target.value });
    //this.setState((robots: filterComponent));
  };

  render() {
    const filterComponent = this.state.robots.filter((x) => {
      return x.name
        .toLocaleLowerCase()
        .includes(this.state.searchfield.toLocaleLowerCase());
    });
    return (
      <div className="App">
        <FirstClass greetings={"First Class Components"}></FirstClass>

        <FirstArrowFunction
          properties={"Function Props Updated"}
        ></FirstArrowFunction>
        <SearchBox OnSearchChange={this.OnSearchChange} />
        <CardList robots={filterComponent}></CardList>
      </div>
    );
  }
}

export default App;
