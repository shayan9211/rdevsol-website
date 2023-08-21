from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///messages.db'  # Using SQLite for simplicity

db = SQLAlchemy(app)

class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    email = db.Column(db.String(200), nullable=False)
    subject = db.Column(db.String(200), nullable=False)
    message = db.Column(db.String(1000), nullable=False)

@app.route('/message', methods=['POST'])
def send_message():
    data = request.get_json()
    new_message = Message(name=data['Contact_Name'], email=data['Contact_Email'], subject=data['Contact_Subject'], message=data['Contact_Message'])
    db.session.add(new_message)
    db.session.commit()
    return jsonify({"message": "Message saved successfully!"})

@app.route('/view-messages', methods=['GET'])
def view_messages():
    all_messages = Message.query.all()
    result = [{"name": message.name, "email": message.email, "subject": message.subject, "message": message.message} for message in all_messages]
    return jsonify(result)

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
