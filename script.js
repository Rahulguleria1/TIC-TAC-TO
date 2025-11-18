let boxes = document.querySelectorAll('.box');
let resetButton = document.getElementById('reset');

let turnX = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
 
boxes.forEach((box) => 
    box.addEventListener('click', () => {
        console.log('Box was clicked');
        if (turnX) {
            box.innerText = 'X';
            turnX = false;
        } else {
            box.innerText = 'O';
            turnX = true;
              }
        box.disabled = true;
         checkWin();
       }    )

 );
  
 const checkWin = () => {
    let board = Array.from(boxes).map(box => box.innerText);
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            alert(`Player ${board[a]} wins!`);
            resetGame();
            return;
        }
    }
}

const resetGame = () => {
    boxes.forEach(box => {
        box.innerText = '';
        box.disabled = false;
    });
    turnX = true;
}
resetButton.addEventListener('click', resetGame);

const startButton = document.getElementById('start');
const winnerDiv = document.querySelector('.WINNER');

startButton.addEventListener('click', () => {
    winnerDiv.style.display = 'none';
    resetGame();
});
winnerDiv.style.display = 'none';
function showWinnerHidden() {
    winnerDiv.style.display = 'block';
}
function hideWinnerHidden() {
    winnerDiv.style.display = 'none';
}
