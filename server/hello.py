from flask import Flask, request


app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/parse', methods=["POST"])
def parse():
    number = request.json["number"]
    paragraph = request.json["paragraph"]
    return f"Parsing {number} from paragraph '{paragraph}'"
