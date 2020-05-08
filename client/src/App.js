import React, { Component } from "react";
import Navbar from './Components/Navbar/Navbar'
import Jumbotron from './Components/Jumbotron/Jumbotron'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
      </div>
    );
  }
}

export default App;
