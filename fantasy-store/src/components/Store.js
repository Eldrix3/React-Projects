import React, { Component } from "react";
import { Data } from "../ProductList";

class Store extends Component {
  state = {
    products: Data,
  };
  render() {
    console.log(this.state.products);
    return (
      <React.Fragment>
        <h1>Hello man</h1>
      </React.Fragment>
    );
  }
}

export default Store;
