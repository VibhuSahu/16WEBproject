# Project: Realtime Character Counter

## Project Overview:
The Realtime Character Counter project is a web application designed to provide users with real-time feedback on the number of characters entered in a textarea. It displays the total character count and the remaining character count as the user types.

## Purpose of Each File:

### `index.html`:
- **Purpose:**
  - Defines the structure of the webpage.
  - Includes the textarea for user input and elements to display character counts.
- **Explanation:**
  - Contains HTML elements such as `<textarea>`, `<h1>`, and `<span>` for displaying character counts.
  - Links to external CSS and JavaScript files (`style.css` and `script.js`) for styling and functionality.

### `style.css`:
- **Purpose:**
  - Defines the visual appearance and layout of the webpage elements.
- **Explanation:**
  - Sets background image, font styles, colors, and sizes for various elements.
  - Styles the textarea, counter containers, and other elements to enhance the visual design.

### `script.js`:
- **Purpose:**
  - Implements the functionality and logic for real-time character counting.
- **Explanation:**
  - Retrieves DOM elements and adds event listeners to monitor user input.
  - Updates the character count dynamically as the user types in the textarea.
  - Calculates and displays the total character count and remaining character count.

## Project Working:
- When the webpage loads, the JavaScript code initializes and sets up event listeners.
- As the user types in the textarea, the `keyup` event is triggered, and the JavaScript code updates the character count.
- The `updateCounter()` function is called whenever the user types a key, which calculates the total character count and remaining character count based on the input.
- The updated character counts are then displayed in real-time on the webpage, providing instant feedback to the user.

