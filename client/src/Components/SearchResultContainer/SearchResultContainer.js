import React, { Component } from "react";
import SearchBar from "..SearchBar/SearchBar";
import API from "../../utils";
import { response } from "express";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
  };

  componentDidMount() {
    this.searchGoogleBooks("Lord of the Rings");
  }

  searchGoogleBooks = (query) => {
    API.search(query)
    .then(response => this.setState({ results: res.data.data}))
    .catch(error => console.log(error));
  };

  handleInputChange = event => {
      const 
  }
}

export default SearchResultContainer;
