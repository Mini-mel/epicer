const mongoose = require("mongoose");
const Schema = mongoose.Schema;  //to make code more readable

const RecipeSchema = new Schema({
    title: String,
    image: String,
    summary: String,
    instructions: String,
    ingredients: [
        {
            name: String,
            amount: Float32Array
        }
    ]
});

module.exports = mongoose.model('Recipe', RecipeSchema);
