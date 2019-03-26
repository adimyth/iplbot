from flask import Flask, render_template, request
from bot import generate_response
import json

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/get", methods=['GET', 'POST'])
def get_bot_response():
    user_input = request.args.get('msg')
    return str(generate_response(user_input))


if __name__ == "__main__":
    app.run(debug=True)
