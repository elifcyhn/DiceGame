const diceImages = document.querySelectorAll('.dice img');

const buton = document.querySelector('.btn');

buton.addEventListener('click', function() {
  diceImages.forEach(img => img.classList.add('roll-animation'));
  
  setTimeout(function() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomDiceImage1 = "dice" + randomNumber1 + ".png";

  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  let randomDiceImage2 = "dice" + randomNumber2 + ".png";

  let randomDiceImageSource1 = "images/" + randomDiceImage1;
  let randomDiceImageSource2 = "images/" + randomDiceImage2;

  document.querySelector(".img1").setAttribute("src", randomDiceImageSource1);
  document.querySelector(".img2").setAttribute("src", randomDiceImageSource2);    
  if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
diceImages.forEach(img => img.classList.remove('roll-animation'));}, 500);});