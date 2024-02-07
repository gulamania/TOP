const bigContainer = document.querySelector('.bigContainer');

function renewCanvas(bigContainer) {
    for (var i = 0; i < 16; i++){
        var rowContainer = document.createElement('div');
        rowContainer.className = "rowContainer";
        bigContainer.appendChild(rowContainer)
        for (var i = 0; i < 16; i++){
            var cell = document.createElement('div');
            cell.className = "cell";
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = 'grey';
            });
            rowContainer.appendChild(cell);
        }
    }
};

renewCanvas(bigContainer);

