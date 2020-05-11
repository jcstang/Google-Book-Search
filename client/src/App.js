import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved/Saved";
import Search from "./pages/Search/Search";
import Navbar from "./Components/Navbar/Navbar";
import { Container } from "./Components/Grid/Grid";
import { ToastContainer, Zoom } from "react-toastify";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <Container>
            <ToastContainer
              position="top-center"
              autoClose={3500}
              transition={Zoom}
              hideProgressBar
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnVisibilityChange
              draggable={false}
              pauseOnHover
            />
            <Switch>
              <Route exact path="/" component={Search} />
              <Route path="/bookshelf" component={Saved} />
              <Route exact path="/books/:id" component={null} />
              <Route component={null} />
            </Switch>
          </Container>
        </Router>
        <Jumbotron />
      </div>
    );
  }
}

export default App;
