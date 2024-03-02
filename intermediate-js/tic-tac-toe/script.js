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
    const printBoard = () => {
        var str = "Board State:";
        for (var i = 0; i < rows; i++){
            for (var j = 0; j < cols; j++){
                str = str + String(board[i][j].getValue());
            }
        }
        return str
    };

    //Check for a win! if win, will return relevant ids, else return nothing
    const checkWin = () => {
        var winbool = false;
        //Horizontal checks:
        for (var i = 0; i < rows; i++){
            var str = "";
            for (var j = 0; j < cols; j++){
                str = str + String(board[i][j].getValue());
            }
            if (str != "000"){
                winbool = str.split("").every(char => char === str[0]);
                if (winbool) return [[i,0],[i,1],[i,2]]
            }
        }
        //Vertical checks
        for (var j = 0; j < cols; j++){
            var str = "";
            for (var i = 0; i < rows; i++){
                str = str + String(board[i][j].getValue());
            }
            if (str != "000"){
                winbool = str.split("").every(char => char === str[0]);
                if (winbool) return [[j,0],[j,1],[j,2]]
            }
        }
        //Diagonal checks
        var str = "";
        for (let k = 0; k < 3; k++) { //L to R diagonal
            str = str + String(board[k][k].getValue());
        }
        
        if (str != "000"){
            winbool = str.split("").every(char => char === str[0]);
            if (winbool) return [[0,0],[1,1],[2,2]] 
        }

        var str = "";
        for (let k = 0; k < 3; k++) { //R to L diagonal
            var l = 2 - k;
            str = str + String(board[k][l].getValue());}
        if (str != "000"){
            winbool = str.split("").every(char => char === str[0]);
            if (winbool)return [[0,2],[1,1],[2,0]]
        }
        return 0 
        
    }

    //And Out
    return {getBoard, play, printBoard, checkWin};
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



const GameController = (function(){

    //1. Player Logic
    function makePlayer(name, id){
        return {name, id};
    }

    playerOne = makePlayer("PlayerOne", 1);
    playerTwo = makePlayer("PlayerTwo", 2);

    const players = [playerOne, playerTwo];
    let currPlayer = players[0];

    //switch players
    const switchPlayer = () => {
        currPlayer = currPlayer === players[0] ? players[1] : players[0]
    };

    //2. Update DOM with Board State
    const valueToSym = (value) => {
        switch (value){
            case 0:
                return "";
            case 1:
                return "X";
            case 2:
                return "O";
        }
    }

    //update board
    const boardStateToDOM = (winstate) => {
        const boardNode = document.querySelector('table').childNodes[1]; //selects table body
        //DOM update for a Play
        var currSym = ""
        for (var i = 0; i < 3; i++){
            for (var j = 0; j < 3; j++){
                var value = Gameboard.getBoard()[i][j].getValue();
                var currCell = boardNode.childNodes[i*2].childNodes[j*2+1]; //there is a pattern to the text nodes, so the i*2 is needed for traversal 
                var currSym = valueToSym(value);
                if (currSym == "X") currCell.classList.add("X");
                else if (currSym == "O") currCell.classList.add("O");
                currCell.innerHTML = currSym;
            }
        }
        //DOM update if a win
        if (winstate != 0){
            for (const id in winstate) {
                const cell = winstate[id];
                var i = cell[0];
                var j = cell[1];
                var currCell = boardNode.childNodes[i*2].childNodes[j*2+1]; //there is a pattern to the text nodes, so the i*2 is needed for traversal
                currCell.classList.add("win");
                    
            }
        }
    }

    //3. Add playing of Symbol functionality
    const cellNodes = document.querySelectorAll('td');
    //what exactly happens when someone plays a symbol
    const playSymbol = (evt) => {
        //mk vars
        var node = evt['target']
        var colid = node.id[0];
        var rowid = node.id[1];
        
        Gameboard.play(rowid, colid, currPlayer["id"]);
        winstate = Gameboard.checkWin();

        boardStateToDOM(winstate);
        
        //stop play if win reached else continue play
        if (winstate != 0){
            cellNodes.forEach(node =>  node.removeEventListener('click', playSymbol));
            cellNodes.forEach(node =>  node.removeEventListener('mouseover', showSymbol));
            cellNodes.forEach(node =>  node.removeEventListener('mouseout', unshowSymbol));
        } else {
            switchPlayer();
            node.removeEventListener('click', playSymbol);
            node.removeEventListener('mouseover', showSymbol);
            node.removeEventListener('mouseout', unshowSymbol);
        }

        
    }

    //3.5Hover Functionality
    const showSymbol = (evt) => {
        var node = evt['target'];
        var currSym = valueToSym(currPlayer["id"]);

        node.innerHTML = currSym;
        node.classList.add(currSym+"hover");
    }
    const unshowSymbol = (evt) => {
        var node = evt['target']
        var colid = node.id[0];
        var rowid = node.id[1];
        
        var currSym = valueToSym(Gameboard.getBoard()[colid][rowid].getValue());

        node.innerHTML = currSym;
        node.className = "";
    }

    //Add Event Listeners to cells
    const listenersToDOM = () => {
        cellNodes.forEach(node => node.addEventListener('click', playSymbol));
        cellNodes.forEach(node => node.addEventListener('mouseover', showSymbol));
        cellNodes.forEach(node => node.addEventListener('mouseout', unshowSymbol));
    }

    //Make those event listeners
    listenersToDOM();

    //And Out
    return {listenersToDOM}
    
})();