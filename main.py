from flask import Flask, request, render_template, jsonify, session, redirect, url_for, escape, request
import requests
import input_handler


app = Flask(__name__)


@app.route("/", methods=["GET"])
def star_wars_planets():
    return render_template("star_wars_planets.html")


@app.route('/logout')
def logout():
    session.pop('username', None)
    session.pop('user_id', None)
    return redirect(url_for('star_wars_planets'))


@app.route("/registration", methods=['GET'])
def registration():
    return render_template("registration.html")


@app.route("/log_in", methods=['POST'])
def log_in():
    print("py ok")
    username = request.form['username']
    password = request.form['password']
    response = input_handler.log_in_handler(username, password)
    return jsonify(response)


@app.route("/new_registration", methods=['POST'])
def new_registration():
    username = request.form['username']
    password = request.form['password']
    response = input_handler.registration_handler(username, password)
    return jsonify(response)


@app.errorhandler(404)
def not_found(e):
    return render_template("404.html")

app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'

if __name__ == '__main__':
    app.run(debug=True)
