import React, { Component } from "react";
import "./App.css";
import { Grid } from "react-bootstrap";
import Jumbotron from "./Components/Jumbotron";
import SearchField from "./Components/SearchField";

const Appbase = require("appbase-js");
const elastic = new Appbase({
  url: "https://scalr.api.appbase.io",
  app: "relevant-xkcd",
  credentials: process.env.REACT_APP_APPBASE_KEY
});


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasSearchResults: false,
      comics: []
    };

    this.searchXkcds = this.searchXkcds.bind(this);
  }

  searchXkcds(value) {
    console.log("Searching Xkcd's for keyword - " + value);
    this.setState({
      hasSearchResults: false,
      searching: true
    });

    elastic.search({
      type: "comics",
      body: {
          "query": {
              "query_string": {
                  "query": value
              }
          }
      }
    }).on('data', function (res) {
        console.log("query result: ", res);
        if(res.hits.hits.total > 0) {
          this.setState({
            hasSearchResults: true, 
            comics: res.hits,
          });
        }
    }).on('error', function (err) {
        console.log("search error: ", err)
    })
  }

  render() {
    const hasSearchResults = this.state.hasSearchResults;


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
