const reverseString = function(string) {
    let outString = '';
    for (let i = 0; i <= string.length; i++){
        outString += string.charAt(string.length - i);
    }
    return outString
};

// Do not edit below this line
module.exports = reverseString;
