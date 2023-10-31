const express = require("express");
const ejsMate = require("ejs-mate");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const Recipe = require("./models/recipe");
const methodOverride = require("method-override");

//--------Connect to Database--------
mongoose.connect("mongodb://localhost:27017/epicer", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

//--------Engine and Setup--------
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//--------Routes--------
app.get("/recipes", async (req, res) => {
  const recipes = await Recipe.find({});
  res.render("home.ejs", { recipes });
});

app.get("/recipes/new", (req, res) => {
  res.render("recipes/new");
});

app.post("/recipes", async (req, res) => {
  const recipe = new Recipe(req.body.recipe);
  console.log(req.body);
  await recipe.save();
  res.redirect(`recipes/${recipe._id}`);
});

app.get("/recipes/:id", async (req, res) => {
  const { id } = req.params;
  const recipe = await Recipe.findById(id);
  res.render("recipes/show", { recipe });
});

app.get("/recipes/:id/edit", async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  res.render("recipes/edit", { recipe });
});

app.put("/recipes/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  const recipe = await Recipe.findByIdAndUpdate(id, { ...req.body.recipe });
  res.redirect(`/recipes/${recipe._id}`);
});

app.get("/", (req, res) => {
  res.redirect("/recipes");
});

app.use((req, res, next) => {
  res.status(404).render("404.ejs");
});

//turns the server on for port 3000
app.listen(3000, () => {
  console.log("serving on port 3000");
});
