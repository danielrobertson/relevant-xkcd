import React from "react";

class Jumbotron extends React.Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Relevant Xkcd</h1>
          <p className="lead">
            With over two thousand comics, there is a relevant Xkcd for every
            situation - search to see for yourself!
          </p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
