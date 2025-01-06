/*
    Write a function that randomly return Rock, Paper and Cissor
    Create a variable and named randNumber assigned 0 ;
    assign to the variable randNumber a random number between 0 and 2

    Verify if randNumber equal 0 return Rock
    Verify else if randNumber equal 1 return Paper
    Verify else randNumber return Cissor
*/

function getComputerChoice() {
    let randNumber = 0;

        randNumber = Math.floor(Math.random() * 3);
    
        if (randNumber === 0 ) {
            return "Rock";
        } else if (randNumber === 1) {
            return "Paper";
        } else {
            return "Cissor";
        }     
}

alert(getComputerChoice());


