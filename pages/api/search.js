export default (req, res) => {
  const { q } = req.query;
  console.log("api " + q);
  res.status(200).json({ results: "foobar" });
};
