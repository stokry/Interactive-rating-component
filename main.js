const btn_submit = document.querySelector('.btn-submit');
const card_content_before = document.querySelector('.card-content-before');
const card_content_after = document.querySelector('.card-content-after');
const btnRating = document.querySelectorAll('.btn-rating');
const score = document.querySelector('.score');
let stars_score = 5;


btn_submit.addEventListener('click', onSubmit);
btnRating.forEach(btn => {
    btn.addEventListener('click', handleRating);
});

function onSubmit() {
    card_content_before.classList.add('hide');
    score.textContent = stars_score;
    card_content_after.classList.remove('hide');

}

function handleRating(event) {
    btnRating.forEach(btn => {
        btn.classList.remove('active');
    });


    if (event.target.classList.contains('btn-rating')) {
        event.target.classList.add('active');
    } else {
        event.target.parentElement.classList.add('active');
    }

    stars_score = event.target.textContent;

}

