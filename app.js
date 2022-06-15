const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
module.exports = app;

app.use(cors());
app.use(express.json());

app.post("/cart/add", async (req, res, next) => {
  try {
    const products = req.body;

    if (products) {
      let {data} = await axios.post("http://mokita.co/cart/add.js", products);
    }
    res.send("ok");
  } catch (e) {
    next(e);
  }
});
