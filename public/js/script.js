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
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const responseData = await response.json();
    const message = responseData.result[0].message.content;
    console.log(message);

    //storing old repsonses
    promptResponses.push({question: input, response: message});

    //clear both fields
    userInput.value = "";

    const historyElement = document.createElement('div');
    historyElement.innerHTML = `<li class="list-group-item">Prompt: ${input}</li>
    <li class="list-group-item"> Response: ${message}</li>`;
    chatHistory.append(historyElement);
}

submit.onclick = generateResponse; 