import React, { Component } from "react";
import "./App.css";
import { Grid } from "react-bootstrap";
import Jumbotron from "./Components/Jumbotron";
import SearchField from "./Components/SearchField";
const axios = require("axios");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasSearchResults: false,
      searching: false
    };

    this.searchXkcds = this.searchXkcds.bind(this);
  }

  searchXkcds(value) {
    console.log("Updating state from search: " + value);
    // TODO set searching true to show spinner, get Xkcd data for search term,
    // then set hasSearchResults to true and render the results
    this.setState({
      hasSearchResults: false,
      searching: true
    });
    const url = "http://localhost:8080/search?q=" + value;
    axios
      .get(url)
      .then(function(response) {
        const comic = response.data;
        console.log(comic);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const hasSearchResults = this.state.hasSearchResults;
    const searching = this.state.searching;

    return (
      <div className="App">
        <Jumbotron />
        <Grid>
          <SearchField searchXkcds={this.searchXkcds} />
        </Grid>
      </div>
    );
  }
}

export default App;
