import Tile from "./Tile";

export default function Grid({ comics }) {
  const tiles = comics?.map(c => <Tile key={c._id} comic={c?._source} />);
  return <div>{tiles}</div>;
}
