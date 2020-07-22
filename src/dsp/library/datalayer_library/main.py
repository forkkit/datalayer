import os, json, logging, datetime, uuid

from flask import Flask, g, send_from_directory, jsonify, request, redirect
from flask_oidc import OpenIDConnect
from flask_cors import CORS

from datalayer_library.library import index_tweet, search_tweets

logging.basicConfig(level=logging.DEBUG)

ROOT_FOLDER='./..'
OIDC_CLIENT_SECRETS = os.getenv('HOME') + '/.datalayer/oidc.json'
OIDC_CLIENT_SECRETS_TEMPLATE = os.getenv('HOME') + '/.datalayer/oidc.json.template'

global oidc_conf
oidc_conf = None
csr = open(OIDC_CLIENT_SECRETS_TEMPLATE, 'r')
oidc_conf = json.load(csr)
oidc_conf['web']['client_secret'] = os.getenv('DLA_KEYCLOAK_REALM_CLIENT_SECRET')
oidc_conf['web']['auth_uri'] = oidc_conf['web']['auth_uri'].replace('DLA_KEYCLOAK_SCHEME_HOST', os.getenv('DLA_KEYCLOAK_SCHEME_HOST'))
oidc_conf['web']['issuer'] = oidc_conf['web']['issuer'].replace('DLA_KEYCLOAK_SCHEME_HOST', os.getenv('DLA_KEYCLOAK_SCHEME_HOST'))
oidc_conf['web']['token_introspection_uri'] = oidc_conf['web']['token_introspection_uri'].replace('DLA_KEYCLOAK_SCHEME_HOST', os.getenv('DLA_KEYCLOAK_SCHEME_HOST'))
oidc_conf['web']['token_uri'] = oidc_conf['web']['token_uri'].replace('DLA_KEYCLOAK_SCHEME_HOST', os.getenv('DLA_KEYCLOAK_SCHEME_HOST'))
oidc_conf['web']['userinfo_uri'] = oidc_conf['web']['userinfo_uri'].replace('DLA_KEYCLOAK_SCHEME_HOST', os.getenv('DLA_KEYCLOAK_SCHEME_HOST'))
with open(OIDC_CLIENT_SECRETS, 'w') as csw:
    json.dump(oidc_conf, csw, indent=4, sort_keys=True)

PORT = 9800

app = Flask(__name__, static_folder = ROOT_FOLDER)

app.logger.setLevel(logging.DEBUG)

app.config.update({
    'SECRET_KEY': 'SomethingNotEntirelySecret',
    'TESTING': False,
    'DEBUG': False,
    'OIDC_CLIENT_SECRETS': OIDC_CLIENT_SECRETS,
    'OIDC_ID_TOKEN_COOKIE_SECURE': False,
    'OIDC_REQUIRE_VERIFIED_EMAIL': False,
    'OIDC_USER_INFO_ENABLED': True,
    'OIDC_OPENID_REALM': 'datalayer',
    'OIDC_SCOPES': [
        'openid',
        'email',
        'profile'
        ],
    'OIDC_INTROSPECTION_AUTH_METHOD': 'client_secret_post',
    'OIDC_CALLBACK_ROUTE': '/api/library/oidc_callback',
    'OVERWRITE_REDIRECT_URI': os.getenv('DLA_LIBRARY_AUTH_CALLBACK'),
})

CORS(app, supports_credentials = True)
oidc = OpenIDConnect(app)

@app.route('/api/library')
@app.route('/api/library/')
def show_index():
    return """<h1>Datalayer Library</h1>
<img src="/api/library/res/library.svg" width="200" />"""

@app.route('/api/library/res/<path:path>', defaults = {'folder': 'res'})
def res(folder, path):
    return send_from_directory(ROOT_FOLDER + '/' + folder, path)

@app.route('/api/library/index', methods=['POST'])
@oidc.require_login
def get_index_tweet():
    post = request.get_json()
    post['tweet_date'] = datetime.datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')
    post['id'] = str(uuid.uuid4())
    index_tweet(post)
    return jsonify({
        'success': True,
    })

@app.route('/api/library/search', methods=['GET'])
def get_search_tweets():
    q = request.args.get('q')
    results = search_tweets(q)
    j = list(map(lambda r: r, results))
    return jsonify({
        'success': True,
        'results': j,
    })
"""
@app.route('/api/library/delete', methods=['GET'])
def delete(id):
    if oidc.user_loggedin:
        solr.delete(id=id)
        return jsonify({
            'success': True,
            'results': j,
        })
    else:
        return jsonify({ 'success': False })
"""
@app.route('/api/library/auth', methods=['GET'])
@oidc.require_login
def auth():
    return redirect(os.getenv('DLA_LIBRARY_UI_REDIRECT'))

# @app.route('/api/library/oidc_callback')
# @oidc.custom_callback
# def callback(data):
#     logging.info('Submitted Data: %s' % data)
#     return redirect(os.getenv('DLA_LIBRARY_UI_REDIRECT'))

@app.route('/api/library/me', methods=['GET'])
def me():
    if oidc.user_loggedin:
#        userid = info.get('sub')
        return jsonify({
            'success': True,
            'username': oidc.user_getfield('preferred_username'),
            'name': oidc.user_getfield('name'),
            'given_name': oidc.user_getfield('given_name'),
            'family_name': oidc.user_getfield('family_name'),
            'email': oidc.user_getfield('email'),
        })
    else:
        return jsonify({ 'success': False })

@app.route('/api/library/logout')
def logout():
    """Performs local logout by removing the session cookie."""
    oidc.logout()
    return jsonify({ 'success': True })

if __name__ == '__main__':
    logging.info('Server listening on port {} - Browse http://localhost:{}'.format(PORT, PORT))
    app.run(
        host='0.0.0.0',
        port = PORT,
        threaded = True,
        processes = 1,
        )
