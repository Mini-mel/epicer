const express = require('express');
const ejsMate = require('ejs-mate');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const Recipe = require('./models/recipe');

//--------Connect to Database--------
mongoose.connect('mongodb://localhost:27017/epicer', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;  //shortcut for mongoose.connection to make code more readable

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

//--------Engine and Setup--------
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public'))); //for serving static files like css
app.use(express.urlencoded({ extended: true })) //needs to parse req.body for post requests

//--------Routes--------
app.get('/recipes', async (req, res) => {
    const recipes = await Recipe.find({})
    res.render("home.ejs", { recipes });
})

app.get('/recipes/new', (req, res) => {
    res.render("recipes/new");
})

app.post('/recipes', async (req, res) => {
    const recipe = new Recipe(req.body.recipe);
    await recipe.save();
    res.redirect(`recipes/${recipe._id}`);
})

app.get('/recipes/:id', async (req, res) => {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    res.render('recipes/show', { recipe });
})

app.get('/', (req, res) => {
    res.redirect("/recipes");
})

//turns the server on for port 3000
app.listen(3000, () => {
    console.log('serving on port 3000');
})