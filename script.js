let score = 20;
let hightscore = 0;
const number = Math.trunc(Math.random() * 20) + 1;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if(!guess) {
        displayMessage('No number');
    }else if (guess === number) {
        displayMessage('Correct Number');
        document.querySelector('.number').textContent = guess;

        document.querySelector('body').style.backgroundColor = '#60b347';

        if(score > hightscore) {
            hightscore = score;
            document.querySelector('.highscore').textContent = hightscore;
        }
    }else if (guess !== number) {
        if(score > 1) {
            displayMessage(guess > number ? 'Too High' : 'Too Low');
            score --;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
})