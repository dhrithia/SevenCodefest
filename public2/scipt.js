// Define displayMessage function
function displayMessage(message) {
    var chatBox = document.getElementById("chat-box");
    var newMessage = document.createElement("p");
    newMessage.style.color = "blue";
    newMessage.textContent = message;
    chatBox.appendChild(newMessage);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
}

// Define sendMessage function
function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    // Display user message
    displayMessage("You: " + userInput);

    // Send user message to backend server
    fetch("http://127.0.0.1:5000/send_message", { // Change the URL to point to your Flask server
        method: "POST",
        mode: 'cors',
        body: JSON.stringify({ message: userInput }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        // Display bot response
        displayMessage("CNOW: " + data.response);
    })
    .catch(error => console.error("Error:", error));

    // Clear input field
    document.getElementById("user-input").value = "";
}
