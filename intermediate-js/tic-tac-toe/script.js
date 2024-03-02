const Gameboard = (function() {
    //define board state
    const rows = 3;
    const cols = 3;
    const board = [];

    //populate board with cells
    for (var i = 0; i < rows; i++){
        board[i] = [];
        for (var j = 0; j < cols; j++){
            board[i].push(Cell()); // Cell needs to be defined to hold three values
        }
    }

    //retrieve board state
    const getBoard = () => board;

    //Modify board state from player action
    const play = (x, y, playerToken) => {
        if (board[y][x].getValue() != "") {return}; // Failed Action 
        
        board[y][x].addToken(playerToken); // If valid place token
    };

    //print board state to console
    const printBoard = () =>{
        var str = "Board State:";
        for (var i = 0; i < rows; i++){
            for (var j = 0; j < cols; j++){
                str = str + String(board[i][j].getValue());
            }
        }
        return str
    };

    //And Out
    return {getBoard, play, printBoard};
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
    return {name, id};
}

const GameController = (function(){
    playerOne = makePlayer("PlayerOne", 1);
    playerTwo = makePlayer("PlayerTwo", 2);

    const players = [playerOne, playerTwo];

    let currPlayer = players[0];

    //switch players
    const switchPlayer = () => {
        currPlayer = currPlayer === players[0] ? players[1] : players[0]
    };

    const valueToSym = (value) => {
        switch (value){
            case 0:
                return "e";
            case 1:
                return "X";
            case 2:
                return "O";
        }
    }

    //update board
    const boardStateToDOM = () => {
        const boardNode = document.querySelector('table').childNodes[1]; //selects table body
        var currSym = ""
        for (var i = 0; i < 3; i++){
            for (var j = 0; j < 3; j++){
                var value = Gameboard.getBoard()[i][j].getValue();
                var currCell = boardNode.childNodes[i*2].childNodes[j*2+1]; //there is a pattern to the text nodes, so the i*2 is needed for traversal 
                var currSym = valueToSym(value);
                currCell.innerHTML = currSym;
            }
        }
    }

    //what exactly happens when someone plays a symbol
    const playSymbol = (evt) => {
        //mk vars
        var node = evt['target']
        var colid = node.id[0];
        var rowid = node.id[1];
        
        Gameboard.play(rowid, colid, currPlayer["id"]);

        boardStateToDOM();
        
        switchPlayer();

        //check for a win
        
        node.removeEventListener('click', playSymbol)
        //node.removeEventListener('hover', showSymbol)
    }

    //Add Event Listeners to cells
    const listenersToDOM = () => {
        const cellNodes = document.querySelectorAll('td');
        cellNodes.forEach(node => node.addEventListener('click', playSymbol));
    }

    //And Out
    return {listenersToDOM}
    
})();
GameController.listenersToDOM();