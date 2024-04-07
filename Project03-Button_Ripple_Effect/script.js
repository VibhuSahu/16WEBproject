const btnE = document.querySelector(".btn"); // Select the button element with the class "btn"

btnE.addEventListener("mouseover", (event) => { // Add event listener for mouseover event
    const x = (event.pageX - btnE.offsetLeft); // Calculate the horizontal position relative to the button
    const y = (event.pageY - btnE.offsetTop); // Calculate the vertical position relative to the button
    
    // Set custom CSS variables to control the ripple effect position
    btnE.style.setProperty("--xpos", x + "%");
    btnE.style.setProperty("--ypos", y + "%");
});
