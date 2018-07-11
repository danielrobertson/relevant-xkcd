import React from "react";

class ComicList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cards = this.props.comics.map((c, i) => {
      return (
        <div className="card" key={i}>
          <img
            className="card-img-top"
            src={c._source.img}
            alt={c._source.title}
          />
        </div>
      );
    });

    return <div className="card-columns">{cards}</div>;
  }
}

export default ComicList;
