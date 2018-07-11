import React from "react";

class Jumbotron extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Relevant Xkcd</h1>
        <p className="lead">
          With over two thousand comics, there's a relevant Xkcd for every
          situation - search to see for yourself!
        </p>
      </div>
    );
  }
}

export default Jumbotron;
