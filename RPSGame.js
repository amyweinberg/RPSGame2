
var player1 = "Amy";
var player2 = "Latori";
var player1Wins = 0;
var player2Wins = 0;

var weapons = ['rock' , 'paper' , 'scissors'];

while (player1Wins < 3 && player2Wins < 3) {

  var player1Hand = weapons[parseInt(Math.random()*weapons.length) %3];
  var player2Hand = weapons[parseInt(Math.random()*weapons.length) %3];

  console.log(player1 + "'s hand this round is " + player1Hand);
  console.log(player2 + "'s hand this round is " + player2Hand);


  if(player1Hand === 'rock' && player2Hand === 'paper') {

      player2Wins = player2Wins + 1;
      console.log(player2 + " wins!");

  } else if(player1Hand === 'rock' && player2Hand === 'scissors') {

      player1Wins = player1Wins + 1;
      console.log(player1 + " wins!");

   } else if(player1Hand === 'paper' && player2Hand === 'rock') {

      player1Wins = player1Wins + 1;
      console.log(player1 + " wins!");

   } else if (player1Hand === 'paper' && player2Hand === 'scissors') {

      player2Wins = player2Wins + 1;
      console.log(player2 + " wins!");

   } else if(player1Hand === 'scissors' && player2Hand === 'rock') {

      player2Wins = player2Wins + 1;
      console.log(player2 + " wins!");

   } else if(player1Hand === 'scissors' && player2Hand === 'paper')
   {

      player1Wins = player1Wins + 1
      console.log(player1 + " wins!");

   } else {

     console.log("This is a tie!");
   }
}

if(player1Wins === 3) {

  console.log(player1 + " is the winner!");

} else {

  console.log(player2 + " is the winner!");
}
