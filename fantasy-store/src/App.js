import React, { Component } from "react";
import Store from "./components/Store";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Hello from app</h1>
        <Store />
      </React.Fragment>
    );
  }
}

export default App;
