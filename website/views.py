from flask import request, jsonify, render_template

from . import app


def get_grandpy_answer(user_input):
    # ...
    return {
        "error": False,
        "grandpy-answer": "Voilà l'adresse...",
        "address": {
            "address": "Chemin de rosier 425, Quelque part",
            "latitude": 50.0,
            "longitude": 50.0,
        },
        "article": {
            "intro": "Au fait, voici une petite anecdote au sujet du lieu demandé",
            "title": "Un super article",
            "url": "http://...",
        },
    }


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/ajax/')
def ajax():
    # ... je récupère les données
    question = request.args.get('question')
    print(question)
    response = get_grandpy_answer(question)
    print(response)
    return jsonify(response)