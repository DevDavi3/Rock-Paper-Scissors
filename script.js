 function getComputerChoice()
{
    //create varable to keep the random number
    randNum = Math.random();

    choice = "";

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


