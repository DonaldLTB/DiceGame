/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, diceDouble;

init();
alert("Set final score (10-100)");


document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying) {
        // 1. Random number
    var dice = Math.floor(Math.random()*6)+1;
    var dice2 = Math.floor(Math.random()*6)+1;

    //2. Display the result
    var diceDOM = document.querySelector('.dice');
   diceDOM.style.display= 'block';
   diceDOM.src = 'dice-' +dice+'.png';
   var diceDOM2 = document.querySelector('.dice2');
   diceDOM2.style.display= 'block';
   diceDOM2.src = 'dice-' +dice2+'.png';



    //3. If 2 6's in a row delete entire score, so save previous roll if roll 6. then next player
    // Save the score 6 in a variable
    if (dice===6 && diceDouble===6) {
        scores[activePlayer]=0;

        //User interface update
        document.querySelector('#score-' + activePlayer).textContent = '0';
        nextPlayer();

    }else if (dice!==1 && dice2!==1) {
        // Add score
        roundScore += (dice+dice2); //roundScore=roundScore+dice
        document.querySelector('#current-' + activePlayer).textContent = roundScore;


    }else{
        // Next player plays
        nextPlayer();
    }

    //3. Update the round score IF the rolled number was NOT a 1
       diceDouble=dice;

    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying) {
            // add the current score the global score
    scores[activePlayer] += roundScore;

    //update the user interface
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

    document.querySelector('.button1').addEventListener('click', function(){
        // Selecting the input element and get its value
        //var inputVal = document.getElementById("myInput").value;

        // Displaying the value

    });
    var inputVal = document.getElementById("myInput").value;
    // check if player won the game if over 100points
    if (scores[activePlayer] >= inputVal) {
        document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display= 'none';
        document.querySelector('.dice2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
    // next player
    nextPlayer();
    }

}

});

document.querySelector('.btn-new').addEventListener('click', init);
    // set all values to 0. start with player 1 or random?


    function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    diceDouble=0;
    var inputVal = document.getElementById("myInput").value = 0;

    document.querySelector('.dice').style.display= 'none';
    document.querySelector('.dice2').style.display= 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('name-0').textContent = 'Player1';
    document.getElementById('name-1').textContent = 'Player2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

};



function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore=0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
};





