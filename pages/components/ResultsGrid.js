import ComicTile from "./ComicTile";

export default function ResultsGrid({ comics }) {
  const tiles = comics.map(c => <ComicTile key={c._id} comic={c} />);
  return <div>{tiles}</div>;
}
