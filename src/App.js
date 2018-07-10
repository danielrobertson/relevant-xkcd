import React, { Component } from "react";
import "./App.css";
import { Grid } from "react-bootstrap";
import Jumbotron from "./Components/Jumbotron";
import SearchField from "./Components/SearchField";

const Appbase = require("appbase-js");
const elastic = new Appbase({
  url: "https://scalr.api.appbase.io",
  app: "relevant-xkcd",
  credentials: "7pOxbobOr:87304d21-b4a4-4c9a-8c92-c23bf27f8be0"
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

    elastic
      .search({
        type: "comics",
        body: {
          query: {
            query_string: {
              query: value
            }
          }
        }
      })
      .on(
        "data",
        function(res) {
          console.log("query result: ", res);

          console.log("yes");
          this.setState({
            hasSearchResults: true,
            comics: res.hits
          });
        }.bind(this)
      )
      .on("error", function(err) {
        console.log("search error: ", err);
      });
  }

  render() {
    const hasSearchResults = this.state.hasSearchResults;

    const resultsArea = hasSearchResults ? <div>"results area"</div> : null;
    return (
      <div className="App">
        <Jumbotron />
        <Grid>
          <SearchField searchXkcds={this.searchXkcds} /> {resultsArea}
        </Grid>
      </div>
    );
  }
}

export default App;
