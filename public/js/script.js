const submit = document.getElementById("submitBtn")
const responseField = document.getElementById("response")
const userInput = document.getElementById("questionInput")
const chatHistory = document.getElementById("historyBtn")

let promptResponses = []

//calling api

const generateResponse = async () => {

    const input = userInput.value;
    const response = await fetch('/chat', {
        method: 'POST',
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{"role": "user", "content": input}],
            temp: 0.6
        })
    })

}