let uscore = 0;
let cscore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userscore = document.querySelector("#userscore");
let compscore = document.querySelector("#compscore");

// Status color functions
const showWin = () => {
    msg.style.backgroundColor = "#4CAF50"; // green
    msg.style.color = "white";
    animateMsg();
};

const showLose = () => {
    msg.style.backgroundColor = "#E03131"; // red
    msg.style.color = "white";
    animateMsg();
};

const showTie = () => {
    msg.style.backgroundColor = "#FF9F1C"; // orange
    msg.style.color = "white";
    animateMsg();
};

// Smooth animation effect
function animateMsg() {
    msg.style.transform = "scale(1.1)";
    setTimeout(() => {
        msg.style.transform = "scale(1)";
    }, 150);
}

const compchoice = () => {
    const value = ["rock", "paper", "scissor"];
    const index = Math.floor(Math.random() * 3);
    return value[index];
};

const playgame = (userchoice) => {
    const user = userchoice;
    const computer = compchoice();

    console.log("User choice:", user);
    console.log("Computer choice:", computer);

    if (user === computer) {
        msg.innerText = "MATCH TIE!";
        showTie();
    } 
    else if (user === "rock" && computer === "scissor" ||
             user === "paper" && computer === "rock"   ||
             user === "scissor" && computer === "paper") 
    {
        msg.innerText = "YOU WIN!";
        showWin();
        uscore++;
        userscore.innerText = uscore;
    } 
    else {
        msg.innerText = "YOU LOSE!";
        showLose();
        cscore++;
        compscore.innerText = cscore;
    }
};

choices.forEach((choicee) => {
  choicee.addEventListener("click", () => {
    playgame(choicee.id);
  });
});
