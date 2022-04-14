const voteButtons = document.querySelectorAll('.vote');

let voteResult = ''

voteButtons.forEach((button, idx) => {
  button.addEventListener('click', () => {
    removeClasses()
    button.classList.add('marked')
    voteResult = `You selected ${idx + 1} out of 5`
    document.querySelector('.vote-result').insertAdjacentHTML('beforeend', voteResult);
  })
});

function removeClasses() {
  voteButtons.forEach(button => {
    button.classList.remove('marked')
  })
}

const cardRating = document.querySelector('.card-rating');
const cardThanks = document.querySelector('.card-thanks');
const buttonSubmit = document.querySelector('.btn-submit');

buttonSubmit.addEventListener('click', () => {
  cardRating.classList.add('hide')
  cardThanks.classList.remove('hide')
})