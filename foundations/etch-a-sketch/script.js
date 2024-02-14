const bigContainer = document.querySelector('.bigContainer');
const resetButton = document.querySelector('button')

function addColorListener(cell){
    cell.addEventListener('mouseover', () => {
        var currentColor = Number(cell.style.
            backgroundColor.replace( /(^.+)(\w\d+\w)(.+$)/i,'$2'));
        var newColor = Math.max(currentColor - 25.6, 0);
        cell.style.backgroundColor = 'rgb('+ newColor + ',' + newColor + ',' + newColor + ')';
    });
};

function renewCanvas(bigContainer, n) {
    var edgeLength = 500/(n) - 4;
    var cellCount = n * n
    for (var i = 0; i < cellCount; i++){
        var cell = document.createElement('div');
        cell.className = "cell";
        cell.style.width = edgeLength + "px"; 
        cell.style.height = edgeLength + "px";
        cell.style.backgroundColor = '#ffffff'
        bigContainer.appendChild(cell);
    };
    const children = bigContainer.children;
    for (var index = 0; index < cellCount; index++){
        addColorListener(children[index]);
    };
};

resetButton.addEventListener('click', () => {
    bigContainer.innerHTML = ''
    const n = prompt("how many cells do you want on each edge?")
    renewCanvas(bigContainer, n);
});

renewCanvas(bigContainer, 16);






