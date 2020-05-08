import React, { Component } from "react";
import Navbar from './Components/Navbar/Navbar'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h1>Stuff goes here</h1>
        </div>
      </div>
    );
  }
}

export default App;
