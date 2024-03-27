import { courseConnectDisplay, courseTestSubmit } from "./api/api.js";

const jsTest = document.querySelector('.js-test');
const formSubmit = document.querySelector(".js-test-submit");

if(jsTest) {
    courseConnectDisplay(jsTest.dataset.id, jsTest.querySelector('.questions'));
}

jsTest.addEventListener('submit', (e) => {
    e.preventDefault();
});

const isAlertShowed = () => {
    document.body.classList.toggle('lock');
    document.getElementById('alert').classList.toggle('d-flex');
    document.getElementById('alert').classList.toggle('d-none');
}

document.querySelector('.js-alert-off').addEventListener('click', isAlertShowed);

formSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const questions = jsTest.querySelectorAll('.question');
    const answers = jsTest.querySelectorAll('input:checked');

    answers.forEach(answer => answer.classList.add('active'));

    if(questions.length != answers.length) {
        isAlertShowed();
    } else {
        courseTestSubmit(jsTest.dataset.id, questions, answers);
    }
})
