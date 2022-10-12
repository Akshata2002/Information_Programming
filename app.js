const express = require("express");
const app = express();
const redisClient = require("./redis");

app.get("/set", async (req, res, next) => {
  try {
    const key = req.query.key;
    const value = req.query.value;
    await redisClient.set(key, value);
    res.status(200).json({
      message: "data cached",
      key: key,
      value:value
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

app.get("/get", async (req, res, next) => {
  try {
    // const data = await redisClient.get("test");
    const key = req.query.key;
    const value = await redisClient.get(key).then((data) => {
      return data;
    });
    res.status(200).json({
      message: "Cached data retrieved",
      key:key,
      value:value
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Node server started");
});