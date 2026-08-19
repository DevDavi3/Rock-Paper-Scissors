 function getComputerChoice()
{
    //create varable to keep the random number
    let randNum = Math.random();

    let choice = "";

    //check  for random number and ssign choice accordng to the random number
    if (randNum <= 0.333)
    {
        choice = "Paper";
    }
    else if (randNum > 0.333 && randNum  <= 0.666 )
    {
        choice = "Scissor";
    }
    else
    {
        choice = "Rock";
    }
    console.log("Computer :" + choice)
    return choice;

}


function getHumanChoice()
{
    // get prayer choice in form of number 
    let number = parseInt(prompt("Enter Enter Number 1->rock, 2->paper, 3->scissor"));
    let humanChoice = "";
    //check if the nmber is from 1-3
    if (number > 0 && number <= 3)
    {
        //assign the number to actual choices
        if (number === 1)
        {
            humanChoice = "Rock";
        }
        else if(number === 2)
        {
            humanChoice = "Paper";
        }
        else
        {
            humanChoice = "Scissor";
        }
        console.log("Human :" + humanChoice);

        return humanChoice;

    }
    else
    {
        humanChoice = "Invalid input";
        return humanChoice;
    }
    
    
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice)
{
    let winner = ""
    //determin the winner
    if (humanChoice === computerChoice)
    {
        winner = "Its a draw"
    }
    else if(computerChoice === "Rock" && humanChoice === "Paper")
    {
        winner = "Human Wins"
        humanScore++;
    }
    else if(computerChoice === "Paper" && humanChoice === "Rock")
    {
        winner = "Computer Wins"
        computerScore++;
    }

    else if(computerChoice === "Scissor" && humanChoice === "Paper")
    {
        winner = "Computer Wins"
        computerScore++;
    }
    else if(computerChoice === "Paper" && humanChoice === "Scissor")
    {
        winner = "Human Wins"
        humanScore++;
    }

    else if(computerChoice === "Rock" && humanChoice === "Scissor")
    {
        winner = "Computer Wins"
        computerScore++;
    }
    else if(computerChoice === "Scissor" && humanChoice === "Rock")
    {
        winner = "Human Wins"
        humanScore++;
    }
    return winner;
}

console.log(playRound(getHumanChoice(),getComputerChoice()));


console.log(humanScore);
console.log(computerScore);



