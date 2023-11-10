from flask import Flask

app = Flask(__name__)

@app.route('/')
def mainroute():
  return render_template('index.html')

app.run(host = '0.0.0.0')
