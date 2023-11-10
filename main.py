from flask import Flask

app = Flask(__name__)

@app.route('/', methods = ['GET', 'POST'])
def mainroute():

  testvar = 'bye'
  
  return render_template('indfex.html', testvar = testvar)

app.run(host = '0.0.0.0')
