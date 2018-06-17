import React, { Component } from "react";
import "./App.css";
import {
  Grid,
  FormGroup,
  FormControl,
  Jumbotron,
  Button
} from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Relevant Xkcd</h1>
            <p class="lead">
              With over two thousand comics, there is a relevant Xkcd for every
              situation - search to see for yourself!
            </p>
          </div>
        </div>
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
                    Go!
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
