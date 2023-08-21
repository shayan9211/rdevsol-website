from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def root():
    return jsonify({'status': 'Flask server is running!'})

@app.route('/api/greeting', methods=['GET'])

def greeting():
    return jsonify({'message': 'Hello from Flask!'})

if __name__ == "__main__":
    app.run(debug=True)
