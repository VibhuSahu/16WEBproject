const textboxE = document.getElementById("textbox"); // Get the textarea element by its ID
const totalCounterE = document.getElementById("total-counter"); // Get the element for displaying total character count
const remaningE = document.getElementById("remaning"); // Get the element for displaying remaining character count

textboxE.addEventListener("keyup", () => { // Add event listener for the "keyup" event (when a key is released)
    updateCounter(); // Call the updateCounter function whenever a key is released
})

updateCounter(); // Call the updateCounter function initially to display the initial character count

function updateCounter() {
    totalCounterE.innerText = textboxE.value.length; // Update the total character count displayed in the HTML
    remaningE.innerText = textboxE.getAttribute("maxLength") - textboxE.value.length; // Calculate and update the remaining character count
}
