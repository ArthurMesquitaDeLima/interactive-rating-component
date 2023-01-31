const submit_button = document.querySelector('.submit-button');
const content_1 = document.querySelector('.content-1');
const content_2 = document.querySelector('.content-2');
const rating_button = document.querySelectorAll('.rating-button');
const score = document.querySelector('.score');

submit_button.addEventListener('click', onSubmit);

rating_button.forEach(function(button) {
    button.addEventListener('click', hadleRatingButtonClick);
});

function onSubmit(){
    content_1.classList.add('hide');
    score.textContent = stars_score;
    content_2.classList.remove('hide');
}

function hadleRatingButtonClick(event){
    stars_score = event.target.textContent;

    rating_button.forEach(function(button){
        button.classList.remove('active');
    });

    if(event.target.classList.contains('rating-button')){
        event.target.classList.add('active');
    } else {
        event.target.classList.remove('active');
    }
}
