
var player1 = "Amy";
var player2 = "Latori";
var player1Wins = 0;
var player2Wins = 0;
var NUMBER_WINS = 3

var weapons = ['rock' , 'paper' , 'scissors'];

//while (player1Wins < NUMBER_WINS && player2Wins < NUMBER_WINS) {

  var player1Hand = weapons[parseInt(Math.random()*weapons.length) %3];
  var player2Hand = weapons[parseInt(Math.random()*weapons.length) %3];

  console.log(player1 + "'s hand this round is " + player1Hand);
  console.log(player2 + "'s hand this round is " + player2Hand);


      if(player1Hand === 'rock') {

        if(player2Hand === 'paper') {

          player2Wins = player2Wins + 1;
          console.log(player2 + " wins!");

        } else if (player2Hand === 'scissors') {

            player1Wins = player1Wins + 1;
            console.log(player1 + " wins!");

        } else if(player1Hand === 'paper') {

          if(player2Hand === 'rock') {

            player1Wins = player1Wins + 1;
            console.log(player1 + " wins!");

        } else if(player2 === 'scissors') {

          player2Wins = player2Wins + 1;
          console.log(player2 + " wins!");
        }

      }
    }
//
//         if(player1Hand === 'scissors') {
//
//           if(player2Hand === 'rock') {
//
//             player2Wins = player2Wins + 1;
//             console.log(player2 + " wins!");
//
//           } else if (player2Hand === 'paper') {
//
//             player1Wins = player1Wins + 1
//             console.log(player1 + " wins!");
//
//           }
//         } else console.log("This is a tie!");
// }

//   if(player1Hand === 'rock' && player2Hand === 'paper') {
//
//       player2Wins = player2Wins + 1;
//       console.log(player2 + " wins!");
//
//   } else if(player1Hand === 'rock' && player2Hand === 'scissors') {
//
//       player1Wins = player1Wins + 1;
//       console.log(player1 + " wins!");
//
//    } else if(player1Hand === 'paper' && player2Hand === 'rock') {
//
//       player1Wins = player1Wins + 1;
//     console.log(player1 + " wins!");
//
//    } else if (player1Hand === 'paper' && player2Hand === 'scissors') {
//
//       player2Wins = player2Wins + 1;
//       console.log(player2 + " wins!");
//
//    } else if(player1Hand === 'scissors' && player2Hand === 'rock') {
//
//       player2Wins = player2Wins + 1;
//       console.log(player2 + " wins!");
//
//    } else if(player1Hand === 'scissors' && player2Hand === 'paper')
//    {
//
//       player1Wins = player1Wins + 1
//       console.log(player1 + " wins!");
//
//    } else {
//
//      console.log("This is a tie!");
//    }
// }
//
// if(player1Wins === NUMBER_WINS) {
//
//   console.log(player1 + " is the winner!");
//
// } else {
//
//   console.log(player2 + " is the winner!");
// }
