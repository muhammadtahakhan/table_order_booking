from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS, cross_origin
import os


#init app
app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
# Databse
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/table_order_booker'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# Init DB
db = SQLAlchemy(app)
# init marshmallow
ma = Marshmallow(app)
# init CORS
cors = CORS(app)
#init falsk rest full
api = Api(app)


from app import routes, models