import werkzeug
import SQL_Query


def registration_handler(username, password):
    username_list = SQL_Query.select_same_username(username)
    if len(username_list) != 0:
        return {'status': 'Invalid username', 'username': username}
    else:
        hashed_password = werkzeug.generate_password_hash(password, method='pbkdf2:sha256', salt_length=8)
        SQL_Query.insert_user_registration(username, hashed_password)
        response = log_in_handler(username, password)
        return response


def log_in_handler(username, password):
    user_account = SQL_Query.select_user_account(username)
    if len(user_account) != 0:
        status = werkzeug.check_password_hash(user_account[0][2], password)
        user_id = user_account[0][0]
        return {'status': status, 'user_id': user_id, 'username': username}
    else:
        return{'status': False}


