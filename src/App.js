import React, { Component } from "react";
import "./App.css";
import { Grid, Button } from "react-bootstrap";
import Jumbotron from "./Components/Jumbotron";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Jumbotron />
        <Grid>
          <div class="row">
            <div class="col-lg-6">
              <div class="input-group input-group-lg">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search for..."
                />
                <span class="input-group-btn">
                  <button class="btn btn-primary" type="button">
                    <span class="glyphicon glyphicon-search" />
                  </button>
                </span>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default App;
