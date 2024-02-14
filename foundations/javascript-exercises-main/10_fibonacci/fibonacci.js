const fibonacci = function(input) {
    let index = Number(input);
    if (index < 0){return "OOPS"};
    if (index == 0){return 0};
    const fibArr = [1,1];
    for (let i = 0; i < index - 2; i++){
        fibArr.unshift(fibArr[0] + fibArr[1]);
        
    }
    return fibArr[0]
};

// Do not edit below this line
module.exports = fibonacci;
