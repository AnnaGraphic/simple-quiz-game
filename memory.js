// make a memory game - what functions are needed:
// funktion flip
// function unflip
// function checkForMatch

const cards = document.querySelectorAll('.memory-card');

let hasCardFlipped = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.add('flip');
  if (!hasCardFlipped) {
    hasCardFlipped = true;
    firstCard = this;
    console.log(firstCard);
  } else {
    hasCardFlipped = false;
    secondCard = this;
    console.log(secondCard);
    checkForMatch()
  }
}
function unflipCards(){
  // remove classlist('flip')
}

function lock(){
  // cards bleiben aufgedeckt
}
function checkForMatch (){
  // firtstCard.dataset.picture === secondCard.dataset.picture ? lock : unflipCards
}

cards.forEach(card => card.addEventListener("click", flipCard))
