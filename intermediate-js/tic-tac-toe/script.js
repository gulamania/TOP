const Gameboard = (function(){
    //define board state
    const rows = 3;
    const cols = 3;
    const board = [];

    //populate board with cells
    for (var i = 0; i < rows; i++){
        board[i] = [];
        for (var j = 0; i < cols; j++){
            board[i].push(Cell()) // Cell needs to be defined to hold three values
        }
    }

    //retrieve board state
    const getBoard = () => board;

    //Modify board state from player action
    const play = (x, y, playerToken) => {
        if (board[y][x].getValue() != "") return; // Failed Action 
        
        board[y][x].addToken(playerToken); // If valid place token
    };

    //And Out
    return {getBoard, play};
})();

function Cell(){
    let value = 0;

    //add token method
    const addToken = (playerToken) => {
        value = playerToken;
    };

    //get value method
    const getValue = () => {
        return value
    };

    //And Out
    return {addToken, getValue};
}

function makePlayer(name, id){
    return {name, id}
}


/*
const GameController = (function(){
    playerOne = makePlayer("PlayerOne", 1);
    playerTwo = makePlayer("PlayerTwo", 2);

    const players = [playerOne, playerTwo];

    let currPlayer = players[0];

    //switch players
    const switchPlayer = () => {
        currPlayer = currPlayer === players[0] ? players[1] : players[0]
    };

    //update board
    const printBoard = () => {
        const boardNode = document.querySelector('table');
        for (var i = 0; i < rows; i++){
            for (var j = 0; i < cols; j++){
                var currCell = boardNode.childNodes[i].childNodes[j];
                switch (currCell.getValue()){
                    case 0:
                        currSym = "e"
                    case 1:
                        currSym = "X"
                    case 2:
                        currSym = "O"
                }
                currCell.innerHTML = currSym;
            }
        }
    }

    //play a round

    return {switchPlayer, printBoard}
    
})(); */
