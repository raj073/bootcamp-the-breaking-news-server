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

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  if (id == "08") {
    res.send(news);
  } else {
    const categoryBasedNews = news.filter((n) => n.category_id === id);
    res.send(categoryBasedNews);
  }
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  id = req.params.id;
  console.log(id);
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});

app.listen(port, () => {
  console.log(`Bootcamp The Breaaking News Server is Running on ${port}`);
});
