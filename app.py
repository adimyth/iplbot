from flask import Flask, render_template, request
from bot import generate_response
import json

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/get", methods=['GET', 'POST'])
def get_bot_response():
    print(f"Request: {request}")
    user_input = request.args.get('msg')
    print(
        f'Message: {user_input}\nOutput: {str(generate_response(user_input))}')
    return str(generate_response(user_input))


if __name__ == "__main__":
    app.run(debug=True)
