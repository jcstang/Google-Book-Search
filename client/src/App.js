import React, { Component } from "react";
import Navbar from './Components/Navbar/Navbar'
import Jumbotron from './Components/Jumbotron/Jumbotron'
import SearchBar from './Components/SearchBar/SearchBar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <SearchBar />
      </div>
    );
  }
}

export default App;
