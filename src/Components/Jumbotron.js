import React from "react";

class Jumbotron extends React.Component {
  render() {
    return (
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Relevant Xkcd</h1>
          <p class="lead">
            With over two thousand comics, there is a relevant Xkcd for every
            situation - search to see for yourself!
          </p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
