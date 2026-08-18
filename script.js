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

    return choice;

}

console.log(getComputerChoice());

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

        return humanChoice;

    }
    else
    {
        humanChoice = "Invalid input";
        return humanChoice;
    }
    
    
}

console.log(getHumanChoice());


