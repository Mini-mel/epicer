const express = require('express');
const ejsMate = require('ejs-mate');
const path = require('path');
const app = express();

//--------Engine and Setup--------
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public'))); //for serving static files like css

//--------Routes--------
app.get('/', (req, res) => {
    res.render("home.ejs");
})

app.get('/favorites', (req, res) => {
    res.render("favs.ejs");
})

//turns the server on for port 3000
app.listen(3000, () => {
    console.log('serving on port 3000');
})