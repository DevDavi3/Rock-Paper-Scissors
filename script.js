 //get all buttons
 const buttons = document.querySelectorAll('button');
 //for each looking for all the value in the buttons
 //on click and we run player selection
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


function getHumanChoice(number)
{
   
    
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
    console.log(winner);
    return winner;
}

buttons.forEach(button=>{
    button.addEventListener('click', (e)=>{
        playRound(getHumanChoice(Number(button.value)),getComputerChoice())
    });
})
//playRound(getHumanChoice,getComputerChoice);
// function playGame()
// {
//     for (let i=0; i<5; i++)
//     {
//         let humanSelection = getHumanChoice();
//         let ComputerSelection = getComputerChoice();
//         playRound(humanSelection,ComputerSelection);
//     }
//     if(humanScore > computerScore)
//     {
//         return "The over all Winner is the Human";
//     }
//     else
//         return "The Computer wins"
// }

// console.log(playGame());



