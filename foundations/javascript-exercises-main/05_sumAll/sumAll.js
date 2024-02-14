const sumAll = function(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'ERROR'
    }
    let startRange = Math.min(num1, num2);
    if (startRange < 0){
        return 'ERROR'
    }
    let endRange = Math.max(num1, num2)
    let sum = 0;
    for (let i = startRange; i <= endRange; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
