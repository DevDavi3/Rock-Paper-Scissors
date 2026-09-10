 const buttons = document.querySelectorAll('button');
 const result = document.querySelector('.result')
 
 
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
    result.append("Computer :" + choice)
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
        result.append("Human :" + humanChoice + "\n");

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
     result.textContent = "";

    
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

    const compScore = document.createElement('h3');
    compScore.textContent = "Computer Scored: " + computerScore

    const humScore = document.createElement('h3');
    humScore.textContent = "Human Scored: " + humanScore
    const choices = document.createElement('p');
    choices.textContent = `Human: ${humanChoice} | Computer: ${computerChoice}`;


    result.appendChild(humScore);
    result.appendChild(compScore);
    const win = document.createElement('h6')
    win.textContent = winner

    result.append(win);
    result.append(choices);
    
}


buttons.forEach(button=>{
    button.addEventListener('click', (e)=>{
        playRound(getHumanChoice(Number(button.value)),getComputerChoice());
        if (computerScore == 5 || humanScore == 5)
        {
            alert(getOverAllWinner(humanScore,computerScore))
            humanScore = 0;
            computerScore = 0;
            result.textContent = "";

        }       
    });
})

function getOverAllWinner(humanScore,computerScore)
{
    if (humanScore === 5)
    {
        return "human wins";

    }
    else if (computerScore == 5 )
        return "Computer wins"
    
        

}

