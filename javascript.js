
function getComputerChoice(){ //for computer choice
    let ran = Math.random() * 3; //chose a number from 0-2
    console.log(ran);
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
            return answer;
        }
    }
}
function playRound(compAnswer, humanAnswer){ //start of the round
    let compAnswer = getComputerChoice(); //get comp answer
    let humanAnswer = getHumanChoice(); //get human answer
    let winner = '';
    if(compAnswer == humanAnswer){  //in case of tie

    }    
    //return winner

}


console.log(compAnswer); //display computer answer

console.log(humanAnswer); // display human answer

let compScore = 0; //initialize computer score
let humanScore = 0; //initialize human score

for(let i = 0; i < 5; i++){ //game runs for 5 rounds
    
}

if(compScore < humanScore){
    console.log('You win!');

}if (compScore > humanScore) {
    console.log('You lose!');

} else {
    console.log('You tied!');
    
}

