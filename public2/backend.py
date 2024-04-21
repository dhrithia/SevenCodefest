from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import openai

app = Flask(__name__)
CORS(app)

openai.api_key = "sk-proj-aejLSCMTfiMX6NSFCUPRT3BlbkFJO6AH7MUA2di0doGgUUVl"

def chat_with_cnow(prompt):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}]
    )

    return response.choices[0].message.content.strip()

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/send_message", methods=["POST"])
def send_message():
    user_input = request.json["message"]
    response = chat_with_cnow(user_input)
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)
