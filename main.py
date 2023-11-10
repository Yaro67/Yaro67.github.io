from flask import Flask

app = Flask(__name__)

@app.route('/', methods = ['GET', 'POST'])
def mainroute():

  testvar = 'bye'

  if request.method == 'GET':
    pass

  if request.method == 'POST':
    testvar = 'hi'
  
  return render_template('index.html', testvar = testvar)

app.run(host = '0.0.0.0')
