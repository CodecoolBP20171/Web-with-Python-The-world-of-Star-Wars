import psycopg2


def db_request(query):
    """Establish connection for database request"""
    try:
        connect_str = "dbname=potyi user=potyi host='localhost' password=joinme9"
        conn = psycopg2.connect(connect_str)
        conn.autocommit = True
    except:
        print("I am unable to connect to the database")
    cur = conn.cursor()
    cur.execute(query)
    table = cur.fetchall()
    table = list(map(list, table))
    return table


def db_update(query):
    """Establish connection for database update"""
    try:
        connect_str = "dbname=potyi user=potyi host='localhost' password=joinme9"
        conn = psycopg2.connect(connect_str)
        conn.autocommit = True
    except:
        print("I am unable to connect to the database")
    cur = conn.cursor()
    cur.execute(query)
    conn.close()
    return None
