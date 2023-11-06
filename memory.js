// make a memory game - what functions are needed:
// funktion flip
// function unflip
// function checkForMatch

const cards = document.querySelectorAll('.memory-card');

let hasCardFlipped = false;
let firstCard, secondCard;

function flipCard() {
  //add classList('flip')
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
