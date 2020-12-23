/**
 * docstring
 */
function appendUserQuestion(question) {
    console.log(question);
    // const userQuestionDiv = document.createElement('div');
    // userQuestionDiv.classList.add('user-question');
    // const userQuestionContent = document.createElement('p');
    // userQuestionContent.classList.add('user-question-content');
    // const userQuestionText = document.createTextNode(question)
    // userQuestionContent.appendChild(userQuestionText);
    // userQuestionDiv.appendChild(userQuestionContent);
    // const chatbox = document.querySelector('#chatbox');
    // chatbox.appendChild(userQuestionDiv);
}


function appendGrandpyResponse(data) {
    console.log(data);
}

const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();

    const data = new FormData(form);
    const params = new URLSearchParams(data)
    const question = data.get('question');

    fetch(`/ajax/?${params}`)
    .then(response => response.json())
    .then(data => {
        //Ajouter la question de l'utilisateur dans le chatbox
        appendUserQuestion(question);
        appendGrandpyResponse(data);
    })
})