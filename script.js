// going to build a rps game against the computer. in order to do so, 
    // we need to get the computers selection, compare it to our selection to see who wins
    // keep track of who is winning. first one to five wins

    // ******** DOM MANIPULATION ********
    
    // we are going to create buttons, give them their appropriate class names,
    // style them as needed, add text, id, place them on the dom
    const rockButton = document.querySelector("#rockButton");
    const paperButton = document.querySelector("#paperButton");
    const scissorsButton = document.querySelector("#scissorsButton");

    const results = document.querySelector(".results");

    const buttons = [rockButton, paperButton, scissorsButton];
    const p = document.createElement("p");
    p.style.whiteSpace = "pre";
    // SELECT OUR DOM ELEMENTS FROM HTML PAGE
    const body = document.querySelector(".body");

    // add Event Listeners to our buttons
    buttons.forEach((button) =>{
        button.addEventListener('click', () => {
        let userPick = button.textContent;

         console.log("Button Clicked!");
         playRound(userPick, getComputerChoice());
        });
    })
    

   
    // add button to dom
    
    // get computer selection
        // 3 choices rock, paper, scissors
        // needs to be random and you will need to return the choice
    function getComputerChoice() {
        // put choices in an array, have computer pick from those choices
        let choices = ["ROCK", "PAPER", "SCISSORS"];
        // randomly select one of the choices
        let choice = choices[Math.floor(Math.random()*choices.length)];
        return choice;
    }

    function checkScore (userWinCount, computerWinCount) {
        if(userWinCount == 5) {
            p.textContent += "\r\nUser wins the match!";
            throw new Error("Game over!");
;
        } else if (computerWinCount == 5){
            p.textContent += "\r\nComputer wins the match!";
            throw new Error("Game over!");
        }
    }
    // get the choice from the player
    let userChoice;

    //games won
    let userWinCount = 0;
    let computerWinCount = 0;
    let tiesCount = 0;

        // display results function 
        function displayResults(userWinCount, computerWinCount, winner, user, computer) {
            if (winner == "User"){
                p.textContent = "You win!";
                p.textContent += '\r\n';
                p.textContent +=`You selected ${user}, and computer chose ${computer}. \r\n`;
                p.textContent += `User Wins: ${userWinCount}. Computer Wins: ${computerWinCount}.`;
            } else if (winner == "Computer"){
                p.textContent = "Computer wins!";
                p.textContent += '\r\n';
                p.textContent +=`You selected ${user}, and computer chose ${computer}. \r\n`;
                p.textContent += `User Wins: ${userWinCount}. Computer Wins: ${computerWinCount}.`;
            } else if (winner == "Tie"){
                p.textContent = `It's a tie! You both picked ${user} please try again! \r\n`;
                p.textContent += `User Wins: ${userWinCount}. Computer Wins: ${computerWinCount}.`;
            }
            results.appendChild(p);
    }   
    // play a round and return the winner.
    function playRound(user, computer){
        let winner;
        if (user === "ROCK" && computer === "SCISSORS"){
            winner = "User";
            userWinCount++;
            displayResults(userWinCount, computerWinCount, winner, user, computer);
            checkScore(userWinCount, computerWinCount);
        } else if         
        (user === "ROCK" && computer === "ROCK"){
            tiesCount++;
            winner = "Tie";
            displayResults(userWinCount, computerWinCount, winner, user, computer);
        } else if 
        (user === "ROCK" && computer === "PAPER") {
            computerWinCount++;
            winner = "Computer";
            displayResults(userWinCount, computerWinCount, winner, user, computer);
            checkScore(userWinCount, computerWinCount);
        }
        else if 
        (user === "PAPER" && computer === "SCISSORS"){
            computerWinCount++;
            winner = "Computer";
            displayResults(userWinCount, computerWinCount, winner, user, computer);
            checkScore(userWinCount, computerWinCount);
        } else if         
        (user === "PAPER" && computer === "ROCK"){
            userWinCount++;
            winner = "User";
            displayResults(userWinCount, computerWinCount, winner, user, computer);
            checkScore(userWinCount, computerWinCount);
        } else if 
        (user === "PAPER" && computer === "PAPER") {
            tiesCount++;
            winner = "Tie";
            displayResults(userWinCount, computerWinCount, winner, user, computer);
            checkScore(userWinCount, computerWinCount);
        }
        else if 
        (user === "SCISSORS" && computer === "SCISSORS"){
            tiesCount++;
            winner = "Tie";
            displayResults(userWinCount, computerWinCount, winner, user, computer);
        } else if         
        (user === "SCISSORS" && computer === "ROCK"){
            computerWinCount++;
            winner = "Computer";
            displayResults(userWinCount, computerWinCount, winner, user, computer);
            checkScore(userWinCount, computerWinCount);
        } else if 
        (user === "SCISSORS" && computer === "PAPER") {
            userWinCount++;
            winner = "User";
            displayResults(userWinCount, computerWinCount, winner, user, computer);
            checkScore(userWinCount, computerWinCount);
        }
    }
    