import openai

openai.api_key = "sk-proj-7iTHO2PxlvukNkdCDZ9KT3BlbkFJq1VDhqfA3v9HNyXjuJVP"

def chat_with_cnow(prompt):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}]
    )

    return response.choices[0].message.content.strip()


if __name__ == "__main__":
    while True:
        user_input = input("You: ")
        if user_input.lower() in ["quit", "exit", "bye"]:
            break

        response = chat_with_cnow(user_input)
        print("Chatbot:", response)