const removeFromArray = function(array, ...args) {
    let outArray = []
    for (let element of array){
        if (!args.includes(element)){
            outArray.push(element)
        }
    }
    return outArray
};

removeFromArray([1, 2, 3, 4], 3)


// Do not edit below this line
module.exports = removeFromArray;
