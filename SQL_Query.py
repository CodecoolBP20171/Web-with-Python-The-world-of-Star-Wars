import psycopg2
from flask import request
import datetime
import database_connection


def select_same_username(username):
    sql_to_select_same_username = ("SELECT username FROM username WHERE username ='{}';".format(username))
    return database_connection.db_request(str(sql_to_select_same_username))


def insert_user_registration(username, hashed_password):
    sql_to_insert_user = ("INSERT INTO username (username,password) VALUES ('{}','{}');".format(username, hashed_password))
    return database_connection.db_update(str(sql_to_insert_user))


def select_user_account(username):
    sql_to_select_user_account = ("SELECT  id,username,password FROM username WHERE username='{}';".format(username))
    return database_connection.db_request(str(sql_to_select_user_account))