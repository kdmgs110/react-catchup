from flask import Flask, render_template, request

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True
app.config["DEBUG"] = True

@app.route("/", methods=["GET", "POST"])
def hello_world():
    if request.method == "POST":
        return render_template("index.html")
    return render_template("index.html")