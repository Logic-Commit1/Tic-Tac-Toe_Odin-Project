const Gameboard = (() => {
    let gameBoard = new Array(9).fill('');
    //let gameBoard = ['x','o','x','o','x','o','x','o','x']
    let currentPlayer = 'x'
    let nextPlayer = 'o'
    let tempPlayer;
    let isGameOver = false;
    
    function displayBoard() {
        let board = document.querySelector('.board');
        /*      Reset Value of Tile     */
        for (const child of board.children) {
            child.innerText = ' '
        }
        for (let index = 0; index < gameBoard.length; index++) {
            
            board.children[index].innerText = gameBoard[index]
            
        }        
    }
    
    function playGame() {
        //takePlayerName()
        for (const child of board.children) {
            child.addEventListener('click',addTurnToGameboard)
        }
        
    }
    
    
    function changeTurn() {
        tempPlayer = nextPlayer;
        nextPlayer = currentPlayer;
        currentPlayer = tempPlayer;
    }
    
    function addTurnToGameboard (event) {
        if (event.target.innerText != '') {
            return;
        } else {
            gameBoard[event.target.dataset.index - 1] = currentPlayer;    
            changeTurn()
            displayBoard()    
            checkWinner()        
        }
        
    }
    

    /* function checkWinner() {
        if (isGameOver) {
            console.log('GAME OVER!')
        }
    } */


    return {displayBoard,playGame,gameBoard}
})();

const takePlayerName = () => {
    
}





/* function checkWinner() {
    if (Gameboard.gameBoard[0] === Gameboard.gameBoard[1] && Gameboard.gameBoard[1] ===  Gameboard.gameBoard[2]) {
        console.log('GAME OVER!')
    }
} */


 Gameboard.playGame()

const winningCombos = [{
    combo: [1, 2, 3],
},
{
    combo: [4, 5, 6],
},
{
    combo: [7, 8, 9],
},
{
    combo: [1, 4, 7],
},
{
    combo: [2, 5, 8],
},
{
    combo: [3, 6, 9],
},
{
    combo: [1, 5, 9],
},
{
    combo: [3, 5, 7],
},
];

function checkWinner() {
    console.log('checked')
    for (const winningCombo of winningCombos) {
        const {
            combo
        } = winningCombo;
        const squareValue1 = Gameboard.gameBoard[combo[0] - 1];
        const squareValue2 = Gameboard.gameBoard[combo[1] - 1];
        const squareValue3 = Gameboard.gameBoard[combo[2] - 1];
        if (squareValue1 != '' && squareValue1 === squareValue2 && squareValue1 === squareValue3) {

            gameOverScreen(squareValue1);
            return;
        }
    }
    /* //Check for a draw
    const allsquareFilledIn = boardState.every((square) => square !== null);
    if (allsquareFilledIn) {
        gameOverScreen(null);
    } */
}

function gameOverScreen(winnerText) {
    let text = "Draw!";
    if (winnerText != null) {
        text = `${winnerText} won!`;

    }
    //gameOverArea.className = "visible";
    alert(text)
    isGameOver = true;
}