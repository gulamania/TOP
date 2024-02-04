const repeatString = function(string, repeats) {
    if (repeats < 0 ){return 'ERROR'}
    let outString = "";
    for (let i = 0; i < repeats; i++){
        outString += string;
    }
    return outString;
};

// Do not edit below this line
module.exports = repeatString;
