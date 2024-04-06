const questionObj = document.getElementById('question'); // Get question element
const answerObj = document.getElementById('answer'); // Get answer input element
const formObj = document.getElementById('Quiz-form'); // Get form element
const pointObj = document.getElementById('score'); // Get score display element

const num1 = Math.ceil(Math.random() * 10); // Generate random number 1
const num2 = Math.ceil(Math.random() * 10); // Generate random number 2
const num3 = num1 * num2; // Calculate correct answer

questionObj.innerText = `What is ${num1} times ${num2}?`; // Display multiplication question

let userPoints = JSON.parse(localStorage.getItem('userPoints')); // Get user's score from localStorage
if (!userPoints) { userPoints = 0; } // If score doesn't exist, set it to 0

pointObj.innerText = (userPoints < 10) ? `score: 0${userPoints}` : `score: ${userPoints}`; // Display user's score

function checkAnswer() {
    const userAns = +answerObj.value; // Get user's answer
    if (userAns === num3) { // If answer is correct
        userPoints++; // Increase score
    } else {
        userPoints--; // Decrease score for incorrect answer
    }
    pointStorage(); // Save updated score to localStorage
}

function pointStorage() {
    localStorage.setItem('userPoints', JSON.stringify(userPoints)); // Save user's score to localStorage
}
