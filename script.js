let editedText1 = 'Player 1';
let editedText2 = 'Player 2';
const maxLength = 9;

function rollDice() {
    var randomNumber1 = Math.floor(Math.random()*6) + 1;
    var linkName = "./images/dice" + randomNumber1 + ".png";
    document.querySelector(".img1").setAttribute("src",linkName);

    var randomNumber2 = Math.floor(Math.random()*6) + 1;
    var linkName2 = "./images/dice" + randomNumber2 + ".png";
    document.querySelector(".img2").setAttribute("src",linkName2);

    var player1 = editedText1;
    var player2 = editedText2;
    if (randomNumber1 > randomNumber2) {
        document.querySelector(".title").textContent = "🚩" + player1 + " Wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector(".title").textContent = player2 + " Wins! 🚩";
    } else {
        document.querySelector(".title").textContent = "Draw!"
    }
}

// Function to handle editing for any clicked element
document.querySelectorAll(".editable").forEach(function(element, index) {

    element.addEventListener('click', function() { // event listener to run callback function when user clicks on text

        let currentText = this.innerText; // gets current text for user to edit in text box (next)
        let inputBox = document.createElement("input"); // creates new input element
        inputBox.type = "text"; // set input type to regular text
        inputBox.value = currentText; // prefills box with text to edit
        inputBox.maxLength = maxLength; // Set the maximum length for the input

        inputBox.addEventListener('blur', function() {
            if (index === 0) {
                editedText1 = inputBox.value;
            } else if (index === 1) {
                editedText2 = inputBox.value;
            }

            element.innerText = inputBox.value;
            inputBox.remove();            
        })

        this.innerText = ''; // clear current text
        this.appendChild(inputBox) // add the input box to the paragraph
        inputBox.focus(); // focus the input box
    })
})