// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots


//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

function promptUser() {
  let promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
  if (promptFight === "" || promptFight === null) {
    window.alert("You didn't enter a valid choice, try again!");
    // use return to call it again and stop the rest of this function from running

    // This will return the function if the user needs to try again
    return promptUser();
  }

  promptFight = promptFight.toLowerCase();

  if (promptFight === "skip") {
    // confirm user wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping, but don't let them go into the negative
      playerMoney = Math.max(0, playerMoney - 10);
      // stop while() loop using break; and enter next fight

      // return true if user wants to leave
      return true;
    }
  }
  return false;
};


var fight = function (enemyName) {
  // repeat and execute as long as the enemy robot is alive 
  while (enemyHealth > 0 && playerHealth > 0) {

    if (promptUser()) {
      // if true, leave fight by breaking loop
      break;
    }
    enemyHealth = enemyHealth - playerAttack
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    playerHealth = playerHealth - enemyAttack;

    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    )

  }
}

for(var i = 0; i < enemyNames.length; i++) {
  console.log(enemyNames[i]);
  console.log(i);
  console.log(enemyNames[i] + " is at " + i + " index");
}

// for (var i = 0; i < enemyNames.length; i++) {
//   var pickedEnemyName = enemyNames[i];
//   enemyHealth = 50;
//   fight(pickedEnemyName);
// }


//If player chooses to fight, then...
//   if (promptFight === "fight" || promptFight === "FIGHT") {
//     // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
//     enemyHealth = enemyHealth - playerAttack;
//     // Log a resulting message to the console so we know that it worked.
//     console.log(
//       playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
//     );
//     // Check enemy's health.
//     if (enemyHealth <= 0) {
//       window.alert(enemyName + " has died!");
//       break;
//     } else {
//       window.alert(enemyName + " still has " + enemyHealth + " health left.");
//     }

//     playerHealth = playerHealth - enemyAttack;

//     console.log(
//       enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
//     )

//     // Check player's health.
//     if (playerHealth <= 0) {
//       window.alert(playerName + " has died!");
//       break;
//     } else {
//       window.alert(playerName + " still has " + playerHealth + " health left.");
//     }

//     // If player choses to skip, confirm and then stop the loop.
//     if (promptFight === "skip" || promptFight === "SKIP") {
//       // Confirm user wants to skip.
//       var confirmSkip = window.confirm("Are you sure you'd like to quit?")

//       // If yes (true), leave fight.
//       if (confirmSkip) {
//         window.alert(playerName + " has decided to skip this fight. Goodbye!");
//         // Subtract money from playerMoney for skipping
//         playerMoney = playerMoney - 10;
//         console.log("playerMoney", playerMoney);
//         break;
//       } else {
//         fight();
//       }

//     }

//   };
// }
