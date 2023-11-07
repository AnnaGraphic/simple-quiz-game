const resetButton = document.getElementById('reset-button');
const cards = document.querySelectorAll('.memory-card');
// are any cards already flipped?
let hasCardFlipped = false;
// for a pair of cards
let firstCard, secondCard;

function flipCard() {
  this.classList.add('flip');
  if (!hasCardFlipped) {
    hasCardFlipped = true;
    firstCard = this;
    //console.log(firstCard);
  } else {
    hasCardFlipped = false;
    secondCard = this;
    //console.log(secondCard);
    checkForMatch()
  }
}
// pictures are covered
function unflipCards() {
  console.log('unflip');
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
}, '1500')
}

function lock() {
  // cards stay flipped
  firstCard.removeEventListener('click', flipCard);
  firstCard.removeEventListener('click', flipCard);
}
function checkForMatch() {
  firstCard.dataset.picture === secondCard.dataset.picture ? lock() : unflipCards()
}

cards.forEach(card => card.addEventListener("click", flipCard));
