import React from "react";

class ComicList extends React.Component {
  render() {
    const cards = this.props.comics.map((c, i) => {
      const link = "https://xkcd.com/" + c._source.num;
      return (
        <div className="card" key={i}>
          <a href={link}>
            <img
              className="card-img-top"
              src={c._source.img}
              alt={c._source.title}
            />
          </a>
        </div>
      );
    });

    return <div className="card-columns">{cards}</div>;
  }
}

export default ComicList;
