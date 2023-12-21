import pandas as pd
import numpy as np

from flask import Flask, request, jsonify, render_template
from flask_cors import CORS, cross_origin

import pickle

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

model = pickle.load(open("model.pkl", "rb"))

@app.route('/')
def test():
    return 'The web service is up and running...'


@app.route('/predict', methods = ["POST"])
@cross_origin()
def predict():
        json_ = request.json
        print(json_)
        query_df = pd.DataFrame(json_)
        query_df = query_df.astype(float)

        prediction = model.predict(query_df)
        if prediction[0] == 0 :
             answer = 'This employee has a low chance of leaving the company!'
        if prediction[0] == 1 :
             answer = 'This employee has a high chance of leaving the company!'
        print(answer)
        return jsonify(
                    message=answer,
                    category="success",
                    status=200
                )

if __name__ == "__main__":
    app.run(debug=True)
