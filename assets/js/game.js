// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


// Array of enemy combatants. This array consists of three ARRAY ELEMENTS that are all STRINGS.
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


// 'fight' function EXPRESSION
var fight = function (enemyName) {

  // 'while' loop CONTROL FLOW STATEMENT added to assess combatants' health, determining whether the battle should continue.
  while (enemyHealth > 0 && playerHealth > 0) {

    // Alert users that they are starting the round. [Temporarily disabled]
    // window.alert("Welcome to Robot Gladiators!");

    // Ask the player if they would even like to participate. 
    // This later determines whether they will be jettisoned from the fight function.
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "skip" || promptFight === "SKIP") {
      // Confirm they would like to skip the fight.
      var confirmSkip = window.confirm("Are you sure you'd like to skip?");

      // If player selects 'Ok' (true), announce their decision to leave.
      if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight. Bye, Felicia!");
        // Subtract a value from playerMoney. 
        playerMoney = playerMoney - 10;
        // Output the string "playerMoney" in addition to the current value of the player's money. (Gee, that's not confusing.)
        console.log("playerMoney", playerMoney);
        break;
      }

      // If player selects 'Cancel' (false), RUN THE >>fight()<< FUNCTION AGAIN.
      else {
        fight();
      }
    }

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
        // "Break" out of (i.e., exit) the loop once this condition is fulfilled.
        // Note: BREAK statements must always be positioned at the bottom of a condition code block, lest they prevent a code block from executing.
        break;
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
        // "Break" out of (i.e., exit) the loop once this condition is fulfilled.
        // Note: BREAK statements must always be positioned at the bottom of a condition code block, lest they prevent a code block from executing.
        break;
      }
      else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }


    } else {
      // If the player does not enter one of the FOUR POSSIBLE OPTIONS (skip/SKIP/fight/FIGHT), prompt them to try again.
      window.alert("You need to pick a valid option. Try again!");

    }
  }

};

// This 'for' loop REPLACES THE ORIGINAL fight() FUNCTION CALL, allowing us to trigger the "fight" once for each element in enemyNames ARRAY.
for (var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(enemyNames[i]);
}