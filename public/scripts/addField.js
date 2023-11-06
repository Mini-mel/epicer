document
  .getElementById("addFieldButton")
  .addEventListener("click", function (e) {
    e.preventDefault();
  });

let ingredientsCounter = 0;

function addField() {
  if (ingredientsCounter < 20) {
    document
      .getElementById("add-field-div")
      .insertAdjacentHTML(
        "afterend",
        '<div id="ingredient-line" class="added-field">' +
          '<input type="text" class="ingredients" id="ingredients" name="recipe[ingredients][' +
          ingredientsCounter +
          '][name]"' +
          'aria-label="ingredient" required>' +
          "</div>"
      );
    ingredientsCounter++;
  }
}
