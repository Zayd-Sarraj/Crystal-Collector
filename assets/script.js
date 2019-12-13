var scoreGoal = 0
var playerScore = 0
var wins = 0
var losses = 0
var gems = [$("#blue-gem"), $("#red-gem"), $("#green-gem"), $("#purple-gem")]
// Game starts on page load 
// function to set score goal 
function setGoal() {
    // value will be set to a number between 19 and 120, then update the div text
    scoreGoal = Math.round((Math.random() * 100) + 19)
    $("#points-goal").text("Goal: " + scoreGoal);
}
// Set Score Goal
setGoal()
// function to set crystal values 
function setCrystals() {
    // make an empty array to fill the number values with
    var gemNumbers = []
    // Nested function to keep checking if a gem already has the number
    function makeNumbersGems() {
        // set a new variable to a value between 1 and 12
        var gemValue = Math.ceil(Math.random() * 12)
        // check if it is already in the array
        if (gemNumbers.includes(gemValue) === false) {
            // if it's not, add it to the array and set it as an attribute to the gem
            gemNumbers.push(gemValue)
            $(gems[i][0]).attr("data-gemvalue", gemValue);
            // else, repeat the function before moving on
        } else { makeNumbersGems() }
    }
    //  for each gem in the array
    for (var i = 0; i < gems.length; i++) {
        // Use the function! This will ensure unique numbers for each gem
        makeNumbersGems()
    }
}
// Set Crystal Values
setCrystals()
// event listener for images clicked
$("img").click(function () {
    // Get the value of this gem
    var addValue = $(this).attr("data-gemvalue")
    // Make the value an integer and add it to the player's score, then update the div text
    playerScore = playerScore + parseInt(addValue)
    $("#player-score").text("Your Score: " + playerScore)
    // Wait a just a tiny moment before checking if the score is accurate(so that the html can be updated first)
    setTimeout(checkScore, 10);
});
// reset game function
function resetGame() {
    playerScore = 0;
    $("#player-score").text("Your Score: " + playerScore)
    setGoal();
    setCrystals();
}
// function to check if the user has won or lost
function checkScore() {
    // if the player's score goes over the goal
    if (playerScore > scoreGoal) {
        // Add a loss, updated the losses div, let the user know they lost, and restart the game
        losses++;
        $("#losses").text("Losses: " + losses);
        alert("You've gone too far, try again!");
        resetGame();
    } else if (playerScore === scoreGoal) {
        // else if the score equals the goal, add a win, update the wins div, let the user know they won, and restart the game
        wins++;
        $("#wins").text("Wins: " + wins);
        alert("You're a math genius!");
        resetGame();
    }
}

