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
  render() {
    return (
      <div className="App">
        <Grid>
          <Jumbotron>
            <h2>There's always a relevant Xkcd!</h2>
            <p>
              With over two thousand comics, there is a relevant Xkcd for every
              situation - search to see for yourself!
            </p>

            <div style={{ maxWidth: 400, margin: "0 auto 10px" }}>
              <form>
                <FormGroup bsSize="large">
                  <FormControl type="text" placeholder="Atheists" />
                </FormGroup>
              </form>

              <Button bsStyle="primary" bsSize="large" block>
                Search
              </Button>
            </div>
          </Jumbotron>
        </Grid>
      </div>
    );
  }
}

export default App;
