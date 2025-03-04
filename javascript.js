
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
    
    let winner = '';
    let winCond = compChoice+humanChoice;
    if(compChoice == humanChoice){  //in case of tie
        return 'Tie';
    }if (winCond == 'rockscissors'||winCond == 'scissorspaper'||winCond == 'paperrock') { //determine loss possibiliteis
        return 'Computer'; // in case of loss
    } else {
        return 'Human'; // in case of win
    }
}

let compAnswer = ''//initialize computer response
let humanAnswer = ''//initialize human response
let compScore = 0; //initialize computer score
let humanScore = 0; //initialize human score
let winner = ""//initialize winner
// make them edit instead of create
//edit p element and store in const compPlays
const compPlays = document.querySelector(".compPlays");
//edit p element and store in const result
const result = document.querySelector(".result");
//edit p element and store in const score
const score = document.querySelector(".score");

//create constant representing the node list
const buttons = document.querySelectorAll("button");

//add event listener to start the round
buttons.forEach((button) => { //iterate through each button
    button.addEventListener("click", function (e) {
        //get human answer from button data
        humanAnswer = e.target.id;
        compAnswer = getComputerChoice();//computer var asks the function

        //add text into the compPlays element
        compPlays.textContent = 'Computer plays '+ compAnswer;

        winner = playRound(compAnswer, humanAnswer);//variables go head to head
    
        if (winner == 'Computer') {
        compScore++;
        //add text into the result element
        result.textContent = winner+' won the round';
         } if (winner == 'Human') {
        humanScore++;
        //add text into the result element
        result.textContent = winner+' won the round';
         } else {
        //add text into the result element
        result.textContent = 'Nobody won!';
         }
         
         //add text into the score element
        score.textContent = 'PC: ' + compScore + '| You: ' + humanScore;
    });
});
    
    
