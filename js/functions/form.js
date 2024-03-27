export const formResult = (questions) => {
    document.querySelectorAll('.js-test.submited input').forEach(input => {
        input.setAttribute('disabled', true);
        input.classList.add('disabled');
    });
    document.querySelector('.js-test.submited button').remove();
    let i = 0;
    questions.forEach(quest => {
        if(quest.classList.contains('correct')) {
            i++;
            quest.innerHTML += `<span class="btn btn--correct"><span class=""btn__text><img src="images/icons/correct-white.svg">Correct answer</span></span>`;
        } else {
            quest.innerHTML += `<span class="btn btn--incorrect"><span class=""btn__text><img src="images/icons/incorrect-white.svg">Incorrect answer</span></span>`;
        }
    })
    const result = document.querySelector('.result');
    const score = result.querySelector('.points');
    score.innerHTML = `${i} / ${questions.length}`;
    if(i / questions.length >= 0.75) {
        result.classList.add('resolve');
        result.querySelector('.btn .btn__text').innerHTML = 'Back to course';
        result.querySelector('h2 strong').innerHTML = 'Congratulations, you passed!';
    }
    result.classList.remove('d-none');
    result.classList.add('d-flex');
}