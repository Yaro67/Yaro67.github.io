from flask import Flask

app = Flask(__name__)

@app.route('/')
def mainroute():
  
  return 'hi'

app.run(host = '0.0.0.0')
