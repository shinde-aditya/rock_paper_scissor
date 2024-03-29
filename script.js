const images = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg");
const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#com-score");
const draw_score = document.querySelector("#draw-score");
var user =0;
var comp = 0;
var draw = 0;

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() *3 );
    return options[randIdx];

};

const drawGame = () =>{
    draw++;
    console.log("Game was draw.");
    msg.innerText="Game is draw.Plain again!!!";
    draw_score.innerText = draw;
}

const showWinner = (userWin) =>{
if(userWin){
    user++;
    console.log("You win!!!");
    msg.innerText="You Win!!!";
    console.log("user=", user);
    user_score.innerText=user;
}
else{
    comp++;
    console.log("You lose!!!");
    msg.innerText="You lose!!!";
    console.log("Comp=", comp);
    comp_score.innerText= comp;
}
}

const playGame = (userChoice) =>{
    console.log("user choice = ",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice === compChoice)
    {
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "scissors" ? false:true; 
        }
        showWinner(userWin);
    }
}


images.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
     })
})