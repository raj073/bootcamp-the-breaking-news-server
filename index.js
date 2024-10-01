const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const news = require("./data/news.json");
const categories = require("./data/categories.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Bootcamp The Breaaking News Server is Running");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.listen(port, () => {
  console.log(`Bootcamp The Breaaking News Server is Running on ${port}`);
});
