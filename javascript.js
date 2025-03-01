
function getComputerChoice(){ //for computer choice
    let ran = Math.random() * 3; //chose a number from 0-2
    if(ran <= 1) {
        return 'rock'; //if ran is 0 return rock
    } if (ran <=2){
        return 'paper'; //if ran is 1 return paper
    } if (ran <= 3){
        return 'scissors'; //if ran is 2 return scissors
    }
        
}
function getHumanChoice(){ //the players' choice
    let answer = ''//generate blank answer for loop
    while(answer !== 'rock' || answer !== 'paper' || answer !== 'scissors'){
        answer = prompt('Rock, paper, or scissors?'); //ask for input & define var
        answer = answer.toLowerCase(); //convert input to lowercase for condition
        if (answer == 'rock' || answer == 'paper' || answer == 'scissors'){
            return answer;// leave the loop & function
        }
    }
}
function playRound(compChoice, humanChoice){ //start of the round
    compChoice = getComputerChoice(); //get comp answer
    humanChoice = getHumanChoice(); //get human answer
    console.log('Computer plays '+ compChoice);//reply comp answer
    console.log('Human plays '+ humanChoice);//reply human answer
    let winner = '';
    let winCond = compChoice+humanChoice;
    if(compChoice == humanChoice){  //in case of tie
        return 'Tie';
    }if (winCond == 'rockscissors'||winCond == 'scissorspaper'||winCond == 'paperrock') { //determine loss possibiliteis
        return 'Computer'; // in case of loss
    } else {
        return 'Human'; // in case of win
    }
    //return winner

}


// console.log(compAnswer); //display computer answer

// console.log(humanAnswer); // display human answer
let compAnswer = ''//initialize computer response
let humanAnswer = ''//initialize human response
let compScore = 0; //initialize computer score
let humanScore = 0; //initialize human score
let winner = ""//initialize winner

for(let i = 0; i < 5; i++){ //game runs for 5 rounds
    
    // compAnswer = getComputerChoice();//computer var asks the function
    // humanAnswer = getHumanChoice();//human var asks the function
    winner = playRound(compAnswer, humanAnswer);//variables go head to head
    
    if (winner == 'Computer') {
        compScore++;
        console.log(winner+' won the round');//display round winner
    } if (winner == 'Human') {
        humanScore++;
        console.log(winner+' won the round');//display round winner
    } else {
        console.log('Nobody Won!');
    }
    console.log ('PC: ' + compScore + '| You: ' + humanScore); //announces scores
}

if(compScore < humanScore){ 
    console.log('You win!'); // announce winner

}if (compScore > humanScore) {
    console.log('You lose!');

}
if (compScore == humanScore){
   console.log('You tied!');
    
}

