from flask import Flask, request, render_template,jsonify
import requests
import input_handler

app = Flask("star_wars_app")
api_url_planets = "http://swapi.co/api/planets"


@app.route("/", methods=["GET"])
def star_wars_planets():
    return render_template("star_wars_planets.html")


@app.route("/user", methods=["GET"])
def star_wars_planets_with_user():
    user_id = request.args.get["data-user_id"]
    user_data = request.args.get["username"]
    print(user_id)
    print(user_data)
    return ("OK")


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

if __name__ == '__main__':
    app.run(debug=True)
