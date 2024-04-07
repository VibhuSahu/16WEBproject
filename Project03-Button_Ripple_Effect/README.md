# Project: Button Ripple Effect

## Project Description:
The Button Ripple Effect project aims to create a visually appealing ripple effect animation when hovering over a button on a webpage. This effect enhances user interaction and provides feedback to the user.

## File Purposes:

### `index.html`:
- **Purpose:** 
  - Defines the structure of the webpage.
  - Includes the button element where the ripple effect will be applied.
- **Explanation:**
  - It sets up the HTML structure with the necessary elements.
  - Includes the button element with the class "btn" and an ID of "btn".
  - Links to external CSS and JavaScript files for styling and functionality.

### `style.css`:
- **Purpose:** 
  - Defines the visual appearance and layout of the webpage elements.
- **Explanation:**
  - Imports a Google Font ('Reddit Mono') for text styling.
  - Sets the styles for the body, including margin, padding, background color, font family, and font weight.
  - Defines the styles for the button element with the class "btn", including background color, padding, font size, box shadow, border radius, and text color.
  - Adds a before pseudo-element to create the ripple effect animation on hover, setting its initial size, position, background color, and transition properties.
  - Increases the size of the pseudo-element on hover to create the ripple effect.

### `script.js`:
- **Purpose:** 
  - Implements the functionality and interactivity of the webpage.
- **Explanation:**
  - Selects the button element using the querySelector method.
  - Adds an event listener to the button for the "mouseover" event.
  - Calculates the horizontal and vertical positions of the mouse cursor relative to the button.
  - Sets custom CSS variables to control the position of the ripple effect.
  - Updates the size of the pseudo-element to create the ripple effect animation on hover.

## Project Working:
- When the user hovers over the button on the webpage, the JavaScript code calculates the position of the mouse cursor relative to the button.
- Based on these coordinates, the size and position of the ripple effect animation are adjusted using CSS variables.
- The CSS transitions create a smooth animation, making the ripple effect visually appealing.
- This provides a visually engaging and interactive user experience, enhancing the overall usability of the webpage.

