// The secret password
const secretWord = "efrenlovekaitlyn123"; 

// Ask for the password
let entry = prompt("Enter the secret word to see your surprise:");

if (entry === secretWord) {
    // If correct, show the content
    document.body.style.display = "block";
} else {
    // If wrong, show an error message
    document.body.innerHTML = `
        <div style="text-align:center; margin-top:100px; font-family: Arial, sans-serif;">
            <h1>🔒 Access Denied</h1>
            <p>Wrong password, please try again!</p>
        </div>
    `;
    document.body.style.display = "block"; 
}

const screens = document.querySelectorAll(".screen");

function showScreen(id) {
  screens.forEach(screen => screen.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function goToScreen(screenNum) {
  showScreen("screen" + screenNum);
}
