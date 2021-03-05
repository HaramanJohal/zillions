from flask import Flask, request

from .parse import clean_number

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/parse', methods=["POST"])
def parse():
    number = request.json["number"]
    paragraph = request.json["paragraph"]
    return f"Parsing {clean_number(number)} from paragraph '{paragraph}'"
