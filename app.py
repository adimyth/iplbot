from flask import Flask, render_template, request
from bot import generate_response
from scraper import get_points_table
import json

app = Flask(__name__)


@app.route("/")
def home():
    points_table = get_points_table()
    return render_template("index.html", points_table=points_table)


@app.route("/get", methods=['GET', 'POST'])
def get_bot_response():
    user_input = request.args.get('msg')
    return str(generate_response(user_input))


if __name__ == "__main__":
    app.run(debug=True)
