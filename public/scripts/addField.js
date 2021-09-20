document.getElementById("addFieldButton").addEventListener("click", function (e) {
    e.preventDefault();
})

let ingredientsCounter = 0;

function addField() {
    if (ingredientsCounter < 20) {
        document.getElementById("add-field-div").insertAdjacentHTML('afterend',
            '<div id="ingredient-line" class="added-field">'

            + '<input type="text" class="ingredients" id="ingredients" name="recipe[ingredients][' + ingredientsCounter + '][name]"'
            + 'aria-label="ingredient" required>'

            + '<input type="number" value="1" min="0.1" max="100" step="0.1" name="recipe[ingredients][' + ingredientsCounter + '][amount]"'
            + 'aria-label="amount of ingredient">'

            + '<select name="recipe[ingredients][' + ingredientsCounter + '][unit]" aria-label="units of measurement">'
            + '<option></option>'
            + '<option>To taste</option>'
            + '<option>cup(s)</option>'
            + '<option>tsp(s)</option>'
            + '<option>tbsp(s)</option>'
            + '<option>gallon(s)</option>'
            + '<option>quart(s)</option>'
            + '</select>'

            + '</div>')
        ingredientsCounter++;
    }
}