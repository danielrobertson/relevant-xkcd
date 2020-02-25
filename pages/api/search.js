import Appbase from "appbase-js";

const elastic = new Appbase({
  url: process.env.APPBASE_URL,
  app: "relevant-xkcd",
  credentials: process.env.APPBASE_KEY
});

const search = keyword => {
  return new Promise((resolve, reject) => {
    elastic
      .search({
        type: "comics",
        body: {
          query: {
            query_string: {
              query: keyword
            }
          }
        }
      })
      .on("data", res => {
        resolve(res);
      })
      .on("error", err => {
        reject(err);
      });
  });
};

export default async (req, res) => {
  const { q } = req.query;

  try {
    const { hits } = await search(q);
    res.status(200).json(hits);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};
