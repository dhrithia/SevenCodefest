import openai

openai.api_key = "sk-proj-0eh6h3G8IjA94S0lzvw4T3BlbkFJXi1uaXwIHt5VJosNKnuZ"

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