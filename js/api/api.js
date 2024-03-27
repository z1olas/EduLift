import { formResult } from "../functions/form.js";

export const courseConnectDisplay = (testId, form) => {
    fetch('data/courses.json')
    .then((response) => {
        if (!response.ok) {
            throw new Error
                (`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((course) => {
        if(course.quiz.id === testId) {
            course.quiz.questions.forEach(question => {
                const questionHtmlTop = `
                <div class="question" id="question-${question.id}" data-qnum='${question.id}'>
                    <h2 class="h4 d-flex">${question.id}. ${question.question}<span class="point">0 / 1 point</span></h2>
                `;
                let questionHtmlContent = ``;
                question.answers.forEach(answer => {
                    questionHtmlContent += `
                    <label for="${answer.id}" class="d-flex">
                        <input required type="radio" name="${question.question}" id="${answer.id}">
                        <p class="text text-lg d-flex align-items-center"><span class="check d-flex justify-content-center align-items-center"><span class="dot"></span></span>${answer.text}</p>
                    </label>`;
                });
                const questionHtmlBottom = '</div>';

                const questionHtml = questionHtmlTop + questionHtmlContent + questionHtmlBottom;
                form.innerHTML += questionHtml;
            })
        }
    })
    .catch((error) => console.error("Unable to fetch data:", error));
}

export const courseTestSubmit = (testId, questions, answers) => {
    fetch('data/courses.json')
    .then((response) => {
        if (!response.ok) {
            throw new Error
                (`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((course) => {
        if(course.quiz.id === testId) {
            answers.forEach(answer => {
                const questionNumber = Number(answer.closest('.question').dataset.qnum);
                const answerId = answer.id;
                course.quiz.questions[questionNumber - 1].answers.forEach(ans => {
                    if(ans.isCorrect) {
                        if(ans.id === answerId) {
                            questions[questionNumber - 1].classList.add('correct');
                            questions[questionNumber - 1].querySelector('.point').innerHTML = '1 / 1 point';
                        } else {
                            questions[questionNumber - 1].classList.add('incorrect');
                        }
                    }
                });
            })
            document.querySelector('.js-test').classList.add('submited');
            formResult(questions);
        }
    })
}
