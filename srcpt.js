let boxes = document.querySelectorAll('.box');
let resetBTN = document.getElementById("reset");
let newGameBTN = document.getElementById("new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.getElementById("msg");


let turnO = true;

let arr = ["apple", "banana", "mango"];

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach(box => {
    box.addEventListener("click", () =>{
        // console.log("Yeah uh clicked!");
if (turnO) {
    box.innerText = "O";
    box.style.color = "#00000fff";
    turnO = false;
} else {
    box.innerText = "X";
    box.style.color = "#000000ff";
    turnO = true;
}
    box.disabled = true;

    checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
msg.innerText = `\u{1F389} Congratulations! Winner is ${winner} \u{1F389}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for(pattern of winPatterns
    ){
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;
        if(position1 != "" && position2 != "" && position3 != ""){  
            if(position1 == position2 && position2 == position3){
                // console.log("winner!" , position1);
                // alert("Winner!" , position1);
                showWinner(`(${position1})`);
            }
        }
    }
};

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

newGameBTN.addEventListener("click", resetGame);
resetBTN.addEventListener("click", resetGame);