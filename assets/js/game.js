// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less



var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

// Array of enemy combatants. This array consists of three ARRAY ELEMENTS that are all STRINGS.
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


// 'fight' function EXPRESSION
var fight = function () {
  // Alert users that they are starting the round.
  window.alert("Welcome to Robot Gladiators!");

  // Ask the player if they would even like to participate. 
  // This later determines whether they will be jettisoned from the fight function.
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  console.log(promptFight);


  // If the player responds to the prompt with 'fight' or 'FIGHT'...
  if (promptFight === "fight" || promptFight === "FIGHT") {
    // Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    // In the console, announce the combatants and the enemy combatant's remaining health value.
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );


    // CONTROL FLOW statement example
    // Check the enemy combatant's health. 
    // (if) his health is less than or equal to zero, announce his death. 
    // (else), announce his health value. 
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    }
    else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }


    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );


    // Another CONTROL FLOW statement example
    // Check the player's health. 
    // (if) his health is less than or equal to zero, announce his death. 
    // (else), announce his health value. 
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    }
    else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }


  } else if (promptFight === "skip" || promptFight === "SKIP") {
    // Confirm they would like to skip the fight.
    var confirmSkip = window.confirm("Are you sure you'd like to skip?");

    // If player selects 'Ok' (true), announce their decision to leave.
    if (confirmSkip) {
      window.alert(playerName + " has chosen to skip the fight. Bye, Felicia!");
      // Subtract a value from playerMoney. 
      playerMoney = playerMoney - 2;
    }

    // If player selects 'Cancel' (false), RUN THE >>fight()<< FUNCTION AGAIN.
    else {
      fight();
    }



  } else {
    // If the player does not enter one of the FOUR POSSIBLE OPTIONS (skip/SKIP/fight/FIGHT), prompt them to try again.
    window.alert("You need to pick a valid option. Try again!");

  }



};


// CALL 'fight' function
// fight(); 